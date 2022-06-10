import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../views/Home.vue");
const Awards = () => import("../views/Awards.vue");
const JobOffer = () => import("../views/JobOffer.vue");
const LogIn = () => import("../views/LogIn.vue");
const MathematicianDatabase = () =>
    import("../views/MathematicianDatabase.vue");
const NewEvent = () => import("../views/NewEvent.vue");
const Thesis = () => import("../views/Thesis.vue");
const About = () => import("../views/About.vue");
const Membership = () => import("../views/Membership.vue");
const SinglePost = () => import("../views/SinglePost.vue");
const Join = () => import("../views/Join.vue");
const AddPost = () => import("../views/AddPost.vue");
const EditPost = () => import("../views/EditPost.vue");
const Account = () => import("../views/Account.vue");
const AccountSetting = () => import("../views/AccountSetting.vue");
const Dashboard = () => import("../views/back/Dashboard.vue");
const LoginAdmin = () => import("../views/back/Login.vue");
const PostIndex = () => import("../views/back/post/PostIndex.vue");
const PostCreate = () => import("../views/back/post/PostCreate.vue");
const PostEdit = () => import("../views/back/post/PostEdit.vue");
const MemberIndex = () => import("../views/back/member/MemberIndex.vue");
const MemberCreate = () => import("../views/back/member/MemberCreate.vue");
const MemberEdit = () => import("../views/back/member/MemberEdit.vue");
const NotFound = () => import("../views/NotFound.vue");
const UniversityIndex = () =>
    import("../views/back/university/UniversityIndex.vue");
const UniversityCreate = () =>
    import("../views/back/university/UniversityCreate.vue");
const UniversityEdit = () =>
    import("../views/back/university/UniversityEdit.vue");
const ActivityIndex = () => import("../views/back/activity/ActivityIndex.vue");
const ActivityCreate = () =>
    import("../views/back/activity/ActivityCreate.vue");
const ActivityEdit = () => import("../views/back/activity/ActivityEdit.vue");
const JobIndex = () => import("../views/back/job/JobIndex.vue");
const JobCreate = () => import("../views/back/job/JobCreate.vue");
const JobEdit = () => import("../views/back/job/JobEdit.vue");
const ThesesIndex = () => import("../views/back/theses/ThesesIndex.vue");
const ThesesCreate = () => import("../views/back/theses/ThesesCreate.vue");
const ThesesEdit = () => import("../views/back/theses/ThesesEdit.vue");
const AwardsIndex = () => import("../views/back/awards/AwardsIndex.vue");
const AwardsCreate = () => import("../views/back/awards/AwardsCreate.vue");
const AwardsEdit = () => import("../views/back/awards/AwardsEdit.vue");

