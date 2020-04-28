<template>
  <div>
    <h1 class="my-3 text-center">{{ getStoreItem.title.toUpperCase() }}</h1>
    <v-divider></v-divider>
    <v-row class="justify-center">
      <Item
        v-for="items in getStoreItem.items"
        :key="items.id"
        :item="items"
        :description="getStoreItem.description"
      />
    </v-row>
  </div>
</template>

<script>
  import Item from "@/components/Item.vue";
  export default {
    components: { Item },
    computed: {
      getStoreItem() {
        const items = this.$store.getters["shopItem/getShopItems"];
        const specificItem = items.filter(
          item => item.title === this.$route.params.item
        );
        return specificItem[0];
      }
    }
  };
</script>

