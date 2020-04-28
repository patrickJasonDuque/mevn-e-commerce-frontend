<template>
  <v-card
    class="mx-auto mt-4 pa-5"
    max-width="600"
  >
    <v-container>
      <v-text-field
        v-model="email"
        type="email"
        label="Email"
      />
      <v-text-field
        v-model="password"
        type="password"
        label="Password"
      />
      <CustomButton
        label="Sign In"
        :disable="email.length === 0 || password.length < 8"
        :click="login"
      />
    </v-container>
  </v-card>
</template>

<script>
  import CustomButton from "@/components/CustomButton.vue";
  export default {
    data: () => ({
      email: "",
      password: ""
    }),
    components: {
      CustomButton
    },
    methods: {
      login() {
        const form = {
          email: this.email,
          password: this.password
        };
        this.$store.dispatch("user/login", form);
      }
    }
  };
</script>