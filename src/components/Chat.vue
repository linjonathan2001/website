<template>
  <v-form>
    <v-container>
      <v-row class="text-sm flex-column justify-center align-center pt-8"
        >Message Me</v-row
      >
      <v-col cols="12">
        <v-text-field v-model="name" label="Name" name="name"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="message"
          label="Say Hi"
          name="message"
        ></v-text-field>
      </v-col>
      <v-container>
        <v-row class="align-left">
          <v-btn class="text-capitalize" @click="submit">Send</v-btn>
        </v-row>
      </v-container>
    </v-container>
  </v-form>
</template>

<script>
const axios = require("axios");

export default {
  data: () => ({
    name: "",
    message: "",
  }),
  methods: {
    submit() {
      if (this.message != "") {
        const payload = {
          params: { text: this.name + " says: " + this.message },
        };
        axios
          .get(
            "https://us-central1-jonathan-lin-website.cloudfunctions.net/sendSlackMessage",
            payload
          )
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      this.message = "";
    },
  },
};
</script>

<style lang="scss"></style>