const siteName = "CMU";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            title: siteName,
        },
    },
    {
        path: "/news-events/:year",
        name: "news-events",
        props: true,
        component: NewEvent,
        meta: {
            title: siteName + " - News & Events",
        },
    },
    {
        path: "/membership",
        name: "membership",
        component: Membership,
        meta: {
            title: siteName + " - Membership",
        },
    },
    {
        path: "/cameroon-mathematician-database",
        name: "cam-math-db",
        component: MathematicianDatabase,
        meta: {
            title: siteName + " - Mathematician Database",
        },
    },
    {
        path: "/awards/:year?",
        name: "awards",
        props: true,
        component: Awards,
        meta: {
            title: siteName + " - Awards",
        },
    },
    {
        path: "/thesis",
        name: "thesis",
        component: Thesis,
        meta: {
            title: siteName + " - Thesis",
        },
    },
    {
        path: "/job-offer",
        name: "job-offer",
        component: JobOffer,
        meta: {
            title: siteName + " - Job Offer",
        },
    },
    {
        path: "/about-cmu",
        name: "about",
        component: About,
        meta: {
            title: siteName + " - About",
        },
    },
    {
        path: "/log-in",
        name: "log-in",
        component: LogIn,
        meta: {
            title: siteName + " - Login",
        },
    },
    {
        path: "/join",
        name: "join",
        component: Join,
        meta: {
            title: siteName + " - Join",
        },
    },
    {
        path: "/add-post",
        name: "post.add",
        component: AddPost,
        meta: {
            title: siteName + " - Add Post",
        },
    },
    {
        path: "/edit-post/:id",
        component: EditPost,
        props: true,
        name: "post.edit",
        meta: {
            title: siteName + " - Edit Post",
        },
    },
    {
        path: "/:type/:id",
        name: "single-post",
        props: true,
        component: SinglePost,
        meta: {
            title: siteName + " - Post",
        },
    },
    {
        path: "/account/:name/:id",
        name: "account",
        component: Account,
        props: true,
        meta: {
            title: siteName + " - Account",
        },
    },
    {
        path: "/account-setting",
        name: "account.setting",
        component: AccountSetting,
        // props: true,
        meta: {
            title: siteName + " - Account Setting",
        },
    },
    {
        path: "/:pathMatch(.*)",
        name: "not.found",
        component: NotFound,
        meta: {
            title: siteName + " - Page Introuvable",
        },
    },

    // Admin routes
    {
        path: "/admin",
        name: "admin",
        component: LoginAdmin,
        name: "admin",
        children: [
            {
                path: "",
                component: LoginAdmin,
                name: "admin.login",
                meta: {
                    title: siteName + " - Admin Panel",
                },
            },

            {
                path: "dashboard",
                component: Dashboard,
                name: "admin.dash",
                meta: {
                    title: siteName + " - Dashboard",
                },
            },
            {
                path: "member",
                component: MemberIndex,
                props: true,
                name: "admin.member.index",
                meta: {
                    title: siteName + " - Member",
                },
            },
            {
                path: "member/create",
                component: MemberCreate,
                props: true,
                name: "admin.member.create",
                meta: {
                    title: siteName + " - Create Member",
                },
            },
            {
                path: "member/edit/:id",
                component: MemberEdit,
                props: true,
                name: "admin.member.edit",
                meta: {
                    title: siteName + " - Edit Member",
                },
            },
            {
                path: "post",
                component: PostIndex,
                props: true,
                name: "admin.post.index",
                meta: {
                    title: siteName + " - Posts",
                },
            },
            {
                path: "post/create",
                component: PostCreate,
                props: true,
                name: "admin.post.create",
                meta: {
                    title: siteName + " - Create Post",
                },
            },
            {
                path: "post/edit/:id",
                component: PostEdit,
                props: true,
                name: "admin.post.edit",
                meta: {
                    title: siteName + " - Edit Post",
                },
            },
            {
                path: "university",
                component: UniversityIndex,
                name: "admin.university.index",
                meta: {
                    title: siteName + " - University",
                },
            },
            {
                path: "university/create",
                component: UniversityCreate,
                name: "admin.university.create",
                meta: {
                    title: siteName + " - Create University",
                },
            },
            {
                path: "university/edit/:id",
                component: UniversityEdit,
                props: true,
                name: "admin.university.edit",
                meta: {
                    title: siteName + " - Edit University",
                },
            },
            {
                path: "activity",
                component: ActivityIndex,
                name: "admin.activity.index",
                meta: {
                    title: siteName + " - Activity",
                },
            },
            {
                path: "activity/create",
                component: ActivityCreate,
                name: "admin.activity.create",
                meta: {
                    title: siteName + " - Create Activity",
                },
            },
            {
                path: "activity/edit/:id",
                component: ActivityEdit,
                props: true,
                name: "admin.activity.edit",
                meta: {
                    title: siteName + " - Edit Activity",
                },
            },
            {
                path: "awards",
                component: AwardsIndex,
                name: "admin.awards.index",
                meta: {
                    title: siteName + " - Awards",
                },
            },
            {
                path: "awards/create",
                component: AwardsCreate,
                name: "admin.awards.create",
                meta: {
                    title: siteName + " - Create Awards",
                },
            },
            {
                path: "awards/edit/:id",
                component: AwardsEdit,
                props: true,
                name: "admin.awards.edit",
                meta: {
                    title: siteName + " - Edit Awards",
                },
            },
            {
                path: "theses",
                component: ThesesIndex,
                name: "admin.theses.index",
                meta: {
                    title: siteName + " - Theses",
                },
            },
            {
                path: "theses/create",
                component: ThesesCreate,
                name: "admin.theses.create",
                meta: {
                    title: siteName + " - Create Theses",
                },
            },
            {
                path: "theses/edit/:id",
                component: ThesesEdit,
                props: true,
                name: "admin.theses.edit",
                meta: {
                    title: siteName + " - Edit Theses",
                },
            },
            {
                path: "job-offer",
                component: JobIndex,
                name: "admin.job.index",
                meta: {
                    title: siteName + " - Job",
                },
            },
            {
                path: "job-offer/create",
                component: JobCreate,
                name: "admin.job.create",
                meta: {
                    title: siteName + " - Create Job",
                },
            },
            {
                path: "job-offer/edit/:id",
                component: JobEdit,
                props: true,
                name: "admin.job.edit",
                meta: {
                    title: siteName + " - Edit Job",
                },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

router.afterEach((to) => {
    document.title = to.meta.title;
});

export default router;
