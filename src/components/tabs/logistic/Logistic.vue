<script setup lang="ts">
import TextField from "@/components/basics/TextField.vue";
</script>

<template>
  <div class="flex w-full items-center justify-center gap-x-20 px-10">
    <div
      class="w-full space-y-3 flex flex-col items-center border rounded-md py-3"
    >
      <TextField label="Destination" />
      <TextField label="Supply Place" />
      <TextField label="Dispatch mode" />
      <TextField label="Marka" />
    </div>

    <div
      class="w-full space-y-3 flex flex-col items-center border rounded-md py-3"
    >
      <TextField label="Priority" />
      <TextField label="INCO Term" />
      <TextField label="INCO Place" />
      <TextField label="Transporter" />
    </div>
  </div>
</template>
