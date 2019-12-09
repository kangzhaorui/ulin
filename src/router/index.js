import Vue from 'vue';
import Router from 'vue-router';
import app from  '@/views/layout.vue';
// 第一层主页
import home from  '@/views/goodsListPage/home.vue';
import firstDateil from  '@/views/goodsListPage/firstDateil.vue';
import secondDetail from  '@/views/goodsListPage/secondDetail.vue';
import thirdDetail from  '@/views/goodsListPage/thirdDetail.vue';
import myAccount from  '@/views/headerPage/myAccount.vue';
import contactUs from  '@/views/headerPage/contactUs.vue';
import siginIn from  '@/views/headerPage/siginIn.vue';
import cart from  '@/views/headerPage/cart.vue';
Vue.use(Router);
//解决路由重复点击报错的问题；
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: app,
      redirect:'/home',
      children:[
        {
          path:'/home',
          name:'home',
          component:home
        },{
          path:'/firstDateil',
          name:'firstDateil',
          component:firstDateil
        },{
          path:'/secondDetail',
          name:'secondDetail',
          component:secondDetail
        },{
          path:'/thirdDetail',
          name:'thirdDetail',
          component:thirdDetail
        },
        {
          path:'/myAccount',
          name:'myAccount',
          component:myAccount
        },
        {
          path:'/contactUs',
          name:'contactUs',
          component:contactUs
        },
        {
          path:'/siginIn',
          name:'siginIn',
          component:siginIn
        },
        {
          path:'/cart',
          name:'cart',
          component:cart
        },
      ]
    }
  ]
})


