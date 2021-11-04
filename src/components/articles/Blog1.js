import Article from '../Article';

const PLACEHOLDER_IMG = "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg";

export default (
  <Article
    title="This is the first actual test blog"
    date="25/07/2021"
    author="Roger Iliffe"
    description={`
        Just made a change. This is a placeholder description... Nothing to see here really. Just trying
        to fill up this space. This is a placeholder description... Nothing to see here 
        really. Just trying to fill up this space. This is a placeholder description... 
        Nothing to see here really. Just trying to fill up this space.
    `}
    image={PLACEHOLDER_IMG}
  >
      Now I actually need to input some content. 
  </Article>
);