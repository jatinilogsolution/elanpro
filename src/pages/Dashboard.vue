<script setup lang="ts">
import ComboBox from "@/components/basics/ComboBox.vue";
import DatePicker from "@/components/basics/DatePicker.vue";
import TextArea from "@/components/basics/TextArea.vue";
import TextField from "@/components/basics/TextField.vue";
import DashboardTabs from "@/components/tabs/DashboardTabs.vue";
import Button from "@/components/ui/button/Button.vue";
</script>

<template>
  <div class="p-4 space-y-3">
    <div class="flex justify-between border rounded-md p-4">
      <div class="space-y-2">
        <TextField label="Branch" />
        <ComboBox label="Party" />
        <ComboBox label="Sub-Party" />
      </div>

      <div class="space-y-2">
        <!-- <TextField label="Date" input-type="date" /> -->

        <DatePicker label="Date" />

        <TextField label="Voucher No" />
      </div>
      <div class="space-y-2">
        <TextField label="Party PO No" />
        <DatePicker label="PO Date" />
        <ComboBox label="Currency" />
      </div>
    </div>

    <div class="border rounded-md py-3">
      <DashboardTabs />
    </div>

    <div class="w-full border rounded-md px-10 py-3 space-y-2">
      <div class="w-[30rem]">
        <TextArea label="Narration" />
      </div>
      <div class="w-full flex justify-end gap-x-4">
        <Button
          type="submit"
          class="w-32 bg-[blue] hover:bg-[blue] active:scale-95 duration-100"
          >Save</Button
        >
        <Button class="w-32 active:scale-95 duration-100">Cancel</Button>
        <Button
          class="w-32 bg-[red] hover:bg-[red] active:scale-95 duration-100"
          >Exit</Button
        >
      </div>
    </div>
  </div>
</template>
