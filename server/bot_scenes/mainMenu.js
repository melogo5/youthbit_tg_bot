import { Markup } from 'telegraf';
import { menu } from '../utils/constants.js';

export function getMainMenu(authorized) {
    const firstRow = [menu.profile];

    if (!authorized) {
        firstRow.unshift(menu.login);
    }

    return Markup.keyboard([
        [Markup.button.webApp('Открыть webApp', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')],
        firstRow,
        [menu.trip, menu.pathEdit],
        [menu.pathView]
    ]).resize()
}

export function clearMenu() {
    // Markup.keyboard([]).resize();
    return Markup.removeKeyboard();
}