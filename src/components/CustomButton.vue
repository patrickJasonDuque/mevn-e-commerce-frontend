<template>
  <v-row>
    <v-col col="2"></v-col>
    <v-col col="8">
      <v-btn
        :disabled="disable"
        outlined
        large
        block
        color="teal darken-3"
        @click="click"
      >{{label}}</v-btn>
    </v-col>
    <v-col col="2"></v-col>
  </v-row>
</template>

<script>
  export default {
    props: ["label", "disable","click"]
  };
</script>