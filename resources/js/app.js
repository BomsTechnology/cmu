require('./bootstrap');

import { createApp } from 'vue'
import Home from './views/Home.vue'
import router from './router/index.js'


const app = createApp({
    components:{
        Home
    },
}).use(router).mount('#app')
