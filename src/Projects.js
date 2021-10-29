import { Pane, SideSheet, Spinner, Table, Position } from 'evergreen-ui';
import { parse } from 'csv-string';
import ProjectsCSV from './Projects.csv';
import { useState } from 'react';
import marked from 'marked';

var data = [];
fetch(ProjectsCSV).then(async (res) => {
    data = parse(await res.text());
});

const unescapeHTML = (str) =>
    str.replace(
        /&amp;|&lt;|&gt;|&#39;|&#44;|&quot;/g,
        (tag) =>
            ({
                '&amp;': '&',
                '&lt;': '<',
                '&gt;': '>',
                '&#39;': "'",
                '&#44;': ',',
                '&quot;': '"',
            }[tag] || tag)
    );

const task_list = (str) => {
    var a = document.createElement('div');
    a.innerHTML = str;
    var b = new XPathEvaluator();
    var c = b.evaluate('.//input[@type="checkbox"]/parent::li', a);
    var d = c.iterateNext();
    var ds = [];
    while (d) {
        ds.push(d);
        d = c.iterateNext();
    }
    for (var e of ds) {
        e.classList.add('task-list-item');
    }
    return a.innerHTML;
};

export default function Projects({ tier }) {
    const [isShown, setIsShown] = useState(false);
    const [content, setContent] = useState(undefined);
    return (
        <Pane>
            <SideSheet
                isShown={isShown}
                position={
                    window.innerWidth < 640 ? Position.BOTTOM : Position.RIGHT
                }
                onCloseComplete={() => {
                    setIsShown(false);
                    setContent(undefined);
                }}
                preventBodyScrolling
            >
                <Pane
                    backgroundColor="#fafbff"
                    maxHeight={window.innerWidth < 640 ? '75vh' : undefined}
                    paddingX="1rem"
                    paddingBottom="1rem"
                >
                    {content || <Spinner margin="auto" marginTop="1rem" />}
                </Pane>
            </SideSheet>
            <Table width="fit-content" maxWidth="100%" margin="auto">
                <Table.Head>
                    {data[0]?.map((cell, i) => {
                        if (i === 1) {
                            return '';
                        }
                        return (
                            <Table.TextHeaderCell key={i}>
                                {cell}
                            </Table.TextHeaderCell>
                        );
                    })}
                </Table.Head>
                <Table.Body>
                    {data.map((row, i) => {
                        if (i === 0) {
                            return '';
                        }
                        if (row[3] !== tier) {
                            return '';
                        }
                        return (
                            <Table.Row
                                key={i}
                                height="fit-content"
                                padding="0.5rem"
                                isSelectable
                                onSelect={() => {
                                    setContent(undefined);
                                    setIsShown(true);
                                    fetch(
                                        `/app-ideas/Projects/${row[3].trim()}/${row[1].trim()}.md`
                                    ).then(async (res) => {
                                        setContent(
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: task_list(
                                                        marked(await res.text())
                                                    ),
                                                }}
                                            ></div>
                                        );
                                    });
                                }}
                            >
                                {row.map((cell, j) => {
                                    if (j === 1) {
                                        return '';
                                    }
                                    return (
                                        <Table.Cell key={j}>
                                            {unescapeHTML(cell)}
                                        </Table.Cell>
                                    );
                                })}
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        </Pane>
    );
}
