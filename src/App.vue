<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  metaInfo: {
    title: "Jonathan Lin",
    // link: [
    //   { rel: "favicon", href: "../src/assets/images/slide-logos/favicon.ico" },
    // ],
  },
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");

#app {
  font-family: "Quicksand", Arial, Helvetica, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #141414;
  background-color: var(--white);
}

:root {
  --slide_blue: #3c69be;
  --white: #fdfdfd;
  --black: #141414;
}

.white-text {
  color: var(--white);
}

.black-text {
  color: var(--black);
}

.white {
  color: var(--white);
}

.black {
  color: var(--black);
}

.text-xs {
  font-size: 18px;
}

.text-sm {
  font-size: 24px;
}

.text-md {
  font-size: 36px;
}

.text-lg {
  font-size: 48px;
}

// * {
//   font-family: Optimist;
// }
</style>
