import {
    Pane,
    Paragraph,
    UnorderedList,
    ListItem,
    OrderedList,
    Link,
    Table,
    Heading,
} from 'evergreen-ui';
import coverimage from './app-ideas.png';
import coverimagemin from './app-ideas-min.png';

export default function Home() {
    return (
        <>
            <img
                width="100%"
                srcSet={`${coverimagemin} 1000w, ${coverimage} 2000w`}
                src={coverimage}
                alt="coverimage"
                style={{ aspectRatio: '7/4' }}
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                height="3rem"
                width="100%"
                preserveAspectRatio="none"
                style={{ transform: 'translateY(-0.3rem)' }}
            >
                <path
                    fill="#FFDB14"
                    d="M0,256L60,240C120,224,240,192,360,154.7C480,117,600,75,720,53.3C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                ></path>
            </svg>
            <Pane margin="auto" width="90%">
                <Paragraph>
                    Have you ever wanted to build something but you had no idea
                    what to do? Just as authors sometimes have "writers block"
                    it's also true for developers. This list is intended to
                    solve this issue once and for all! 👍
                </Paragraph>
                <Paragraph>These applications are:</Paragraph>
                <UnorderedList>
                    <ListItem>
                        great for improving your coding skills 💪;
                    </ListItem>
                    <ListItem>
                        great for experimenting with new technologies 🆕;
                    </ListItem>
                    <ListItem>
                        great for adding to your portfolio to impress your next
                        employer/client 📁;
                    </ListItem>
                    <ListItem>
                        great for using as examples in tutorials (articles or
                        videos) 📃;
                    </ListItem>
                    <ListItem>
                        easy to complete and also easily extendable with new
                        features 👌;
                    </ListItem>
                </UnorderedList>
                <Paragraph>
                    This is not just a simple list of projects, but a collection
                    that describes each project in enough detail so that you can
                    develop it from the ground up!
                </Paragraph>
                <Paragraph>
                    Each project has the following <b>features:</b>
                </Paragraph>
                <OrderedList>
                    <ListItem>A clear and descriptive objective;</ListItem>
                    <ListItem>
                        A list of User Stories which should be implemented
                        (these stories act more as a guideline than a forced
                        list of To-Do's. Feel free to add your own stories if
                        you want);
                    </ListItem>
                    <ListItem>
                        A list of bonus features that not only improve the base
                        project, but also your skills at the same time (these
                        are optional and should be attempted only after you have
                        completed the required user stories)
                    </ListItem>
                    <ListItem>
                        A list of bonus features that not only All the resources
                        and links to help you find what you need to complete the
                        project
                    </ListItem>
                </OrderedList>
                <Paragraph>
                    Here you can{' '}
                    <Link
                        href="https://www.youtube.com/watch?v=TNzCfgwIDCY"
                        rel="nofollow"
                    >
                        watch a video about this repository
                    </Link>
                    .
                </Paragraph>
                <hr />
                <Heading>Projects</Heading>
                <Paragraph>
                    Projects are divided into three tiers based on the knowledge
                    and experience required to complete them.
                </Paragraph>
                <Table width="89%" margin="auto" marginY="1rem">
                    <Table.Head>
                        <Table.TextHeaderCell
                            flexBasis="2rem"
                            flexShrink={0}
                            flexGrow={0}
                        >
                            Tier
                        </Table.TextHeaderCell>
                        <Table.TextHeaderCell>
                            Developer Profile
                        </Table.TextHeaderCell>
                    </Table.Head>
                    <Table.Body>
                        <Table.Row height="fit-content" padding="0.5rem">
                            <Table.Cell
                                flexBasis="2rem"
                                flexShrink={0}
                                flexGrow={0}
                            >
                                1
                            </Table.Cell>
                            <Table.Cell>
                                Developers in the early stages of their learning
                                journey. Those who are typically focused on
                                creating user-facing applications.
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height="fit-content" padding="0.5rem">
                            <Table.Cell
                                flexBasis="2rem"
                                flexShrink={0}
                                flexGrow={0}
                            >
                                2
                            </Table.Cell>
                            <Table.Cell>
                                Developers at an intermediate stage of learning
                                and experience. They are comfortable in UI/UX,
                                using development tools, and building apps that
                                use API services.
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height="fit-content" padding="0.5rem">
                            <Table.Cell
                                flexBasis="2rem"
                                flexShrink={0}
                                flexGrow={0}
                            >
                                3
                            </Table.Cell>
                            <Table.Cell>
                                Developers who have all of the above, and are
                                learning more advanced techniques like
                                implementing backend applications and database
                                services.
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <hr />
                <Heading>Plans for the future</Heading>
                <Paragraph>
                    We are planning to add more and more projects to this
                    repository. For this, we need your help! Find out how to
                    contribute below. 👇
                </Paragraph>
                <Paragraph>
                    We are also planning to create a website where you can
                    easily browse through all of the projects.
                </Paragraph>
                <hr />
                <Heading>Contribution</Heading>
                <Paragraph>
                    Any contributions are highly appreciated. 🙏 You can
                    contribute in two ways:
                </Paragraph>
                <OrderedList>
                    <ListItem>
                        create an issue and tell us your idea 💡. Make sure that
                        you use the new idea label in this case;
                    </ListItem>
                    <ListItem>
                        fork the project and submit a PR with your new idea.
                        Before doing that, please make sure that you read and
                        follow the Contribution Guide;
                    </ListItem>
                </OrderedList>
                <Heading size={400}>Examples</Heading>
                <Paragraph>
                    You can also add your own examples to the projects after you
                    have completed them. I highly encourage you to do this as it
                    will show others what amazing things were built! 👍
                </Paragraph>
                <hr />
                <Heading>Spread the word!</Heading>
                <Paragraph>
                    If the information from this repo was useful to you in any
                    way, make sure you give it a star 🌟, this way others can
                    find it and benefit too! Together we can grow and make our
                    community better! 😃
                </Paragraph>
                <Paragraph>
                    Do you have any suggestions on how we could improve this
                    project overall? Let us know! We'd love to hear your
                    feedback!
                </Paragraph>
                <Heading size={400}>Main Contributors 🙂🙂</Heading>
                <UnorderedList>
                    <ListItem>
                        <b>Florin Pop</b>:{' '}
                        <Link
                            href="https://twitter.com/florinpop1705"
                            rel="nofollow"
                        >
                            Twitter
                        </Link>{' '}
                        -{' '}
                        <Link
                            href="https://youtube.com/florinpop"
                            rel="nofollow"
                        >
                            YouTube Channel
                        </Link>{' '}
                        -{' '}
                        <Link href="https://florin-pop.com" rel="nofollow">
                            website
                        </Link>
                        .
                    </ListItem>
                    <ListItem>
                        <b>Jim Medlock</b>:{' '}
                        <Link
                            href="https://twitter.com/jd_medlock"
                            rel="nofollow"
                        >
                            Twitter
                        </Link>{' '}
                        -{' '}
                        <Link
                            href="https://medium.com/@jdmedlock"
                            rel="nofollow"
                        >
                            articles
                        </Link>
                    </ListItem>
                </UnorderedList>
                <hr />
                <Heading>100Days100Projects 🚀</Heading>
                <Paragraph>
                    As a bonus, I created the{' '}
                    <Link
                        href="https://www.florin-pop.com/blog/2019/09/100-days-100-projects"
                        rel="nofollow"
                    >
                        #100Days100Projects challenge
                    </Link>
                    . You can find in there 100 more ideas of smaller projects.
                    Enjoy! 😄
                </Paragraph>
            </Pane>
        </>
    );
}
