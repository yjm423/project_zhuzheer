import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import './assets/rem.js'
import VueLazyload from 'vue-lazyload'
import './assets/icon/iconfont.css'
import Vant from 'vant';
import './lib/mui/css/mui.min.css'

import 'vant/lib/index.css';
import { Toast } from 'vant';
import { Tag } from 'vant';
import { Step, Steps } from 'vant';
Vue.use(VueLazyload);
Vue.use(Toast);
Vue.use(Tag);
Vue.use(Step);
Vue.use(Steps);

import 'vant/lib/index.css';
Vue.use(Vant);





// import rem from './assets/rem


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')