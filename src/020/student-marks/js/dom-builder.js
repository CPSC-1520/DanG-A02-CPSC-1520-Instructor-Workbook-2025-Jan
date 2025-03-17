/*
    This dom-builder provides tooling to create a document fragment in a fluent-style syntax.

    For example:
    let builder = new DomBuilder();
    builder.create('div')
           .andText('Lab 1')
           .and('strong', '5 %')
           .and('br')
           .and('small', 'Earned');
    let element = builder.fragment;
*/
const DomBuilder = class {
    constructor() {
        this.fragment = undefined;
    }

    // Methods
    create(tagName) {
        this.fragment = document.createElement(tagName);
        return this;
    }

    andText(text) {
        let textNode = document.createTextNode(text);
        this.fragment.appendChild(textNode);
        return this;
    }

    and(tagName, text = null) {
        let el = document.createElement(tagName);
        if(text) {
            let textNode = document.createTextNode(text);
            el.appendChild(textNode);
        }
        this.fragment.appendChild(el);
        return this;
    }

    with(tagName) {
        let builder = new DomBuilder();
        builder.create(tagName);
        this.fragment.appendChild(builder.fragment);
        return builder;
    }
}

export { DomBuilder }
