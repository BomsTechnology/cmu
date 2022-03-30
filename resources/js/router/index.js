import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Awards from "../views/Awards.vue";
import JobOffer from "../views/JobOffer.vue";
import LogIn from "../views/LogIn.vue";
import MathematicianDatabase from "../views/MathematicianDatabase.vue";
import NewEvent from "../views/NewEvent.vue";
import Thesis from "../views/Thesis.vue";
import About from "../views/About.vue";
import Membership from "../views/Membership.vue";
import SinglePost from '../views/SinglePost.vue'
import Join from "../views/Join.vue";
import Account from "../views/Account.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/news-events',
        name: 'news-events',
        component: NewEvent
    },
    {
        path: '/membership',
        name: 'membership',
        component: Membership
    },
    {
        path: '/cameroon-mathematician-database',
        name: 'cam-math-db',
        component: MathematicianDatabase
    },
    {
        path: '/awards',
        name: 'awards',
        component: Awards
    },
    {
        path: '/thesis',
        name: 'thesis',
        component: Thesis
    },
    {
        path: '/job-offer',
        name: 'job-offer',
        component: JobOffer
    },
    {
        path: '/about-cmu',
        name: 'about',
        component: About
    },
    {
        path: '/log-in',
        name: 'log-in',
        component: LogIn
    },
    {
        path: '/join',
        name: 'join',
        component: Join
    },
    {
        path: '/post',
        name: 'single-post',
        component: SinglePost
    },
    {
        path: '/account',
        name: 'account',
        component: Account
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});