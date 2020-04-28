<template>
  <v-col
    xs="12"
    sm="12"
    md="6"
    lg="6"
    col="12"
  >
    <transition
      appear
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster"
      mode="out-in"
    >
      <v-alert
        style="position: absolute; z-index: 10000"
        v-if="showAlert"
        type="success"
        text
        class="mx-2 green lighten-4"
      >
        {{ item.name }} added to cart
      </v-alert>
    </transition>
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="mx-auto"
        color="grey lighten-4"
        max-width="600"
      >
        <v-img
          :aspect-ratio="16/9"
          :src="item.imageUrl"
        >
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
              style="height: 100%;"
            >
              ₱ {{ item.price }}
            </div>
          </v-expand-transition>
        </v-img>
        <v-card-text
          class="pt-6"
          style="position: relative;"
        >
          <v-btn
            absolute
            color="black"
            class="white--text"
            fab
            large
            right
            top
          >
            <v-icon
              @click="addToCart"
              class="white--text"
            >mdi-cart</v-icon>
          </v-btn>
          <h3 class="display-1 font-weight-light black--text mb-2">{{ item.name }}</h3>
          <div class="font-weight-light title mb-2">
            {{ description }}
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
  export default {
    data: () => ({
      showAlert: false
    }),
    props: ["item", "description"],
    computed: {
      userId() {
        return this.$store.getters["user/getId"];
      },
      auth() {
        return this.$store.getters["user/auth"];
      }
    },
    methods: {
      addToCart() {
        const item = {
          name: this.item.name,
          itemId: this.item.id,
          imageUrl: this.item.imageUrl,
          price: this.item.price,
          quantity: 1
        };
        const data = {
          id: this.userId,
          item
        };
        this.$store.dispatch("userCart/addItemToCart", data);
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 1000);
      }
    }
  };
</script>

<style scoped>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.5;
    position: absolute;
    width: 100%;
  }
</style>