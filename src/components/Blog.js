import { Link } from 'react-router-dom';

import Background from './Background.js';
import BottomBar from './BottomBar.js';
import TopBar from './TopBar.js';
import Page from './Page.js';
import LineBreak from './LineBreak';

const PLACEHOLDER_IMG = "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg";

const BlogWidget = ({ 
    title="Missing Title", 
    date="missing date", 
    author="Missing Author",
    description="Missing description.", 
    image="missing image", 
    children 
}) => {
    return <div class="blog-widget">
        <div style={{ padding: "20px" }}>
            <div class="big-meta">
                <div class="text-container">
                    <div class="title">{title}</div>
                    <div class="description">{description}</div>
                </div>
                <div class="img-container">
                    <img src={image} alt=""/>
                </div>
            </div>
            <div class="small-meta">
                <div class="date">{date}</div>
                <div>·</div>
                <div class="author">{author}</div>
            </div>
        </div>
    </div>
};

const BlogWidgets = ({ children }) => <div style={{ display: "flex", flexDirection: "column" }}>
    {children}
</div>

const Blog = () => (
    <>
        <Background image="home-background-3.jpg"/> 
        <TopBar /> 
        <Page>
            <major-heading>Blog</major-heading>
            <BlogWidgets>
                <BlogWidget
                    title="This is the First Test Blog on the Site"
                    date="18/07/2021"
                    author="Oli Iliffe"
                    description={`
                        This is a placeholder description... Nothing to see here really. Just trying
                        to fill up this space. This is a placeholder description... Nothing to see here 
                        really. Just trying to fill up this space. This is a placeholder description... 
                        Nothing to see here really. Just trying to fill up this space.
                    `}
                    image={PLACEHOLDER_IMG}
                >
                </BlogWidget>
                <BlogWidget
                    title="This is the Second Test Blog on the Site"
                    date="18/07/2021"
                    author="Oli Iliffe"
                    description={`
                        This is a placeholder description... Nothing to see here really. Just trying
                        to fill up this space. This is a placeholder description... Nothing to see here 
                        really. Just trying to fill up this space. This is a placeholder description... 
                        Nothing to see here really. Just trying to fill up this space.
                    `}
                    image={PLACEHOLDER_IMG}
                >
                </BlogWidget>
                <BlogWidget
                    title="This is the Third Test Blog on the Site"
                    date="18/07/2021"
                    author="Oli Iliffe"
                    description={`
                        This is a placeholder description... Nothing to see here really. Just trying
                        to fill up this space. This is a placeholder description... Nothing to see here 
                        really. Just trying to fill up this space. This is a placeholder description... 
                        Nothing to see here really. Just trying to fill up this space.
                    `}
                    image={PLACEHOLDER_IMG}
                >
                </BlogWidget>
                <BlogWidget
                    title="This is the Fourth Test Blog on the Site"
                    date="18/07/2021"
                    author="Oli Iliffe"
                    description={`
                        This is a placeholder description... Nothing to see here really. Just trying
                        to fill up this space. This is a placeholder description... Nothing to see here 
                        really. Just trying to fill up this space. This is a placeholder description... 
                        Nothing to see here really. Just trying to fill up this space.
                    `}
                    image={PLACEHOLDER_IMG}
                >
                </BlogWidget>
            </BlogWidgets>
        </Page>
        <BottomBar />
    </>
)

export default Blog;