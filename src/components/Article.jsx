/**
 * An interface for creating an article. Pass as an unrenderd child
 * to an `Articles` element. e.g.
 * ```js
 * <Articles>
 *     <Article />
 * </Articles>
 * ```
 * ## Props
 * - `title`: The title of the article
 * - `date`: The date the article was created 
 * - `author`: The author of the article
 * - `description`: The description of the article shown only on the
 *    article widget.
 * - `image`: The image used on the article widget
 * - `customLink`: Normally a link is automatically generated based on
 *    the `title` prop. If this is provided, a custom link is used for
 *    the article.
 */
const Article = ({
    title = "Missing Title",
    date = "missing date",
    author = "Missing Author",
    description = "Missing description.",
    image = "missing image",
    customLink = undefined,
    children
}) => <></>;

export default Article;