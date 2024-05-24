<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  inputType: {
    type: String,
    default: "text",
  },
  inputCSS: {
    type: String,
    default: "",
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
});

const placeholder = ref(`Enter ${props.label} `);
</script>

<template>
  <div class="grid w-full max-w-sm items-center gap-1">
    <Label :for="label">{{ label }}</Label>
    <Input
      class="border border-gray-400"
      :class="inputCSS"
      size="small"
      :id="label"
      :type="inputType"
      :placeholder="placeholder"
      :required="isRequired"
    />
  </div>
</template>
