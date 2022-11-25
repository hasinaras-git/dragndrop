const createElement = (HTMLTag: any, target: any, innerText?: String | null) => {
    const container = document.createElement('div');
    const elementCreated = document.createElement(HTMLTag);
    elementCreated.textContent = innerText? innerText : '';
    container.appendChild(elementCreated);
    target.appendChild(container);
    return container;
}

export {
    createElement
}