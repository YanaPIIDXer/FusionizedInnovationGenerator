import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// VueRouter
import routes from "./routes";
app.use(routes);

// PrimeVue
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import PrimeButton from "primevue/button";

app.use(PrimeVue);
app.component("PrimeButton", PrimeButton);

app.mount("#app");
