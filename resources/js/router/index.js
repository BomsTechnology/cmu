import { createRouter, createWebHistory } from "vue-router";
const Home = () => import ("../views/Home.vue");
const Awards = () => import ("../views/Awards.vue");
const JobOffer = () => import ("../views/JobOffer.vue");
const LogIn = () => import ("../views/LogIn.vue");
const MathematicianDatabase = () => import ("../views/MathematicianDatabase.vue");
const NewEvent = () => import ("../views/NewEvent.vue");
const Thesis = () => import ("../views/Thesis.vue");
const About = () => import ("../views/About.vue");
const Membership = () => import ("../views/Membership.vue");
const SinglePost = () => import ('../views/SinglePost.vue');
const Join = () => import ("../views/Join.vue");
const Account = () => import ("../views/Account.vue");
const Dashboard = () => import  ("../views/back/Dashboard.vue");
const LoginAdmin = () => import  ("../views/back/Login.vue");
const PostIndex = () => import  ("../views/back/post/PostIndex.vue");
const PostCreate = () => import  ("../views/back/post/PostCreate.vue");
const PostEdit = () => import ("../views/back/post/PostEdit.vue");
const NotFound = () => import  ("../views/NotFound.vue");
const UniversityIndex = () => import  ("../views/back/university/UniversityIndex.vue");
const UniversityCreate = () => import  ("../views/back/university/UniversityCreate.vue");
const UniversityEdit = () => import  ("../views/back/university/UniversityEdit.vue");

const siteName = "CMU";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta:{
            title: siteName 
        }
    },
    {
        path: '/news-events',
        name: 'news-events',
        component: NewEvent,
        meta:{
            title: siteName + ' - News & Events'
        }
    },
    {
        path: '/membership',
        name: 'membership',
        component: Membership,
        meta:{
            title: siteName + ' - Membership'
        }
    },
    {
        path: '/cameroon-mathematician-database',
        name: 'cam-math-db',
        component: MathematicianDatabase,
        meta:{
            title: siteName + ' - Mathematician Database'
        }
    },
    {
        path: '/awards',
        name: 'awards',
        component: Awards,
        meta:{
            title: siteName + ' - Awards'
        }
    },
    {
        path: '/thesis',
        name: 'thesis',
        component: Thesis,
        meta:{
            title: siteName + ' - Thesis'
        }
    },
    {
        path: '/job-offer',
        name: 'job-offer',
        component: JobOffer,
        meta:{
            title: siteName + ' - Job Offer'
        }
    },
    {
        path: '/about-cmu',
        name: 'about',
        component: About,
        meta:{
            title: siteName + ' - About'
        }
    },
    {
        path: '/log-in',
        name: 'log-in',
        component: LogIn,
        meta:{
            title: siteName + ' - Login'
        }
    },
    {
        path: '/join',
        name: 'join',
        component: Join,
        meta:{
            title: siteName + ' - Join'
        }
    },
    {
        path: '/post',
        name: 'single-post',
        component: SinglePost,
        meta:{
            title: siteName + ' - Post'
        }
    },
    {
        path: '/account',
        name: 'account',
        component: Account,
        meta:{
            title: siteName + ' - Account'
        }
    },
    {
        path: '/:pathMatch(.*)',
        name: 'not.found',
        component: NotFound,
        meta:{
            title: siteName + ' - Page Introuvable'
        }
    },

    // Admin routes
    {
        path: '/admin',
        name: 'admin',
        component: LoginAdmin,
        name: 'admin',
        children: [
            {
                path: '',
                component: LoginAdmin,
                name: 'admin.login',
                meta:{
                    title: siteName + ' - Admin Panel'
                }
            },
            
            {
                path: 'dashboard',
                component: Dashboard,
                name: 'admin.dash',
                meta:{
                    title: siteName + ' - Dashboard'
                }
            },
            {
                path: 'post',
                component: PostIndex,
                props: true,
                name: 'admin.post.index',
                meta:{
                    title: siteName + ' - Posts'
                }
            },
            {
                path: 'post/create',
                component: PostCreate,
                props: true,
                name: 'admin.post.create',
                meta:{
                    title: siteName + ' - Create Post'
                }
            },
            {
                path: 'post/edit/:id',
                component: PostEdit,
                props: true,
                name: 'admin.post.edit',
                meta:{
                    title: siteName + ' - Edit Post'
                }
            },
            {
                path: 'university',
                component: UniversityIndex,
                name: 'admin.university.index',
                meta:{
                    title: siteName + ' - University'
                }
            },
            {
                path: 'university/create',
                component: UniversityCreate,
                name: 'admin.university.create',
                meta:{
                    title: siteName + ' - Create University'
                }
            },
            {
                path: 'university/edit/:id',
                component: UniversityEdit,
                props: true,
                name: 'admin.university.edit',
                meta:{
                    title: siteName + ' - Edit University'
                }
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        } else  if (savedPosition) {
            return savedPosition
          } else {
            return { top: 0 }
          }
    }
});

router.afterEach((to) => {
    document.title = to.meta.title;
});

export default router;