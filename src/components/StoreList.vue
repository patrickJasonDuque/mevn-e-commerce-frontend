<template>
  <v-container>
    <StoreItem
      v-for="(items, i) in storeItems"
      :key="i"
      :items="items"
    />
  </v-container>
</template>

<script>
  import StoreItem from "./StoreItem.vue";
  export default {
    components: {
      StoreItem
    },
    computed: {
      storeItems() {
        return this.$store.getters["shopItem/getShopItems"];
      }
    }
  };
</script>