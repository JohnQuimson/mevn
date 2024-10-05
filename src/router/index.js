import Vue from 'vue';
import VueRouter from 'vue-router';
import CartPage from '../views/CartPage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import ProductsPage from '../views/ProductsPage.vue';
// import { component } from 'vue/types/umd';
import NotFoundPage from '../views/NotFoundPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/products',
  },
  {
    path: '*',
    component: NotFoundPage,
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
