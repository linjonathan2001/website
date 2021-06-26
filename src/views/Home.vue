<template>
  <div>
    <v-form>
      <v-container>
        <v-row class="text-sm flex-column justify-center align-center pt-8"
          >Message Me</v-row
        >
        <v-col cols="12">
          <v-text-field
            v-model="name"
            label="Full Name"
            name="name"
          ></v-text-field>
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
            <v-btn class="text-capitalize" @click="submit">Submit</v-btn>
          </v-row>
        </v-container>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data: () => ({
    name: "",
    message: "",
  }),
  methods: {
    submit() {
      const payload = { text: this.name + " says " + this.message };
      const headers = {
        "content-type": "application/json",
      };
      axios.post(
        "http://hooks.slack.com/services/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",
        payload,
        { headers }
      );
    },
  },
};
</script>

<style lang="scss"></style>
