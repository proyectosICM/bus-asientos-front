import { BusDetails } from "./common/busDetails/busDetails";
import { BusMenu } from "./common/busMenu/busMenu";

export const routes = [
  //LOGIN
  // { path: "/", component: <Login /> },
  { path: "/", component: <BusMenu /> },
  { path: "/menu", component: <BusMenu /> },
  { path: "/details", component: <BusDetails /> },
];
