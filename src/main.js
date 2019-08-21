import Vue from 'vue';

// All Layouts (Investor & Research Portals)
import Investor from '@/layouts/Investor.vue';
import Research from '@/layouts/Research.vue';

import App from './App.vue';

import router from './router';

// Set Aliases
Vue.component('investor-layout', Investor);
Vue.component('research-layout', Research);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
