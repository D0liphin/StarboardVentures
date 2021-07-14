const Background = ({ src, location }) => <div id="background-container">
    <img src={src} style={{
        left: `${location[0]}px`,
        bottom: `${location[1]}px`,
        transform: `scale(${location[2]})`
    }}/>
</div>;

export default Background;