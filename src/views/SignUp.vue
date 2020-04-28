<template>
  <v-card
    class="mx-auto mt-4 pa-5"
    max-width="600"
  >
    <v-container>
      <v-text-field
        v-model="firstname"
        type="text"
        label="First Name"
      />
      <v-text-field
        v-model="lastname"
        type="text"
        label="Last Name"
      />
      <v-text-field
        v-model="email"
        type="email"
        label="Email"
        hint="Must be a valid email"
      />
      <v-row>
        <v-col col="6">
          <v-text-field
            v-model="password"
            type="password"
            label="Password"
            hint="Must be at least 8 characters"
          />
        </v-col>
        <v-col col="6">
          <v-text-field
            v-model="confirmPassword"
            type="password"
            label="Confirm Password"
            hint="Must be at least 8 characters"
          />
        </v-col>
      </v-row>
      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="I agree to terms and conditions"
        required
      ></v-checkbox>
      <CustomButton
        label="Sign Up"
        :disable="check"
        :click="onRegister"
      />
    </v-container>
  </v-card>
</template>

<script>
  import CustomButton from "@/components/CustomButton.vue";
  export default {
    data: () => ({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: false
    }),
    computed: {
      check() {
        if (
          this.firstname.length === 0 ||
          this.lastname.length === 0 ||
          this.email.length === 0 ||
          this.password.length < 8 ||
          this.confirmPassword.length < 8 ||
          this.checkbox === false
        ) {
          return true;
        }
        return false;
      }
    },
    methods: {
      onRegister() {
        const form = {
          firstName: this.firstname,
          lastName: this.lastname,
          email: this.email,
          password: this.password
        };
        this.$store.dispatch("user/register", form);
        if (this.$store.getters["user/auth"]) {
          this.$route.push("/");
        }
      }
    },
    components: {
      CustomButton
    }
  };
</script>