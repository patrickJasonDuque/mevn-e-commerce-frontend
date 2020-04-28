<template>
  <v-col
    sm="12"
    md="6"
    :lg="item.col"
    cols="4"
  >
    <router-link
      :to='item.route'
      class="black--text"
      :class="{disabled: !auth}"
    >
      <v-card
        class="mx-auto menu-item"
        max-width="600"
      >
        <v-img
          id="shopImage"
          class="white--text align-end bg-image"
          :height="item.height"
          :src="item.imageUrl"
        >
          <div class="content text-center mb-5 grey darken-1">
            <h6 class="title my-3 white--text">{{ item.name }}</h6>
          </div>
        </v-img>
      </v-card>
    </router-link>
  </v-col>
</template>

<script>
  export default {
    props: ["item"],
    computed: {
      auth() {
        return this.$store.getters["user/auth"];
      }
    }
  };
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  #shopImage {
    opacity: 0.9;
    z-index: 100;
  }

  #shopImage:hover {
    opacity: 1;
  }

  .menu-item {
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .bg-image:hover {
    transform: scale(1.1);
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  .content {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: auto;
    border: 1px solid #757575;
    opacity: 0.6;
    border-radius: 5px;
  }

  .content.title {
    opacity: 1;
  }

  .disabled {
    pointer-events: none;
    opacity: 0.6;
  }
</style>