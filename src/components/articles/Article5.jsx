import LineBreak from '../LineBreak';
import Article from '../Article';

const PLACEHOLDER_IMG =
  'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg';

let Br = () => <LineBreak height="5px" />;

export default (
  <Article
    title="Basics of OPEX"
    date="29/10/2021"
    author="Roger Iliffe"
    description={`
    If you own a ship but not an operating company then the most common way for
    you to charter out your vessel will be on a time charter basis.
    This means that you will have to pay the OPEX.
    So what are the key components of OPEX and how risky are they?
    `}
    image={PLACEHOLDER_IMG}
  >
    <p>
      a paragraph
    </p>
    <img align="right" src="./Article4-pixabay.jpg" alt="" />
    <Br />
    <h3>A Title</h3> 
    <p>
      Another paragraph
    </p>
    <Br />
    <h3>Another Title</h3>
  </Article>
);
