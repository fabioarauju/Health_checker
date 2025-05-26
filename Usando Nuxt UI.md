Primeiro, temos que instalar o nuxt ui:
```sh
npm install @nuxt/ui
```

Depois, é necessário incluir o nuxt ui no `nuxt.config.ts`, e apontar o css que fará a utilização do ui.
```js
modules: [
  "@nuxt/fonts", 
  "@nuxt/icon", 
  "@nuxt/image",
  "@nuxt/ui",
],
css: [
  "assets/styles/main.css",
  "assets/styles/elements.css",
  "assets/styles/components.css",
],

srcDir: 'app/',

ui: {
  theme: {
    colors: [
      'primary',
      'secondary'
    ]
  }
}
```

E, devemos iniciar o tema no main.css:
```css
@import "tailwindcss";
@import "@nuxt/ui";

:root {
  --uva: #6c2bd9;
  --menta: #2aff8a;
  --menta-light: #8fffc2;
  --pera: #ffb672;
  --creme: #fdf8f2;
  --grafite: #14141f;

  font-size: 10px;
}

@theme {
  --color-primary: var(--menta);
  --color-uva: var(--uva);
  --color-menta: var(--menta);
  --color-menta-light: var(--menta-light);
  --color-pera: var(--pera);
  --color-creme: var(--creme);
  --color-grafite: var(--grafite);

  --ui-bg: var(--grafite);
  --ui-text: var(--creme);
}

```

Por fim, no `app.vue`, devemos colocar isso:
```vue
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

E pronto, o setup está completo.