<template>
  <div>
    <img
      :src="order.imageUrl"
      alt=""
    >
    <h1>Your order {{ order.name }}</h1>
    <h4>Price: {{ order.price }}</h4>
    <p>has been placed</p>
  </div>
</template>

<script>
  export default {
    props: ["order"]
  };
</script>