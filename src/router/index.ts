import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
import Login from "@/pages/Login.vue";
import RootLayout from "@/layout/RootLayout.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: RootLayout,
      children: [
        { path: "dashboard", name: "dashboard", component: Dashboard },
      ],
    },

    { path: "/login", name: "login", component: Login },
  ],
});

// const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const removeListner = onAuthStateChanged(
//       getAuth(),
//       (user) => {
//         removeListner();
//         resolve(user);
//       },
//       reject
//     );
//   });
// };

// router.beforeEach(async (to, from, next) => {
//   const isAuthenticated = await getCurrentUser();
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (isAuthenticated) {
//       next();
//     } else {
//       alert("you donnot have access");
//       next("/signIn");
//     }
//   } else {
//     if (isAuthenticated && (to.name === "SignIn" || to.name === "SignUp")) {
//       // alert(`You are already ${to.name} .`);
//       next("/");
//     } else {
//       next();
//     }
//   }
// });

export default router;
