<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DetailsTab from "./details/DetailsTab.vue";
import PartyInformation from "./party_information/PartyInformation.vue";
import Logistic from "./logistic/Logistic.vue";
</script>

<template>
  <Tabs default-value="details" class="w-full">
    <TabsList class="w-[400px] flex gap-x-4 bg-gray-200">
      <TabsTrigger class="w-[200px]" value="details"> Details </TabsTrigger>
      <TabsTrigger class="w-[200px]" value="partyInformation">
        Party Information
      </TabsTrigger>
      <TabsTrigger class="w-[200px]" value="logistic"> Logistic </TabsTrigger>
    </TabsList>
    <TabsContent class="w-full" value="details"> <DetailsTab /> </TabsContent>
    <TabsContent class="w-full" value="partyInformation">
      <PartyInformation />
    </TabsContent>
    <TabsContent class="w-full" value="logistic"> <Logistic /> </TabsContent>
  </Tabs>
</template>
