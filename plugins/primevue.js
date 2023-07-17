import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import SelectButton from 'primevue/selectbutton';
import Editor from "primevue/editor";
import Toast from "primevue/toast";
import ToastService from 'primevue/toastservice';

import {ru} from "../node_modules/primelocale/ru.json"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true, locale: ru });
    nuxtApp.vueApp.component("SelectButton", SelectButton)
    nuxtApp.vueApp.component("Editor", Editor)
    nuxtApp.vueApp.use(ToastService);

    //nuxtApp.vueApp.component("Button", Button);
    //other components that you need
});