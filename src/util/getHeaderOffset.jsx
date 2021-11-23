/**
 * Returns an appropriate height to offset the `Page` by due to 
 * the header; does not actually return the height of the `TopBar`.
 * We use this as a base offset in a couple of locations; it's also
 * used with the `BottomBar` so that it has a minimum distance 
 * from the content above it.
 */
export default function getHeaderOffset(windowWidth) {
    return windowWidth > 800
        ? '120px'
        : '150px';
}