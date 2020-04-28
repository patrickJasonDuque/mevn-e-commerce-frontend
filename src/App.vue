<template>
  <v-app>
    <Header />
    <v-content>
      <transition
        appear
        enter-active-class="animated fadeIn faster"
        leave-active-class="animated fadeOut faster"
        mode="out-in"
      >
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
  import Header from "@/components/Header";
  export default {
    name: "App",

    components: { Header },

    data: () => ({
      //
    }),
    created() {
      this.$store.dispatch("shopItem/getShopItems");
      this.$store.dispatch("user/tryAutoLogin");
    }
  };
</script>

<style scoped>
</style>
