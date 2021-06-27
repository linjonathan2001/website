<template>
  <v-container class="px-0 py-0 mx-0 my-0">
    <v-row>
      <v-col cols="6">
        <v-img :src="require('@/assets/me.png')" :height="Dimensions" />
      </v-col>
      <v-col cols="6">
        <Chat />
      </v-col>
    </v-row>
    <v-container id="header">
      <v-row class="align-center">
        <v-col class="justify-center pa-0">
          <p id="name" class="black-text text-md">Jonathan Lin</p></v-col
        ></v-row
      >
    </v-container>
  </v-container>
</template>

<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-functions.js"></script>
<script>
import Chat from "../components/Chat.vue";

export default {
  name: "Home",
  components: { Chat },
  computed: {
    Dimensions() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "800";
        case "sm":
          return "1000";

        default:
          return "1000";
      }
    },
  },
};
</script>

<style lang="scss">
#header {
  position: absolute;
  top: 0;
  left: 24px;
}
#name {
  margin: 36px 8px 16px 8px;
}
</style>
