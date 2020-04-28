<template>
  <v-container>
    <v-spacer></v-spacer>
    <h1
      class="text-center my-3"
      v-if="userName"
    >Welcome {{ userName }}</h1>
    <v-divider></v-divider>
    <v-row class="justify-center">
      <ShopItems
        v-for="items in shopItems"
        :key="items.id"
        :item="items"
      />
    </v-row>
  </v-container>
</template>

<script>
  import ShopItems from "./ShopItems.vue";
  export default {
    components: {
      ShopItems
    },
    computed: {
      shopItems() {
        return this.$store.getters["shop/shopItems"];
      },
      userName() {
        return this.$store.getters["user/getUserName"];
      }
    }
  };
</script>