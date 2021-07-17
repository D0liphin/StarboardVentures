import Background from './Background.js';
import BottomBar from './BottomBar.js';
import TopBar from './TopBar.js';
import Page from './Page.js';
import LineBreak from './LineBreak';

const Blog = () => (
    <>
        <Background images={["7Ebx92w.png"]}/> 
        <TopBar /> 
        <Page>
            <major-heading>Blog</major-heading>
        </Page>
        <BottomBar />
    </>
)

export default Blog;