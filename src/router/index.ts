import { createMemoryHistory, createRouter } from "vue-router";

import Dashboard from "../pages/Dashboard.vue";
import RootLayout from "@/layout/RootLayout.vue";

const routes = [
  {
    path: "/",
    component: RootLayout,
    children: [
      // { path: "", name: "Home", component: Home },
      // { path: "cart", name: "Cart", component: Cart },
      // {
      //   path: "product/:id",
      //   name: "ProductView",
      //   component: Product,
      //   beforeEnter: (to, from, next) => {
      //     const productId = Number(to.params.id);
      //     if (isNaN(productId)) {
      //       next({ name: "notfound" });
      //     } else {
      //       next();
      //     }
      //   },
      // },
      { path: "", name: "dashboard", component: Dashboard },

      // {
      //   path: "user",
      //   name: "userProfile",
      //   component: ProfilePage,
      //   meta: { requiresAuth: true },
      // },
    ],
  },

  // { path: "/", component: Dashboard },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
