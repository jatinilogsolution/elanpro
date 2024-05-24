<script setup lang="ts">
import Button from "../ui/button/Button.vue";
import DropdownMenu from "../ui/dropdown-menu/DropdownMenu.vue";
import DropdownMenuContent from "../ui/dropdown-menu/DropdownMenuContent.vue";
import DropdownMenuItem from "../ui/dropdown-menu/DropdownMenuItem.vue";
import DropdownMenuTrigger from "../ui/dropdown-menu/DropdownMenuTrigger.vue";
import { ChevronDown } from "lucide-vue-next";
import { useToast } from "../ui/toast";
import elanpro_logo from "@/assets/elanpro_logo.png";
import { useRouter } from "vue-router";
const { toast } = useToast();

const router = useRouter();

const handleLogout = () => {
  router.push("/login");
  toast({
    title: "Logged out",
    description: "You have been logged out",
    duration: 1500,
    class: "text-[red]",
  });
};
</script>

<template>
  <nav class="w-full border-b-2 border-gray-600">
    <div class="flex items-center justify-between px-10">
      <div class="flex items-center gap-x-14">
        <div>
          <img :src="elanpro_logo" alt="Elan Pro Logo" class="h-20 w-auto" />
        </div>
        <ul class="flex gap-x-6">
          <li>
            <a href="#"> Dashboard </a>
          </li>
          <li>
            <a href="#"> Sales Book </a>
          </li>
          <li>
            <a href="#"> Master </a>
          </li>
        </ul>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button class="space-x-2">
            <span> User Account </span>
            <ChevronDown class="w-5 h-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-36 space-y-2">
          <DropdownMenuItem class="border rounded-md">
            <span class="w-full text-center"> Profile </span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Button
              type="button"
              @click="handleLogout"
              class="w-full bg-[red] hover:bg-[red] focus:bg-[red] focus:text-white active:scale-95 duration-100"
            >
              Logout
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </nav>
</template>
