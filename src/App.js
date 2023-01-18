// colorscheme: https://coolors.co/1c1616-ffdb14-38408a-5863f8-626cf8-e9f3f5
// evergreen-ui docs: https://evergreen.segment.com/

import './App.css';
import { Tablist, Tab, Pane, Link, AddIcon } from 'evergreen-ui';
import React from 'react';
import Home from './Home';
import Projects from './Projects';

export default function App() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const tabs = ['Home', 'Tier 1', 'Tier 2', 'Tier 3'];
    const pages = [
        <Home></Home>,
        <Projects tier="1-Beginner"></Projects>,
        <Projects tier="2-Intermediate"></Projects>,
        <Projects tier="3-Advanced"></Projects>,
    ];
    return (
        <>
            <Pane backgroundColor={selectedIndex === 0 ? '#FFDB14' : '#FAFBFF'}>
                <Tablist
                    flexBasis={240}
                    padding={12}
                    backgroundColor="#5863f8"
                    display="flex"
                    justifyContent="center"
                >
                    {tabs.map((tab, index) => (
                        <Tab
                            color="#111"
                            key={tab}
                            onSelect={() => {
                                setSelectedIndex(index);
                            }}
                            isSelected={index === selectedIndex}
                            aria-controls={`panel-${tab}`}
                        >
                            {tab}
                        </Tab>
                    ))}
                    <Link
                        marginY="auto"
                        marginRight="0.5rem"
                        style={{ color: '#000000' }}
                        title="New Idea Guidelines"
                        href="https://github.com/josephabbey/app-ideas/blob/master/CONTRIBUTING.md"
                    >
                        <AddIcon
                            style={{ width: '1.3rem', height: '1.3rem' }}
                        />
                    </Link>
                    <Link
                        marginLeft="0.5rem"
                        title="GitHub"
                        href="https://github.com/josephabbey/app-ideas/"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.75rem"
                            height="1.75rem"
                            viewBox="0 0 30 30"
                            style={{ fill: '#000000' }}
                        >
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                    </Link>
                </Tablist>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    height="3rem"
                    width="100%"
                    preserveAspectRatio="none"
                    // style={{ position: 'absolute' }}
                >
                    <path
                        fill="#5863f8"
                        d="M0,128L60,122.7C120,117,240,107,360,117.3C480,128,600,160,720,181.3C840,203,960,213,1080,192C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    ></path>
                </svg>
            </Pane>
            <Pane background="tint1" flex="1" paddingBottom="2rem">
                {tabs.map((tab, index) => (
                    <Pane
                        key={tab}
                        id={`panel-${tab}`}
                        role="tabpanel"
                        aria-labelledby={tab}
                        aria-hidden={index !== selectedIndex}
                        display={index === selectedIndex ? 'block' : 'none'}
                    >
                        {pages[index]}
                    </Pane>
                ))}
            </Pane>
        </>
    );
}
