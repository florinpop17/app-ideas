import { Pane, SideSheet, Spinner, Table } from 'evergreen-ui';
import { parse } from 'csv-string';
import ProjectsCSV from './Projects.csv';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Projects({ tier }) {
    const [data, setData] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const [content, setContent] = useState(undefined);
    fetch(ProjectsCSV).then(async (res) => {
        setData(parse(await res.text()));
    });
    return (
        <Pane>
            <SideSheet
                isShown={isShown}
                onCloseComplete={() => {
                    setIsShown(false);
                    setContent(undefined);
                }}
            >
                {content || <Spinner margin="auto" marginTop="1rem" />}
            </SideSheet>
            <Table width="fit-content" margin="auto">
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
                                        `./Projects/${row[3].trim()}/${row[1].trim()}.md`
                                    ).then(async (res) => {
                                        setContent(
                                            <ReactMarkdown>
                                                {await res.text()}
                                            </ReactMarkdown>
                                        );
                                    });
                                }}
                            >
                                {row.map((cell, j) => {
                                    if (j === 1) {
                                        return '';
                                    }
                                    return (
                                        <Table.TextCell key={j}>
                                            {cell}
                                        </Table.TextCell>
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
