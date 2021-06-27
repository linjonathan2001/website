<template>
  <v-container class="px-0 py-0 mx-0 my-0">
    <v-row no-gutters>
      <v-col cols="5" sm="7" no-gutters>
        <v-img :src="require('@/assets/me.png')" :height="Dimensions" />
      </v-col>
      <v-col cols="7" sm="5" align-self="start">
        <Chat />
      </v-col>
    </v-row>
    <v-container id="header">
      <p id="name" class="black-text text-md">Jonathan Lin</p>
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
  display: inline-block;
}
#name {
  margin: 36px 8px 16px 8px;
}
</style>
