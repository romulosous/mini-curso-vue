import Vue from "vue";
import VueRouter from "vue-router";
import TemplatePadrao from "../templates/Padrao.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component:  () => import("../views/Login")
  },
  {
    path: "/home",
    name: "home",
    component: TemplatePadrao,
    children: [
      {
        path: "/cadastro-usuario",
        name: "cadastro-usuario",
        component: () => import("../views/CadastroUsuario")
      },
      {
        path: "/usuarios",
        name: "usuarios",
        component: () => import("../views/Usuarios")
      }
    ]

  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/404")
  }
  

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
