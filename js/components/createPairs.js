import { createElement } from "../helper/createElement.js"

export const createPairs = (app) => {
    const pairs = createElement('section', {
        className: 'card section-offset',
    });

    const container = createElement('div', {
        className: 'container card__container'
    });

    const buttonReturn = createElement('button', {
        className: 'card__return',
        arialLabel: 'Возврат к категориям',
    });

    const buttonCard = createElement('button', {
        className: 'card__item',
    });

    const front = createElement('span', {
        className: 'card__front',
        textContent: '1'
    });

    const back = createElement('span', {
        className: 'card__back',
        textContent: '2'
    });

    buttonCard.append(front, back);
    container.append(buttonReturn, buttonCard);
    pairs.append(container);

    const mount = data => {
        app.append(pairs);
    }

    const unmount = data => {
        pairs.remove();
    }

    return {buttonReturn, mount, unmount};
}