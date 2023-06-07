import { createWebHistory, createRouter, RouterLink } from "vue-router";
import { useUserStore } from "../stores/userStore";
import { api } from "../helpers/api";

const Home = () => import("../views/Home.vue");
const Clubs = () => import("../views/Clubs.vue");
const Login = () => import("../views/forms/Login.vue");
const SignUp = () => import("../views/forms/SignUp.vue");
const ClubSignUp = () => import("../views/forms/ClubRegisterForm.vue");
const ManageClubs = () => import("../views/ManageClubs.vue");
const RouterView = () => import("../views/RouterView.vue");
const MyClubs = () => import("../views/MyClubs.vue");
const ClubDetails = () => import("../views/ClubDetails.vue");
const NotFound = () => import("../views/404.vue");
const ManageClub = () => import("../views/ManageClub.vue");
const ManageMembers = () => import("../views/ManageMembers.vue");
const ManageEvents = () => import("../views/ManageEvents.vue");

// {
//   path: "/user",
//   component: ClubsRouterView,
//   children: [{ name: "profile", path: "" }, { path: "clubs" }],
//   meta: { requiresAuth: true },
// },
export const routes = [
  { name: "Home", path: "/", component: Home },
  { path: "/test", component: ManageEvents },
  {
    path: "/clubs",
    component: RouterView,
    children: [
      { name: "Clubs", path: "", component: Clubs },
      {
        path: "manage",
        component: ManageClubs,
        meta: { requiresAuth: true, privilages: true },
      },
      {
        path: "register",
        component: ClubSignUp,
        meta: { requiresAuth: true, privilages: true },
      },
      {
        path: ":clubID",
        component: ClubDetails,
      },
      {
        name: "ManageClub",
        path: ":clubID/manage",
        meta: { requiresAuth: true, privilages: true, manager: true },
        component: ManageClub,
      },
      {
        path: ":clubID/manage/members",
        component: ManageMembers,
        meta: { requiresAuth: true, privilages: true, manager: true },
      },
      {
        path: ":clubID/manage/events",
        component: ManageEvents,
      },
    ],
  },
  {
    path: "/profile",
    component: RouterView,
    children: [
      { name: "Profile", path: "", component: RouterView },
      { path: "clubs", component: MyClubs },
    ],
  },
  {
    name: "Sign Up",
    path: "/signup",
    component: SignUp,
    meta: { guestOnly: true },
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    meta: { guestOnly: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/auth/google",
    redirect: (to) => {
      window.location.href = "http://localhost:8080/auth/google";
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (userStore.loggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.matched.some((record) => record.meta.guestOnly)) {
    if (userStore.loggedIn) {
      next("/");
      return;
    }
    next();
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.matched.some((record) => record.meta.privilages)) {
    if (
      userStore.user.userType === "admin" ||
      userStore.user.userType === "manager"
    ) {
      next();
      return;
    }

    next("/");
  } else {
    next();
  }
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  if (to.matched.some((record) => record.meta.manager)) {
    await api.get(`/clubs/${to.params.clubID}/managers`).then(({ data }) => {
      if (!data.find((club) => club.manager === userStore.user.userID)) {
        next("/");
        return;
      }
    });
    next();
  } else {
    next();
  }
});
