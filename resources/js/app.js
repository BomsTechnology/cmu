require("./bootstrap");

import { createApp } from "vue";
import FrontOffice from "./FrontOffice.vue";
import BackOffice from "./BackOffice.vue";
import router from "./router/index.js";
import i18n from "./locales/i18n";
if (!window.location.href.includes("admin")) {
    const app = createApp(FrontOffice).use(i18n).use(router).mount("#app");
} else {
    const app = createApp(BackOffice).use(i18n).use(router).mount("#app2");
}
