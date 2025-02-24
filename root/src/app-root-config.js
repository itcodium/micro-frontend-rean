import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

import microfrontendLayout from "./microfrontend-layout.html";
import customLoader from "./custom-loader.html";
import customError from "./custom-error.html";
 
const data = {
  loaders: {
    customLoader,
  },
  props: {
    user: { fname: "Jane", lname: "John" },
  },
  errors: {
    customError,
  },
  preserveElement: true, 
};

const routes = constructRoutes(microfrontendLayout, data);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    console.log("== > name", name)
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();