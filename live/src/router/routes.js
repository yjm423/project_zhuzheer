//首页
import Home from '../pages/home'
import Opendoor from '../pages/home/Opendoor.vue'
import Customer from '../pages/home/Customer.vue'

//友邻市集
import Market from '../pages/market'


//社区服务
import Community from '../pages/community'


//我、个人中心
import Person from '../pages/person'


//管家你好
import Housekeeper from '../pages/housekeeper'


// 点击去逛逛跳转到首页
import stroll from '../pages/loginregister/stroll.vue'

//登录页面
import Login from '../pages/loginregister/login.vue'

//注册页面
import Register from '../pages/loginregister/register.vue'


// 打开app登录注册
import member from '../pages/loginregister/member.vue'


//错误
import Error from '../pages/error/Error.vue'



const routes = [ // 传统路由都是通过集中管理路由来完成的，所以我们建了一个路由表来统一管理路由
  // {} //每一个对象就是一个路由的配置
  { //路由重定向配置
    path: '/',
    redirect: '/home'
  },
  /************************************************
   * 主页路由
   */
  {
    path: '/home',
    component: Home,
  },
  //服务导航
  {
    path: '/opendoor',
    component: () =>
      import('@/pages/home/tool/OpenDoor.vue')
  },
  {
    path: '/housebill',
    component: () =>
      import('@/pages/home/tool/HouseBill.vue')
  },
  {
    path: '/visitors',
    component: () =>
      import('@/pages/home/tool/Visitors.vue')
  },
  {
    path: '/newVisitors',
    component: () =>
      import('@/pages/home/tool/NewVisitors.vue')
  },
  {
    path: '/verify',
    component: () =>
      import('@/pages/home/tool/Verify.vue')
  },
  {
    path: '/chooseHouse',
    component: () =>
      import('@/pages/home/tool/ChooseHouse.vue')
  },
  {
    path: '/repair',
    component: () =>
      import('@/pages/home/tool/Repair.vue')
  },
  {
    path: '/mycar',
    component: () =>
      import('@/pages/home/tool/MyCar.vue')
  },
  {
    path: '/ems',
    component: () =>
      import('@/pages/home/tool/EMS.vue')
  },
  {
    path: '/scan',
    component: () =>
      import('@/pages/home/tool/Scan.vue')
  },
  {
    path: '/autopay',
    component: () =>
      import('@/pages/home/tool/AutoPay.vue')
  },
  {
    path: '/checkmore',
    component: () =>
      import('@/pages/home/tool/CheckMore.vue')
  },
  /*******************************************************
   * 友邻市集
   */
  {
    path: '/market',
    redirect: "/market/fair",

  },
  // Soduko路由
  {
    path: '/market/fair/all',
    component: () =>
      import('@/pages/market/Soduko/all.vue')
  },
  //
  {
    path: '/market/fair/drinking',
    component: () =>
      import('@/pages/market/Soduko/drinking.vue')
  },
  {
    path: '/market/fair/educative',
    component: () =>
      import('@/pages/market/Soduko/educative.vue')
  },
  {
    path: '/market/fair/fresh',
    component: () =>
      import('@/pages/market/Soduko/fresh.vue')
  },
  {
    path: '/market/fair/house',
    component: () =>
      import('@/pages/market/Soduko/house.vue')
  },
  {
    path: '/market/fair/houseking',
    component: () =>
      import('@/pages/market/Soduko/houseking.vue')
  },
  {
    path: '/market/fair/mom',
    component: () =>
      import('@/pages/market/Soduko/mom.vue')
  },
  {
    path: '/market/fair/pet',
    component: () =>
      import('@/pages/market/Soduko/pet.vue')
  },
  {
    path: '/market/fair/travel',
    component: () =>
      import('@/pages/market/Soduko/travel.vue')
  },
  {
    path: '/market',
    component: Market,
    meta: {
      keep: true
    },

    children: [{
      path: 'fair',
      component: () =>
        import('@/pages/market/fair/fair.vue'),
      meta: {
        keep: true
      },
    }, {
      path: 'community',
      component: () =>
        import('@/pages/market/community/community.vue')

    },
    {
      path: 'convenience',
      component: () =>
        import('@/pages/market/convenience/convenience.vue')

    }
    ],





  },
  {
    path: '/search',
    component: () =>
      import('@/pages/market/search.vue')
  },
  {
    path: '/plan',
    component: () =>
      import('@/pages/market/plan.vue')
  },
  {
    path: '/shop_car',
    component: () =>
      import('@/pages/market/shop_car.vue')
  },


  {
    path: '/search',
    component: () =>
      import('@/pages/market/search.vue')
  },
  {
    path: '/plan',
    component: () =>
      import('@/pages/market/plan.vue')
  },
  {
    path: '/shop_car',
    component: () =>
      import('@/pages/market/shop_car.vue')
  },

  /**
   * 社区活动
   */
  {
    path: '/community',

    component: Community,
    meta: {
      keep: true
    },

  },
  // 发布帖子
  {
    path: '/postmsg',
    component: () =>
      import('@/pages/community/postmsg.vue')
  },
  // 发布友两手
  {
    path: '/usedmarket',
    component: () =>
      import('@/pages/community/usedmarket.vue')
  },
  // 发布活动
  {
    path: '/myactivity',
    component: () =>
      import('@/pages/community/myactivity.vue')
  },

  // 帮助
  {
    path: '/neighborhelp',
    component: () =>
      import('@/pages/community/neighborhelp.vue')
  },

  /**
   * 个人中心
   */
  {
    path: '/person',
    component: Person,
    meta: {
      keep: true
    },
  },
  // 我的帖子
  {
    path: '/person/mymsg',
    component: () =>
      import('@/pages/person/mylist/mymsg.vue'),

  },
  // 个人资料
  {
    path: '/person/mydata',
    component: () =>
      import('@/pages/person/mylist/mydata.vue'),

  },
  // 皇冠
  {
    path: '/person/crown',
    component: () =>
      import('@/pages/person/mylist/crown.vue'),

  },
  // 我的友两手
  {
    path: '/person/mygoods',
    component: () =>
      import('@/pages/person/mylist/mygoods.vue'),

  },
  // 建议提交
  {
    path: '/person/mysuggest',
    component: () =>
      import('@/pages/person/mylist/mysuggest.vue'),

  },
  // 我的一卡通
  {
    path: '/person/mycart',
    component: () =>
      import('@/pages/person/mylist/mycart.vue')
  },
  // 我的活动
  {
    path: '/person/myactive',
    component: () =>
      import('@/pages/person/mylist/myactive.vue')
  },
  // 通知设置
  {
    path: '/person/settings',
    component: () =>
      import('@/pages/person/mylist/settings.vue')
  },
  // 关于我们
  {
    path: '/person/aboutUs',
    component: () =>
      import('@/pages/person/mylist/aboutUs.vue')
  },
  {
    path: '/housekeeper',
    component: Housekeeper,
    meta: {
      keep: true
    },
  },
  /**
   * 登录注册
   */
  {
    path: '/stroll', //去逛逛
    component: stroll,

  },
  {
    path: '/member', //打开app看到的登陆注册
    component: member
  },
  {
    path: '/login', //动态路由 犯错高发地带
    component: Login,

  },

  {
    path: '/register',
    component: Register
  },
  {
    path: '/choosecommunity',
    component: () =>
      import('@/pages/loginregister/choosecommunity.vue')
  },

  { //错误路由匹配写在路由表的最下方
    path: '*',
    component: Error
  }
]

export default routes