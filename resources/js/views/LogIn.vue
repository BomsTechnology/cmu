<script setup>
import SubHeader from "../components/SubHeader.vue";
import useAuth from "../services/authServices.js";
import Error from "../components/Error.vue";
import { reactive, ref, onMounted } from "vue";

const user = reactive({
    email: "",
    password: "",
});
const { loginUser, errors, loading } = useAuth();

const login = async () => {
    await loginUser({ ...user });
};
</script>

<template>
    <SubHeader :title="'Log In'" />

    <section
        class="max-w-lg my-10 p-6 mx-auto bg-white rounded-md shadow-lg dark:bg-gray-800"
    >
        <Error v-if="errors != ''">{{ errors }}</Error>
        <form @submit.prevent="login">
            <div class="mt-4">
                <div>
                    <label
                        class="text-gray-700 dark:text-gray-200"
                        for="emailAddress"
                        >Email Address</label
                    >
                    <input
                        required
                        v-model="user.email"
                        id="emailAddress"
                        type="email"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>

                <div class="mt-4">
                    <label
                        class="text-gray-700 dark:text-gray-200"
                        for="password"
                        >Password</label
                    >
                    <input
                        v-model="user.password"
                        required
                        id="password"
                        type="password"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>
            </div>

            <div class="mt-6">
                <button
                    class="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                >
                    Log In
                </button>
            </div>
        </form>

        <div class="flex justify-start mt-6">
            <button
                class="px-6 py-2 leading-5 text-sm text-blue-600 transition-colors duration-200 transform hover:underline focus:outline-none"
            >
                Forgot Password ?
            </button>
        </div>

        <div class="border-0 border-t p-4 mt-4 relative flex justify-center">
            <div
                class="absolute text-sm bg-white -top-3 md:right-[218px] right-[145px] px-2"
            >
                Or
            </div>
            <router-link
                :to="{ name: 'join' }"
                class="px-6 py-2 mx-1 text-sm font-medium leading-5 text-center text-blue-600 transition-colors duration-200 transform bg-white rounded-full hover:bg-blue-700 hover:text-white md:mx-0 md:w-auto"
                href="#"
                >Join</router-link
            >
        </div>
    </section>
</template>
