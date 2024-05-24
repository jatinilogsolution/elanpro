<template>
  <div class="flex">
    <div class="w-full h-screen border-r flex items-center justify-center">
      <img :src="Logo" alt="Elanpro Logo" class="h-72 w-auto" />
    </div>
    <div
      class="w-full h-screen flex flex-col gap-y-4 items-center justify-center"
    >
      <form class="w-1/2 space-y-5" @submit.prevent="handleLoginSubmit">
        <h1 class="font-semibold text-center text-[28px]">Login here</h1>
        <br />
        <TextField
          label="E-mail"
          input-type="email"
          input-c-s-s=" h-9"
          is-required
        />
        <TextField
          label="Password"
          input-type="password"
          input-c-s-s=" h-9"
          is-required
        />

        <Button class="w-full" type="submit">Login</Button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextField from "@/components/basics/TextField.vue";
import Button from "@/components/ui/button/Button.vue";
import Logo from "@/assets/elanpro_logo.png";
import { useRouter } from "vue-router";
import { useToast } from "@/components/ui/toast";

const router = useRouter();
const { toast } = useToast();

const handleLoginSubmit = () => {
  router.push("/dashboard");
  toast({
    title: "Login Success",
    description: "Welcome to Elanpro.",
    duration: 1500,

    class: "text-[green] bg-[white]",
  });
};
</script>
