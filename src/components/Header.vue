<template>
  <div class="container-fluid">
    <v-card flat>
      <v-container
        fluid
        class="pa-0"
      >
        <v-row class="child-flex">
          <div>
            <v-toolbar class="pa-0">
              <v-toolbar-title class="ml-3">
                <router-link
                  to="/"
                  style="color: inherit"
                >Computer Store</router-link>
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <p> </p>
          </div>

          <div>
            <v-toolbar
              dark
              class="pa-0"
            >
              <v-spacer></v-spacer>

              <h6
                class="subtitle-1 mr-5"
                v-if="checkAuth"
              >
                <router-link
                  to="/shop"
                  class="white--text"
                >Shop</router-link>
              </h6>
              <h6
                class="subtitle-1 mr-5"
                v-if="checkAuth"
              >
                <router-link to="/cart">
                  <v-icon>mdi-cart</v-icon>
                  <small>
                    <span>{{ getCart }}</span>
                  </small>
                </router-link>
              </h6>
              <h6
                class="subtitle-1 mr-5"
                v-if="!checkAuth"
              >
                <router-link
                  to="/signin"
                  class="white--text"
                >Sign In</router-link>
              </h6>
              <h6
                class="subtitle-1 mr-5"
                v-if="!checkAuth"
              >
                <router-link
                  to="/signup"
                  class="white--text"
                >Sign Up</router-link>
              </h6>
              <h6
                class="subtitle-1 mr-5"
                v-if="checkAuth"
                @click="logout"
              >
                <router-link
                  to="/signin"
                  class="white--text"
                >Log out</router-link>
              </h6>
            </v-toolbar>
          </div>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
  export default {
    computed: {
      checkAuth() {
        return this.$store.getters["user/auth"];
      },
      getCart() {
        let count = 0;
        this.$store.getters["userCart/getCart"].forEach(item => {
          count += item.quantity;
        });
        return count;
      }
    },
    methods: {
      logout() {
        this.$store.commit("userCart/clearCart");
        this.$store.dispatch("user/logout");
      }
    }
  };
</script>

<style scoped>
  a {
    text-decoration: none;
    color: inherit;
  }

  small span {
    color: white;
  }
</style>