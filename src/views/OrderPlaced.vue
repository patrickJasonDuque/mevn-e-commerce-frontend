<template>
  <div class="text-center">
    <h1 class="display-4">Order Placed</h1>
    <Order
      v-for="order in orders"
      :order="order"
      :key="order.id"
    />
  </div>
</template>

<script>
  import Order from "../components/Order.vue";
  export default {
    components: { Order },
    computed: {
        orders() {
        //   this.$store.dispatch(
        //     "userCart/initCart",
        //     this.$store.getters["user/getId"]
        //   );
          const orders = [...this.$store.getters["userCart/getCart"]];
          return orders;
        }
    }
  };
</script>