import '@agoric/install-ses';
import '@agoric/eventual-send/shim';

//lockdown({ errorTaming: 'unsafe' });

import { createApp } from 'vue'
import router from './router'
import store from './store'
import wallet from './plugins/wallet';

import App from './App.vue'
import './index.css'
import './assets/scss/main.scss';
import './assets/scss/core.scss';
import './assets/scss/card.scss';
import './assets/scss/fa.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faGlobeAfrica, faPowerOff
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
library.add(
    faGlobeAfrica,
    faPowerOff
);
const app = createApp(App);
app.use(router).use(store).use(wallet, {store});
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('font-awesome-layers', FontAwesomeLayers)
app.component('font-awesome-layers-text', FontAwesomeLayersText)
app.mount('#app');
