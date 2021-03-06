import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import AppHeader from "../layouts/AppHeader";
import AppFooter from "../layouts/AppFooter";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      header: AppHeader,
      default: () => import("../views/Home.vue"),
      footer: AppFooter
    }
  },
  {
    path: "/product/:slug",
    name: "productView",
    components: {
      header: AppHeader,
      default: () => import("../views/ProductView.vue"),
      footer: AppFooter
    }
  },

  {
    path: "/categories",
    name: "categoryView",
    components: {
      header: AppHeader,
      default: () => import("../views/CategoryView.vue"),
      footer: AppFooter
    }
  },
  {
    path: "/cart",
    name: "Cart",
    components: {
      header: AppHeader,
      default: () => import("../views/Cart.vue"),
      footer: AppFooter
    }
  },
  {
    path: "/checkout",
    name: "checkout",
    components: {
      header: AppHeader,
      default: () => import("../views/Checkout.vue"),
      footer: AppFooter
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/my-account",
    name: "my-account",
    components: {
      header: AppHeader,
      default: () => import("../views/MyAccount.vue"),
      footer: AppFooter
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    components: {
      header: AppHeader,
      default: () => import("../views/auth/ForgotPassword.vue"),
      footer: AppFooter
    },
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/sign-up",
    name: "sign-up",
    components: {
      header: AppHeader,
      default: () => import("../views/auth/SignUp.vue"),
      footer: AppFooter
    },
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/login",
    name: "login",
    components: {
      header: AppHeader,
      default: () => import("../views/auth/Login.vue"),
      footer: AppFooter
    },
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/terms",
    name: "terms",
    components: {
      header: AppHeader,
      default: () => import("../views/Terms.vue"),
      footer: AppFooter
    }
  },
  {
    path: "/power-as-a-service",
    name: "power-as-a-service",
    components: {
      header: AppHeader,
      default: () => import("../views/PowerService.vue"),
      footer: AppFooter
    }
  },
  {
    path: "/calculator",
    name: "calculator",
    components: {
      header: AppHeader,
      default: () => import("../views/Calculator.vue"),
      footer: AppFooter
    }
  },
  {
    path: "/calculator-result",
    name: "calculator-result",
    components: {
      header: AppHeader,
      default: () => import("../views/CalculatorResult.vue"),
      footer: AppFooter
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_BASE_URL,
  routes,
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      next("/login");
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLoggedIn) {
      next({
        path: "/my-account"
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
