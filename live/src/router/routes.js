//首页
import Home from '../pages/home'

//友邻市集
import Market from '../pages/market'


//社区服务
import Community from '../pages/community'


//我、个人中心
import Person from '../pages/person'


//管家你好
import Housekeeper from '../pages/housekeeper'



// 点开app登录注册页面
import member from '../pages/loginregister/member.vue'

//登录页面
import login from '../pages/loginregister/login.vue'

//注册页面
import Register from '../pages/loginregister/register.vue'

//错误
import Error from '../pages/error/Error.vue'



const routes = [ // 传统路由都是通过集中管理路由来完成的，所以我们建了一个路由表来统一管理路由
    // {} //每一个对象就是一个路由的配置
    { //路由重定向配置
        path: '/',
        redirect: '/home',
        meta: {
            keep: true

        }
    },
    {
        path: '/home',
        component: Home,
        meta: {
            keep: true

        }
    },
    {
        path: '/market',
        component: Market,
        meta: {
            keep: true

        }

    },
    {
        path: '/community',
        component: Community
    },
    {
        path: '/person',
        component: Person
    },
    {
        path: '/housekeeper',
        component: Housekeeper
    },
    {
        path: '/member', //打开APP时看到的登录注册页面
        component: member,


    }, ,
    {
        path: '/login', //动态路由 犯错高发地带
        component: login,

    },
    {
        path: '/register',
        component: Register
    },

    { //错误路由匹配写在路由表的最下方
        path: '*',
        component: Error
    }
]

export default routes