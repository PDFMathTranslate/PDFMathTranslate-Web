# PDFMathTranslate-Web

A Vue 3 single-page application for translating math-heavy PDF documents. Upload a PDF, choose a target language and translation service, and download the translated result in mono or dual-page layout.

![img](./misc/web.png)
## Features

- PDF upload and translation with math content preservation
- 11 languages supported (English, Chinese, Japanese, Korean, French, German, Spanish, Russian, Italian, Portuguese, Traditional Chinese)
- Mono and dual-page download formats
- Recent files tracking
- PWA support
- Dev mode for debugging

## Tech Stack

- Vue 3 (Composition API + `<script setup>`)
- Vite
- Tailwind CSS
- Reka UI
- vue-pdf-embed
- Vue i18n
- Axios

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
