import merge from "deepmerge";
import config from '../../config/index.js';

const commandsList = `
/start - перезапустить бота
/menu - меню основных возможностей
/help - помощь
`;

const menuItems = {
    login: 'Авторизация',
    profile: 'Мой профиль',
    travel: 'Путешествовать',
    requests: 'Мои поездки'
}

const userInfoBase = {
  // id,
  // telegram,
  steps: {}, // start,
  info: {}, // profile, docs, phone, geo, univercity
};

const userInfo = { current: userInfoBase };

const getUserInfo = (telegram) => {
    console.log("get", telegram);
    return userInfo.current;
}

const setUserInfo = (telegram, data) => {
  console.log("set", telegram);
  userInfo.current = merge(userInfo.current, data);
}

const parseContext = (ctx) => {
  return {
    author: ctx.update.message.from
  };
}

const webApp = config.telegram.webapp.url + "/#";

export {
    commandsList,
    menuItems,
    getUserInfo,
    setUserInfo,
    parseContext,
    webApp
};
