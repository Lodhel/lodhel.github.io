# Портфолио Романа Татаринова

Персональный сайт на Vue 3 и Vite, опубликованный на [GitHub Pages](https://lodhel.github.io/).

```sh
corepack pnpm install
corepack pnpm dev
corepack pnpm build
```

Production-сборка статически генерирует главную страницу в `dist/index.html`.

## SEO / Indexing

### Google Search Console

1. Добавить URL-prefix ресурс `https://lodhel.github.io/` в [Google Search Console](https://search.google.com/search-console/).
2. Подтвердить владение одним из предложенных Google способов. Если выбран HTML-тег или HTML-файл, добавить его в репозиторий и заново опубликовать сайт.
3. В разделе **Sitemaps** отправить `https://lodhel.github.io/sitemap.xml`.
4. Открыть **URL Inspection** для `https://lodhel.github.io/`, запустить live-проверку и нажать **Request Indexing**.
5. В результатах live-проверки открыть rendered HTML/скриншот и убедиться, что виден основной текст страницы.
6. Проверить JSON-LD через [Rich Results Test](https://search.google.com/test/rich-results) и [Schema Markup Validator](https://validator.schema.org/).

### Яндекс Вебмастер

1. Добавить `https://lodhel.github.io/` в [Яндекс Вебмастер](https://webmaster.yandex.ru/) и подтвердить права. Для meta-тега или HTML-файла потребуется новый deployment.
2. Добавить `https://lodhel.github.io/sitemap.xml` в разделе **Индексирование → Файлы Sitemap**.
3. Проверить `robots.txt`, sitemap и главную страницу в инструментах диагностики Вебмастера.
4. Отправить `https://lodhel.github.io/` на переобход через **Индексирование → Переобход страниц**.

При добавлении отдельных индексируемых страниц нужно добавить для каждой отдельный `<url>` в `public/sitemap.xml` и указать её canonical URL.
