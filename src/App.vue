<template>
  <v-app>
    <!-- <v-app-bar flat app> <NavBar /></v-app-bar> -->
    <!-- <v-main> -->
      <router-view />
    <!-- </v-main> -->
    <!-- <v-footer>
      <Footer />
    </v-footer> -->
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
:root {
  --slide_blue: #3c69be;
  --slide_light: #ddf0fd;
  --slide_light2: #90caf9;
  --slide_white: #fdfdfd;
}

// * {
//   font-family: Optimist;
// }
</style>
