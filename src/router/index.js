import { createRouter, createWebHistory } from "vue-router";

import Landing from "../views/Landing.vue";
import About from "../views/About.vue";
import Menu from "../views/Menu.vue";
import Gallery from "../views/Gallery.vue";
import Reviews from "../views/Reviews.vue";
import Contact from "../views/Contact.vue";
import Product from "../views/Product.vue";
import Order from "../views/OrderP.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: Landing,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUp,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery,
  },
  {
    path: "/reviews",
    name: "reviews",
    component: Reviews,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/product/:id",
    name: "product",
    component: Product,
    props:true
  },
  {
    path: "/order/:id",
    name: "order",
    component: Order,
    props:true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
