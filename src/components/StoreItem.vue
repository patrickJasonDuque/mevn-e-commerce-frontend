<template>
  <v-container>
    <router-link :to="`/shop/${items.title}`">
      <h1 class="display-2 black--text">{{ items.title.toUpperCase() }}</h1>
      <v-row>
        <v-col
          col="12"
          md="3"
          v-for="(pics, i) in items.items"
          :key="pics.id"
        >
          <v-img
            height="300"
            max-width="300"
            v-if="i < 4"
            :src="pics.imageUrl"
            alt=""
          />
        </v-col>
      </v-row>
    </router-link>
  </v-container>
</template>

<script>
  export default {
    props: ["items"]
  };
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>