import LineBreak from '../LineBreak';
import Article from '../Article';

const PLACEHOLDER_IMG = "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg";

let Br = () => <LineBreak height="5px" />;

export default 
<Article
    title="This is the First Test Article on the Site"
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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus pretium vulputate. Vivamus eu placerat orci. 
    Nullam tincidunt erat molestie accumsan semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
    magna tortor, auctor a condimentum sed, hendrerit ut turpis. Pellentesque a neque lacus. Donec eu ornare tellus, 
    ut suscipit metus. Cras vel mi in massa lacinia bibendum. Quisque dictum in risus consectetur mattis. Vivamus 
    euismod turpis sit amet ante eleifend elementum. Pellentesque nec ex placerat enim molestie pellentesque. Mauris 
    eget erat sed nunc luctus cursus.
    <Br />
    Curabitur quis sodales nulla. Ut condimentum lectus pulvinar diam rhoncus luctus ac ac justo. Aenean vehicula 
    arcu ut neque interdum varius. Cras a pharetra nisl. Donec a enim nec leo congue sollicitudin. Sed sed nisi 
    interdum nunc aliquet molestie. Nulla imperdiet enim eu aliquet facilisis. Donec quis dui tempor mi tempor tempor 
    ut vel dui. Fusce ullamcorper, ex vel rhoncus finibus, lectus ex laoreet lectus, sed pretium leo nulla et ex.
    <Br />
    <h1>Heading 1</h1>
    Nulla a viverra massa, sed auctor orci. Sed eu interdum libero. In at lacus turpis. Sed finibus pulvinar 
    pellentesque. Donec mauris nunc, ultrices fringilla nulla et, euismod efficitur enim. Nulla accumsan eleifend 
    felis, sed auctor ipsum cursus at. Aenean eget lacus eget mauris consequat porttitor a vel justo. Sed nisl dolor, 
    viverra nec ultrices non, vulputate in felis. Suspendisse quis diam cursus, fringilla nunc et, sagittis orci. 
    Integer viverra finibus tortor sit amet finibus. Nam sit amet est sed mauris bibendum malesuada sit amet ac magna. 
    Suspendisse arcu nisi, ornare vitae metus nec, semper varius augue. Nunc laoreet est vel lobortis iaculis.
    <Br />
    Ut venenatis ornare rutrum. Sed accumsan rutrum nibh, efficitur vulputate neque fringilla quis. Vivamus consequat 
    tempus ligula, eget porttitor libero malesuada iaculis. Vivamus lacus velit, lobortis eleifend rhoncus eget, 
    fermentum ut ligula. Fusce aliquet magna tincidunt urna fermentum luctus. Pellentesque iaculis ornare aliquam. 
    Nunc est urna, sollicitudin non fermentum vel, elementum sed nisi. Phasellus vulputate nisi molestie mi sodales 
    gravida.
    <img align="right" src="https://media.wired.com/photos/5dd593a829b9c40008b179b3/191:100/w_2338,h_1224,c_limit/Cul-BabyYoda_mandalorian-thechild-1_af408bfd.jpg" alt=""/>
    <Br />
    Morbi ullamcorper, lectus id commodo blandit, felis ex vulputate augue, nec fermentum ante nulla pharetra odio. 
    Quisque ut augue tempor, feugiat urna nec, porta tortor. Sed faucibus nibh in purus suscipit faucibus. Fusce 
    gravida molestie magna sed placerat. Aliquam a maximus sapien. Nulla ultrices quis est at varius. Morbi nisi 
    velit, finibus eu nisi ac, blandit congue nulla. Ut gravida lectus eget semper vestibulum.
    <Br />
    <h2>Heading 2</h2>
    Nulla sed pulvinar tellus, accumsan varius elit. Proin lobortis non nulla eget pellentesque. Integer nec diam 
    blandit tortor pharetra iaculis. Suspendisse potenti. Morbi tincidunt semper nibh ut accumsan. Nunc sodales 
    tincidunt nisi, non vehicula velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames 
    ac turpis egestas. Pellentesque varius diam id ornare tristique. Pellentesque a malesuada sapien, at 
    sollicitudin justo. Etiam sollicitudin, arcu eget sagittis convallis, mauris eros euismod nunc, sed tristique 
    magna orci vel ex.
    <Br />
    Sed eget enim aliquet, auctor arcu id, sollicitudin nulla. Vivamus consectetur vehicula neque vitae tincidunt. 
    Etiam auctor orci lorem, sed bibendum magna porta a. Pellentesque nec gravida nibh. Suspendisse ut sagittis 
    ipsum, vitae tincidunt odio. Nunc mauris ex, sodales sed diam ultrices, mollis tincidunt ex. Nullam egestas 
    imperdiet risus. Suspendisse tempor tristique ex non ultrices. Curabitur sagittis imperdiet neque non maximus. 
    Donec et leo ligula. Mauris fermentum hendrerit lacus, sit amet pulvinar velit lobortis nec. Sed sed risus 
    vel diam vulputate aliquam sit amet in dolor. Praesent vel nunc non enim viverra ultricies ac at purus. 
    Maecenas mauris lectus, rutrum nec aliquam ut, congue eu libero.
    <Br />
    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bbyoda-1575303784.jpeg" alt=""/>
    Aenean dignissim dui nec feugiat vestibulum. Nulla finibus lorem et leo rhoncus pharetra. In hac habitasse 
    platea dictumst. Vivamus imperdiet est id mi imperdiet suscipit. Class aptent taciti sociosqu ad litora 
    torquent per conubia nostra, per inceptos himenaeos. Nunc malesuada, ex eget lobortis ullamcorper, lacus odio 
    gravida quam, id consectetur orci enim ac nisl. Nunc dictum ex nunc, ac molestie velit euismod ut. Aenean 
    tempor sit amet massa eu fermentum. Proin ultrices aliquam nunc, at porttitor diam gravida at. Suspendisse 
    cursus, lorem et ullamcorper varius, urna leo iaculis orci, vel aliquet erat turpis quis est.
</Article>