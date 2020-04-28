<template>
  <div>
    <v-container>
      <h1
        v-if="getCartItems.length === 0"
        class="display-1 text-center"
      >No Items in cart yet</h1>
      <CartItem
        v-for="cartItems in getCartItems"
        :key="cartItems.id"
        :item="cartItems"
      />
      <h4
        class="text-center display-1"
        v-if="getCartItems.length !== 0"
      >Subtotal: ₱{{ subTotal / 100 }}</h4>
      <div
        class="text-end"
        v-if="getCartItems.length !== 0"
      >
        <template>
          <div class="text-center">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  color="primary"
                  v-on="on"
                >
                  Continue to checkout
                </v-btn>
              </template>

              <v-card>
                <v-card-title
                  class="headline grey lighten-2"
                  primary-title
                >
                  Pay with Card
                </v-card-title>

                <div>
                  <stripe-elements
                    ref="elementsRef"
                    :pk="publishableKey"
                    :amount="amount"
                    locale="auto"
                    @token="tokenCreated"
                    @loading="loading = $event"
                  >
                  </stripe-elements>
                  <v-container>
                    <v-text-field
                      v-model="description"
                      type="text"
                      label="description"
                    />
                  </v-container>
                  <p class="text-center">Please enter your card details</p>
                  <div class="text-center mb-5">
                    <v-btn @click="submit">Pay ₱{{subTotal / 100}}</v-btn>
                  </div>
                </div>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    @click="dialog = false"
                  >
                    Shop more
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </template>
      </div>
    </v-container>
  </div>
</template>

<script>
  import { StripeElements } from "vue-stripe-checkout";
  import router from "../router/index";
  import axios from "axios";

  import CartItem from "@/components/CartItem.vue";
  export default {
    components: {
      CartItem,
      StripeElements
    },
    computed: {
      getCartItems() {
        return this.$store.getters["userCart/getCart"];
      },
      subTotal() {
        const item = this.$store.getters["userCart/getCart"];
        const total = item.map(i => +i.quantity * +i.price);
        return total.reduce((a, b) => a + b, 0) * 100;
      },
      getId() {
        return this.$store.getters["user/getId"];
      }
    },
    data: () => ({
      loading: false,
      amount: 1000,
      publishableKey: "pk_test_zyYm0slf57VTt0fxGOaWv2xw00lubmcejk",
      token: null,
      charge: null,
      dialog: false,
      description: ""
    }),
    methods: {
      submit() {
        this.$refs.elementsRef.submit();
      },
      tokenCreated(token) {
        this.token = token;
        // for additional charge objects go to https://stripe.com/docs/api/charges/object
        this.charge = {
          source: token.id,
          amount: this.amount, // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
          description: this.description // optional description that will show up on stripe when looking at payments
        };
        const data = {
          amount: this.subTotal,
          name: "Patrick Duque",
          email: "patrick@test.com",
          token: this.token,
          customerId: this.$store.getters["user/getId"],
          description: this.description
        };
        axios
          .post(
            `https://patrickduque-mevn-server.glitch.me/checkout/${this.getId}`,
            data
          )
          .then(() => {
            this.$store.dispatch("userCart/initCart", this.getId);
            router.push("/orders");
          })
          .catch(console.log);
      }
    }
  };
</script>