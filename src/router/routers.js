import Main from '@/view/main'


export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: false,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: '首页',
        meta: {
          hideInMenu: false,
          title: '首页',
          notCache: true
        },
        component: () => import('@/view/home')
      }
    ]
  },
  {
    path: '/data',
    name: '数据管理',
    meta: {
      icon: 'logo-buffer',
      title: '数据管理'
    },
    component: Main,
    children: [
      {
        path: 'vector',
        name: '矢量',
        meta: {
          icon: 'md-trending-up',
          title: '矢量'
        },
        component: () => import('@/view/data/vector/vector.vue')
      },

      {
        path: 'raster',
        name: '栅格',
        meta: {
          icon: 'md-pause',
          title: '栅格'
        },
        component: () => import('@/view/data/raster/raster.vue')
      }
    ]
  },
  {
    path: '/cartography',
    name: '专题制图',
    meta: {
      hide: true
    },
    component: Main,
    children: [
      {
        path: 'cartography',
        name: '专题制图',
        meta: {
          icon: 'ios-hammer',
          title: '专题制图'
        },
        component: () => import('@/view/cartography/cartography.vue')
      }
    ]
  },
  {
    path: '/charts',
    name: '图表分析',
    meta: {
      hide: true
    },
    component: Main,
    children: [
      {
        path: 'charts',
        name: '图表分析',
        meta: {
          icon: 'ios-hammer',
          title: '图表分析'
        },
        component: () => import('@/view/charts/charts.vue')
      }
    ]
  },
  {
    path: '/model',
    name: '模型分析',
    meta: {
      hide: true
    },
    component: Main,
    children: [
      {
        path: 'model',
        name: '模型分析',
        meta: {
          icon: 'ios-hammer',
          title: '模型分析'
        },
        component: () => import('@/view/model/model.vue')
      }
    ]
  },
  {
    path: '/system',
    name: '系统管理',
    meta: {
      icon: 'ios-stats',
      title: '系统管理'
    },
    component: Main,
    children: [
      {
        path: 'user',
        name: '用户管理',
        meta: {
          icon: 'md-add',
          title: '用户管理'
        },
        component: () => import('@/view/system/user.vue')
      },
      {
        path: 'role',
        name: '角色管理',
        meta: {
          icon: 'md-download',
          title: '角色管理'
        },
        component: () => import('@/view/system/role.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
