import merge from "deepmerge";
import config from '../../config/index.js';

const commandsList = `
/start - перезапустить бота
/menu - меню основных возможностей
/help - помощь
`;

const menuItems = {
    login: 'Авториз1ация',
    profile: 'Мой профиль',
    trip: 'Спланировать путешествие',
    pathEdit: 'Редактировать путешествие',
    pathView: 'Смотреть мой маршрут'
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

const webApp = `https://${config.telegram.webapp.host}:${config.telegram.webapp.port}`;

export {
    commandsList,
    menuItems,
    getUserInfo,
    setUserInfo,
    parseContext,
    webApp
};
