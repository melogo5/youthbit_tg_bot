import { Markup } from 'telegraf';
import { menuItems, getUserInfo, webApp } from '../utils/constants.js';

export function getMainMenu(telegram) {
  const user = getUserInfo(telegram);
  const menu = [];

  if (!user.steps.auth) {
    menu.push([Markup.button.webApp(webApp + "/login", webApp + "/login")]);
  }

  if (user.steps.start === true && user.steps.auth) {
    menu.push([menuItems.profile]);
  }

  // const firstRow = [menu.profile];

  // if (!authorized) {
  //     firstRow.unshift(menu.login);
  // }

  // [
  //  [Markup.button.webApp('Открыть webApp', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')],
  //  [menu.profile]
  //  [menu.trip, menu.pathEdit],
  //  [menu.pathView]
  // ]

  return Markup.keyboard(menu).resize();
}

export function clearMenu() {
  return Markup.removeKeyboard();
}
