import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/rem.js';
import VueLazyload from 'vue-lazyload';
import './assets/icon/iconfont.css'

Vue.use(VueLazyload)




import 'vant/lib/index.css';
Vue.use(Vant);



import { Icon } from 'vant';

import { Swipe, SwipeItem } from 'vant';

// import rem from './assets/rem'


Vue.use(Swipe).use(SwipeItem);

Vue.use(Icon);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
