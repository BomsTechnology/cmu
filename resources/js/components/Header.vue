<script setup>
import { ref } from "vue";
import { UserCircleIcon } from "@heroicons/vue/solid";

//varibles
const open = ref(false);
const loading = ref(0);
const openProfil = ref(false);
const user = localStorage.user ? JSON.parse(localStorage.user) : "";
const currentDate = new Date().getFullYear();

//functions
const logout = async () => {
    try {
        loading.value = 1;
        let response = await axios.post(
            "/api/logout",
            {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            }
        );
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        loading.value = 2;
        location.href = "/";
    } catch (e) {
        loading.value = 0;
        if (e.response.status == 401) {
            location.href = "/";
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("user");
        }
    }
};
</script>
<template>
    <nav class="bg-white shadow-lg dark:bg-gray-800">
        <div class="md:pt-3 px-6 py-4 md:p-0">
            <div
                class="flex flex-col md:flex-row md:justify-between md:items-center"
            >
                <div
                    class="flex items-center justify-between w-full lg:pl-40 md:pl-10"
                >
                    <div class="flex items-center w-full justify-between">
                        <a
                            class="text-2xl font-extrabold text-blue-600 transition-colors duration-200 transform dark:text-white md:text-3xl lg:text-5xl hover:text-gray-500 dark:hover:text-gray-300"
                            href="#"
                            >CMU</a
                        >

                        <!-- Search input on desktop screen -->
                        <div class="hidden mx-10 md:block lg:pl-20">
                            <div class="relative flex">
                                <span
                                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                                >
                                    <svg
                                        class="w-5 h-5 text-gray-400"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                </span>

                                <input
                                    type="text"
                                    class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-l-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                    placeholder="Search"
                                />
                                <button
                                    class="px-3 py-2 mx-1 text-sm font-bold leading-5 text-center text-white transition-colors duration-200 transform bg-blue-600 rounded-r-full hover:bg-blue-700 md:mx-0 md:w-auto"
                                >
                                    OK
                                </button>
                            </div>
                        </div>

                        <div
                            class="relative hidden md:flex items-center py-2 -mx-1 lg:pr-40 md:pr-10 md:mx-0"
                        >
                            <button v-if="user" class="block">
                                <div
                                    @click="openProfil = !openProfil"
                                    class="flex space-x-2 items-center text-white transition-colors duration-200 text-sm bg-primary-blue px-3 py-2 uppercase"
                                >
                                    <span v-if="user.avatar">
                                        <img :src="user.avatar" alt="" />
                                    </span>
                                    <UserCircleIcon
                                        v-else
                                        class="h-14 w-14 text-gray-700"
                                    />
                                </div>
                                <div
                                    class="absolute bg-white shadow-md z-50"
                                    v-if="openProfil"
                                >
                                    <router-link
                                        :to="{
                                            name: 'account',
                                            params: {
                                                name: user.firstname.toLowerCase(),
                                                id: user.id,
                                            },
                                        }"
                                        href=""
                                        class="block py-2 px-4 text-xs hover:bg-blue-500 hover:text-white"
                                        >My Account</router-link
                                    >
                                    <a
                                        href=""
                                        class="block py-2 px-4 text-xs hover:bg-blue-500 hover:text-white"
                                        >Account Setting</a
                                    >
                                    <button
                                        @click="logout()"
                                        class="block py-2 px-4 text-xs hover:bg-blue-500 hover:text-white"
                                    >
                                        Se Deconnecter
                                    </button>
                                </div>
                            </button>

                            <router-link
                                v-else
                                :to="{ name: 'log-in' }"
                                class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-blue-600 transition-colors border border-blue-600 duration-200 transform bg-white rounded-full hover:bg-blue-600 hover:text-white md:mx-2 md:w-auto"
                                href="#"
                                >Login</router-link
                            >

                            <a
                                class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0 md:w-auto"
                                href="#"
                                >Giving To CMU</a
                            >
                            <a class="block px-3 py-2 mx-1" href="#">
                                <img
                                    class="w-8"
                                    src="/assets/flags/Flag_of_France.svg.png"
                                    alt="french-flag"
                                />
                            </a>
                        </div>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="flex md:hidden" @click="open = !open">
                        <button
                            type="button"
                            class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                class="w-6 h-6 fill-current"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <div class="items-center md:flex" v-if="open">
                    <div
                        class="flex md:hidden flex-col mt-2 md:flex-row md:mt-0 md:mx-1"
                    >
                        <router-link
                            :to="{ name: 'home' }"
                            class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                            href="#"
                            >Home</router-link
                        >
                        <router-link
                            :to="{
                                name: 'news-events',
                                params: { year: currentDate },
                            }"
                            class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                            href="#"
                            >News & Events</router-link
                        >
                        <router-link
                            :to="{ name: 'membership' }"
                            class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                            href="#"
                            >Membership</router-link
                        >
                        <router-link
                            :to="{ name: 'cam-math-db' }"
                            class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                            href="#"
                            >Cameroon Mathematician Database</router-link
                        >
                        <router-link
                            :to="{
                                name: 'awards',
                                params: { year: currentDate },
                            }"
                            class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                            href="#"
                            >Awards</router-link
                        >
                        <router-link
                            :to="{ name: 'thesis' }"
                            class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                            href="#"
                            >Thesis</router-link
                        >
                        <router-link
                            :to="{ name: 'job-offer' }"
                            class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                            href="#"
                            >Job Offer</router-link
                        >
                        <router-link
                            :to="{ name: 'about' }"
                            class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0"
                            href="#"
                            >About To CMU</router-link
                        >
                    </div>

                    <div
                        class="flex items-center py-2 -mx-1 lg:pr-40 md:pr-10 md:mx-0"
                    >
                        <button v-if="user" class="block">
                            <div
                                @click="openProfil = !openProfil"
                                class="flex space-x-2 items-center text-white transition-colors duration-200 text-sm bg-primary-blue px-3 py-2 uppercase"
                            >
                                <span v-if="user.avatar">
                                    <img :src="user.avatar" alt="" />
                                </span>
                                <UserCircleIcon
                                    v-else
                                    class="h-14 w-14 text-gray-700"
                                />
                            </div>
                            <div
                                class="absolute bg-white shadow-md z-50"
                                v-if="openProfil"
                            >
                                <router-link
                                    :to="{
                                        name: 'account',
                                        params: {
                                            name: user.firstname.toLowerCase(),
                                            id: user.id,
                                        },
                                    }"
                                    href=""
                                    class="block py-2 px-4 text-xs hover:bg-blue-500 hover:text-white"
                                    >My Account</router-link
                                >
                                <a
                                    href=""
                                    class="block py-2 px-4 text-xs hover:bg-blue-500 hover:text-white"
                                    >Account Setting</a
                                >
                                <button
                                    @click="logout()"
                                    class="block py-2 px-4 text-xs hover:bg-blue-500 hover:text-white"
                                >
                                    Se Deconnecter
                                </button>
                            </div>
                        </button>
                        <router-link
                            v-else
                            :to="{ name: 'log-in' }"
                            class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-blue-600 transition-colors border border-blue-600 duration-200 transform bg-white rounded-full hover:bg-blue-600 hover:text-white md:mx-2 md:w-auto"
                            >Login</router-link
                        >
                        <a
                            class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0 md:w-auto"
                            href="#"
                            >Giving To CMU</a
                        >
                        <a class="block px-3 py-2 mx-1" href="#">
                            <img
                                class="w-8"
                                src="/assets/flags/Flag_of_France.svg.png"
                                alt="french-flag"
                            />
                        </a>
                    </div>

                    <!-- Search input on mobile screen -->
                    <div class="mt-3 md:hidden">
                        <div class="relative flex">
                            <span
                                class="absolute inset-y-0 left-0 flex items-center pl-3"
                            >
                                <svg
                                    class="w-5 h-5 text-gray-400"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </span>

                            <input
                                type="text"
                                class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-l-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                placeholder="Search"
                            />
                            <button
                                class="px-3 py-2 mx-1 text-sm font-bold leading-5 text-center text-white transition-colors duration-200 transform bg-blue-600 rounded-r-full hover:bg-blue-700 md:mx-0 md:w-auto"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="py-3 text-center lg:px-32 md:px-4 mt-3 bg-blue-600 overflow-y-auto whitespace-nowrap scroll-hidden hidden md:block"
            >
                <router-link
                    :to="{ name: 'home' }"
                    class="my-1 px-3 py-2 mx-1 text-md text-center text-white transition-colors duration-200 transform bg-blue-600 rounded-full hover:bg-blue-700"
                    href="#"
                    >Home</router-link
                >
                <router-link
                    :to="{ name: 'news-events', params: { year: currentDate } }"
                    class="my-1 px-3 py-2 mx-1 text-md text-center text-white transition-colors duration-200 transform bg-blue-600 rounded-full hover:bg-blue-700"
                    href="#"
                    >News & Events</router-link
                >
                <router-link
                    :to="{ name: 'membership' }"
                    class="my-1 px-3 py-2 mx-1 text-md text-center text-white transition-colors duration-200 transform bg-blue-600 rounded-full hover:bg-blue-700"
                    href="#"
                    >Membership</router-link
                >
                <router-link
                    :to="{ name: 'cam-math-db' }"
                    class="my-1 px-3 py-2 mx-1 text-md text-center text-white transition-colors duration-200 transform bg-blue-600 rounded-full hover:bg-blue-700"
                    href="#"
                    >Cameroon Mathematician Database</router-link
                >
                <router-link
                    :to="{ name: 'awards', params: { year: currentDate } }"
                    class="my-1 px-3 py-2 mx-1 text-md text-center text-white transition-colors duration-200 transform bg-blue-600 rounded-full hover:bg-blue-700"
                    href="#"
                    >Awards</router-link
                >
                <router-link
                    :to="{ name: 'thesis' }"
                    class="my-1 px-3 py-2 mx-1 text-md text-center text-white transition-colors duration-200 transform bg-blue-600 rounded-full hover:bg-blue-700"
                    href="#"
                    >Thesis</router-link
                >
                <router-link
                    :to="{ name: 'job-offer' }"
                    class="my-1 px-3 py-2 mx-1 text-md text-center text-white transition-colors duration-200 transform bg-blue-600 rounded-full hover:bg-blue-700"
                    href="#"
                    >Job Offer</router-link
                >
                <router-link
                    :to="{ name: 'about' }"
                    class="my-1 px-3 py-2 mx-1 text-md text-center text-white transition-colors duration-200 transform bg-blue-600 rounded-full hover:bg-blue-700"
                    href="#"
                    >About CMU</router-link
                >
            </div>
        </div>
    </nav>
</template>
