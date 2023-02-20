# Бот студтуризм.рф

# Что он умеет:
- Подбирать путешествия
- Планировать поездки
- Просматривать информацию об университетах

# Особенности проекта:
- Не нужно скачивать никакие приложения. Нужен только Telegram
- Кроссплатформенность

# Основной стек технологий
- JavaScript, Typescript
- Telegraf.js
- React
- Webpack, Babel
- PostgreSQL, SQL
- GIT

## Ссылка на бота
https://t.me/stud_turizm_bot

## Установка и настройка
нужен postgreSQL и nodeJS (18+)

в постгрессе поднять пустую БД, назвать ее как-нибудь, например `youthbit`

> Конфиг можно подправить под себя в `config/local.js`

## Запуск
```shell
$ npm install
```

Для проброса локалхост-фронт-сервера для web-app потребуется приложение [ngrok](https://ngrok.com/)

(ну или задеплоить фронта на гитхабе для прода)
(гайд тут - https://github.com/revenkroz/telegram-web-app-bot-example)

---

> далее потребуется 4 вкладки терминала

### старт бека
```shell
$ npm run start-backend
```

### старт фронта для веб-аппы

```shell
$ npm run start-frontend
```

### прокинем бек через ngrok
```shell
$ ngrok http 8080 --host-header=rewrite
```
> примечание - порт 8080 по-умолчанию, прописан в `config/global.js` в `frontend.port`

получивщийся адрес (https) надо прописать в `config/local.js` в `telegram.webapp.url`

### старт ТГ бота
```shell
$ npm run start-bot
```

---

#### Примечание
возможно стоит почитать этот раздел, и можно в тестовом окружении поднять без https

https://core.telegram.org/bots/webapps#testing-web-apps

P.S. может понадобиться купить премиум телеги
