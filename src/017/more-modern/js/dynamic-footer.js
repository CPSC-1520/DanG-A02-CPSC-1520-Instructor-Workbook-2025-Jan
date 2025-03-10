// ~./js/dynamic-footer.js

// Browsers supply a DOM API that allows for a more fine-grained control when manipulating
// HTML. With it, you can create HTML Elements, move elements around, or just about anything
// you want to do on the web page.

/**
 * Generates an HTMLElement with copyright information
 * @param {number} startYear The start year of the copyright range
 * @param {string} copyrightHolder The name of the copyright holder
 * @return {HTMLElement} A `<footer>` element
 */
const generateFooter = function(startYear, copyrightHolder) {
    // Create a <footer><div class="card">&copy; 2019-2025 - Dan Gilleland</div></footer>
    // We won't be able to use the &copy; HTML Character entity; we'll need to use the unicode
    // version: \u000A9
    let foot = document.createElement('footer'); // a free-floating element
    let div = document.createElement('div');    // <div></div>
    div.setAttribute('class', 'card');          // <div class="card"></div>

    let currentYear = new Date().getFullYear();
    let text = `\u00A9 ${startYear} - ${currentYear} - ${copyrightHolder}`;
    let textNode = document.createTextNode(text);

    // Assembling the parts
    div.appendChild(textNode);
    foot.appendChild(div);

    return foot;
}

export { generateFooter }
