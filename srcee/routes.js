import Products from "./modules/Products";
import SearchList from "./modules/Products/SearchList";

const routes = [
  {
    component: SearchList,
    path: "/app",
    index: true,
  },
  {
    component: SearchList,
    path: "/app/search",
    index: true,
  },
];
export default routes;
