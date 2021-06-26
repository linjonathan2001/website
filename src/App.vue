<template>
  <v-app>
    <v-app-bar flat app> <Header /></v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  metaInfo: {
    title: "Jonathan Lin",
    // link: [
    //   { rel: "favicon", href: "../src/assets/images/slide-logos/favicon.ico" },
    // ],
  },
  name: "App",
  components: { Header, Footer },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");

#app {
  font-family: "Quicksand", Arial, Helvetica, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #141414;
  background-color: #fdfdfd;
}

:root {
  --slide_blue: #3c69be;
  --slide_light: #ddf0fd;
  --slide_light2: #90caf9;
  --slide_white: #fdfdfd;
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
