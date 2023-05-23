import { createRouter, createWebHashHistory } from 'vue-router'
import basicDemo from './modules/basic-demo'
import Layout from '@/layout/index.vue'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/flask-test',
    component: Layout,
    alwaysShow: true,
    meta: { title: 'flask test', elSvgIcon: 'Fold' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/flask-test/index.vue'),
        name: 'flask test',
        meta: { title: 'flask test', elSvgIcon: 'Fold' }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/attention-record-process',
    component: Layout,
    alwaysShow: true,
    name: 'ATP',
    meta: { title: 'ATP', elSvgIcon: 'Fold' },
    children: [
      {
        path: 'all_index',
        component: () => import('@/views/attention-record-process/all_index.vue'),
        name: 'ATP_ALL_List',
        meta: { title: 'ATP_ALL_List', elSvgIcon: 'example' }
      },
      {
        path: 'person_index',
        component: () => import('@/views/attention-record-process/persone_index.vue'),
        name: 'ATP_Person_List',
        meta: { title: 'ATP_Person_List', elSvgIcon: 'example' }
      },
      {
        path: 'report_process',
        component: () => import('@/views/attention-record-process/report_process.vue'),
        name: 'ATP_Report',
        meta: { title: 'ATP_Report', elSvgIcon: 'example' }
      },
      {
        path: 'change_model',
        component: () => import('@/views/attention-record-process/change_model.vue'),
        name: 'model_change',
        meta: { title: 'model_change', elSvgIcon: 'example' }
      },
      {
        path: 'report_update',
        component: () => import('@/views/attention-record-process/report_update.vue'),
        name: 'ATP_Report_Porcess',
        meta: { title: 'ATP_Report_Porcess', elSvgIcon: 'example' }
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index.vue'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2/index.vue'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3/index.vue'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index.vue'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },
  basicDemo,
]

//角色和code数组动态路由
export const roleCodeRoutes = [

]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  { path: '/:catchAll(.*)', name: 'CatchAll', redirect: '/404', hidden: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

export default router
