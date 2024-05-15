<script setup lang="ts">
import ComboBox from "@/components/basics/ComboBox.vue";
import TextArea from "@/components/basics/TextArea.vue";
import TextField from "@/components/basics/TextField.vue";
</script>
<template>
  <div class="flex w-full items-center justify-center gap-x-20 px-10">
    <div class="w-full space-y-3 border rounded-md p-4">
      <TextArea label="Billing Address" />
      <div class="flex gap-2 w-full">
        <TextField label="GST no" />
        <TextField label="PAN no" />
      </div>
      <div class="flex gap-2 w-full">
        <TextField label="City" />
        <TextField label="State" />
      </div>
      <div class="flex gap-2 w-full">
        <TextField label="Person Name" />
        <TextField label="Zipcode" />
      </div>
      <div class="flex gap-2 w-full">
        <TextField label="Person Email" input-type="email" />
        <TextField label="Person Phone no" input-type="number" />
      </div>
      <div class="flex gap-2 w-full">
        <ComboBox label="Sales Executive" />
        <div class="w-full"></div>
      </div>
    </div>

    <div class="w-full h-[25.2rem] space-y-3 border rounded-md p-4">
      <TextArea label="Delivery Address" />
      <div class="flex gap-2 w-full">
        <TextField label="GST No" />
        <TextField label="PAN No" />
      </div>
      <div class="flex gap-2 w-full">
        <TextField label="Store Name" />
        <TextField label="Person Name" />
      </div>
      <div class="flex gap-2 w-full">
        <TextField label="Person Email" input-type="email" />
        <TextField label="Person Phone no" input-type="number" />
      </div>
      <div class="flex gap-2 w-full">
        <ComboBox label="Delivery State" />
        <div class="w-full"></div>
      </div>
    </div>
  </div>
</template>
