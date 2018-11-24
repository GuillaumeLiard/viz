<template>
  <div class="layout">
    <nuxt-link
      class="link"
      to="/">home
    </nuxt-link>
    <nuxt-link
      class="link"
      to="/d3">d3 components
    </nuxt-link>
    <nuxt-link
      class="link"
      to="/infinityBox">infinity box
    </nuxt-link>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.link {
  margin-right: 1rem;
}
</style>
