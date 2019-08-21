import Vue from 'vue';
import Router from 'vue-router';

// Investor Portal
import InvestorMenu from '@/components/InvestorMenu.vue';
import InvestorDashboard from '@/components/InvestorDashboard.vue';

// Research Portal
import ResearchMenu from '@/components/ResearchMenu.vue';
import ResearchDashboard from '@/components/ResearchDashboard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/investor',
      name: 'Investor',
      meta: { layout: 'investor' },
      component: InvestorMenu,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { layout: 'investor' },
          component: InvestorDashboard,
        },
      ],
    },
    {
      path: '/research',
      name: 'Research',
      meta: { layout: 'research' },
      component: ResearchMenu,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { layout: 'research' },
          component: ResearchDashboard,
        },
      ],
    },
  ],
});
