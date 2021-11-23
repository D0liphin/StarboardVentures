/**
 * Converts`text` into kebab case and returns it. Also strips any 
 * non-letter characters.
 */
export default function makeKebab(text) {
    return text.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^a-z\-]/g);
}