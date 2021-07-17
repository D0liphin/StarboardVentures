export default function getMarginHeight(windowWidth, multiplier=10) {
    return `${
        windowWidth < 1000 
        ? multiplier * 1000 / 192 
        : windowWidth * multiplier / 192
    }px`;
}