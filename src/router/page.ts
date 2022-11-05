export default [
  {
    path: "/home",
    name: "home",
    component: () => import("../home.vue"),
    meta: {
      title: "home",
      icon: "House",
    },
  },
  {
    path: "/guestOfficer",
    name: "GuestOfficer",
    component: () => import("../view/GuestOfficer/index.vue"),
    meta: {
      title: "guestOfficer",
      icon: "User",
    },
  },
  {
    path: "/psyduck",
    name: "Psyduck",
    component: () => import("../view/Psyduck/index.vue"),
    meta: {
      title: "psyduck",
      icon: "User",
    },
  },
  {
    path: "/ricardo",
    name: "Ricardo",
    component: () => import("../view/Ricardo/index.vue"),
    meta: {
      title: "ricardo",
      icon: "User",
    },
  },
  {
    path: "/three",
    name: "Three",
    component: () => import("../view/Three/index.vue"),
    meta: {
      title: "three",
      icon: "User",
    },
  },
  {
    path: "/xuanXiao",
    name: "XuanXiao",
    component: () => import("../view/XuanXiao/index.vue"),
    meta: {
      title: "xuanXiao",
      icon: "User",
    },
  },
];
