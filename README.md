# Лабораторная работа: Husky + ESLint (контрольная группа)

Студент: Ван Кайбо. Дисциплина: Web-проектирование и web-дизайн.

## Запуск

```sh
npm ci
npm run lint
node calc.js
```

Проект создан с `npm init -y`, в нём настроены Git, `.gitignore`, ESLint и
Husky. Конфигурация ESLint использует ES Modules, JavaScript, среды Browser и
Node, без фреймворка и TypeScript. Файл `calc.js` реализует `add`, `sub`, `mul`,
`div` и блок `console.log`. Скрипт `lint` проверяет весь проект, а
`.husky/pre-commit` запускает его до каждого коммита.

Проверка с ошибочным вызовом `summ(2, 3)` завершилась ошибкой `no-undef`, и
Husky заблокировал коммит. После исправления коммит выполнен успешно. Подлинные
записи этих терминальных сеансов сохранены в
[`evidence/terminal`](evidence/terminal). Снимки экрана терминала:
[ошибка при коммите](evidence/terminal/01-failed-commit.png) и
[успешный коммит](evidence/terminal/02-successful-commit.png).
