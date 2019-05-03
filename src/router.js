import Vue from 'vue';
import Router from 'vue-router';
import MyPage from './views/MyPage.vue';
import Store from './views/Store.vue';
import EditNextPaymentDate from './views/EditNextPaymentDate.vue';
import EditNextDeliverables from './views/EditNextDeliverables.vue';
import ChangeBillingInterval from './views/ChangeBillingInterval.vue';
import UpdateShippingAddress from './views/UpdateShippingAddress.vue';
import ChangePaymentMethod from './views/ChangePaymentMethod.vue';
import OrdersOnProcess from './views/OrdersOnProcess.vue';
import MyInfo from './views/MyInfo.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/store',
      name: 'store',
      component: Store,
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage,
    },
    {
      path: '/mypage/orders-on-process',
      component: OrdersOnProcess
    },
    {
      path: '/mypage/myinfo',
      component: MyInfo
    }, 
    {
      path: '/mypage/edit-next-payment-date',
      component: EditNextPaymentDate
    },
    {
      path: '/mypage/change-billing-interval',
      component: ChangeBillingInterval
    },
    {
      path: '/mypage/edit-next-deliverables',
      component: EditNextDeliverables
    },
    {
      path: '/mypage/update-shipping-address',
      component: UpdateShippingAddress
    },
    {
      path: '/mypage/change-payment-method',
      component: ChangePaymentMethod
    },
  ],
});
