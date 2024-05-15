<template>
  <div class="">
    <!-- Nromal Routes -->
    <Navbar />
    <div class="overflow-hidden">
      <RouterView />
      <Toaster />
    </div>
    <Footer />

    <!-- Auth Routes -->
    <router-view name="login" />
    <!-- <router-view name="signup" /> -->
  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/bars/Footer.vue";
import Navbar from "@/components/bars/Navbar.vue";
import Toaster from "@/components/ui/toast/Toaster.vue";
</script>
