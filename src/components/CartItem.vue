<template>
  <v-container>
    <div class="justify-center align-center my-1">
      <v-row>
        <v-col col="6">
          <v-row>
            <v-col col="3"></v-col>
            <v-col col="3">
              <v-img
                :src="item.imageUrl"
                max-height="150"
                max-width="200"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col col="66">
          <v-col col="6">
            <div class="my-5">
              <h3 class="mx-5">{{ item.name }}</h3>
              <h4 class="mx-5">Price: ₱{{ item.price }}</h4>
              <h4 class="mx-5">Quantity: {{ item.quantity }}</h4>
              <v-btn
                @click="removeFromCart"
                class="mx-5 mt-1 white--text"
                color="red"
              >Remove from cart</v-btn>
            </div>
          </v-col>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
  export default {
    props: ["item"],
    computed: {
      userId() {
        return this.$store.getters["user/getId"];
      }
    },
    methods: {
      removeFromCart() {
        console.log(this.item);
        const data = {
          id: this.userId,
          itemId: this.item.itemId
        };
        this.$store.dispatch("userCart/removeFromCart", data);
      }
    }
  };
</script>

<style scoped>
  div.justify-center.align-center {
    justify-content: start;
    align-items: start;
  }
</style>