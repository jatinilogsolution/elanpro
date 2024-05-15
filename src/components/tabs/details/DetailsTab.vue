<script setup lang="ts">
import ComboBox from "@/components/basics/ComboBox.vue";
import TextField from "@/components/basics/TextField.vue";
import Button from "@/components/ui/button/Button.vue";
</script>

<template>
  <div class="flex gap-x-2 w-full px-2">
    <ComboBox label="Item" />
    <TextField label="Unit" input-type="number" />
    <TextField label="Quantity" input-type="number" />
    <TextField label="Rate" input-type="number" />
    <TextField label="Amount" input-type="number" />
  </div>
  <br />
  <div class="flex gap-x-2 w-full px-2">
    <TextField label="Sales value" input-type="number" />

    <TextField label="Standard Discount(%)" input-type="number" />
    <TextField label="Additional Discount(%)" input-type="number" />
    <TextField label="Additional Discount(val)" input-type="number" />
    <TextField label="Special Discount(val)" input-type="number" />
    <TextField label="Billing Amount" input-type="number" />
  </div>
  <br />

  <div class="w-full flex justify-end px-2">
    <Button
      type="button"
      class="w-28 bg-[green] hover:bg-[green] active:scale-95 duration-100"
    >
      Add
    </Button>
  </div>
</template>
