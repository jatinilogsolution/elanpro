<script setup lang="ts">
import { Textarea } from "@/components/ui/textarea";
import Label from "../ui/label/Label.vue";
import { ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});

const placeholder = ref(`Enter ${props.label}`);
</script>

<template>
  <div class="grid w-full items-center gap-1">
    <Label>{{ label }}</Label>
    <Textarea
      class="w-full border border-gray-400"
      :placeholder="placeholder"
    />
  </div>
</template>
