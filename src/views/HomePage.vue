<template>
  <div class="home">
    <ShopList />
  </div>
</template>

<script>
  import ShopList from "../components/ShopList.vue";

  export default {
    name: "Home",
    components: {
      ShopList
    },
    mounted() {
      const id = this.$store.getters["user/getId"];
      this.$store.dispatch("userCart/initCart", id);
    }
  };
</script>

<style scoped>
</style>
