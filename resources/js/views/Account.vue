<script setup>
import { UserCircleIcon, TrashIcon, PencilIcon } from "@heroicons/vue/solid";
import { onMounted, ref, watch } from "vue";
import useTheses from "../services/thesesServices.js";
import useMembers from "../services/memberServices.js";
import usePosts from "../services/postServices.js";
const props = defineProps({
    id: String,
    name: String,
});
const { getMember2, member, errors, loading } = useMembers();
const { these, getThesesUser } = useTheses();
const { posts, getPostsUser, destroyPost } = usePosts();
onMounted(
    getMember2(props.id),
    getThesesUser(props.id),
    getPostsUser(props.id)
);
watch(props, (newProps, oldProps) => {
    getMember2(newProps.id);
    getThesesUser(newProps.id);
    getPostsUser(newProps.id);
});
const user = localStorage.user ? JSON.parse(localStorage.user) : "";
const deletePost = async (id) => {
    if (confirm("I you Sure ?")) {
        await destroyPost(id);
        if (errors.value == "") {
            await getPostsUser(props.id);
        }
    }
};
</script>

<template>
    <div class="md:flex justify-between shadow py-4 md:px-32 px-4">
        <div
            class="flex md:flex-row flex-col md:w-3/4 justify-center md:justify-start items-center"
        >
            <img
                class="object-cover rounded-full md:h-52 md:w-52 h-32 w-32"
                v-if="member.avatar"
                :src="member.avatar"
            />
            <UserCircleIcon
                v-else
                class="md:h-52 md:w-52 h-32 w-32 text-gray-700"
            />
            <div
                class="flex flex-col justify-center items-center md:items-start md:mx-8 py-4"
            >
                <h1
                    class="text-gray-700 md:text-2xl font-bold dark:text-gray-300 capitalize"
                >
                    {{ member.firstname }} {{ member.lastname }}
                </h1>
                <h3 class="md:text-md text-sm font-extralight mt-4">
                    {{ member.field_research }}
                </h3>
                <h4 class="md:text-sm text-xs mt-4">
                    <span v-if="member.university">{{
                        member.university.name
                    }}</span>
                    <a
                        v-if="member.researchgate_account"
                        :href="member.researchgate_account"
                        class="ml-4 text-blue-500 hover:underline"
                        >@researchgateaccount
                    </a>
                </h4>
            </div>
        </div>
        <div class="flex items-center mt-3 md:mt-0">
            <routerLink
                :to="{ name: 'post.add' }"
                v-if="user.id == member.id"
                class="px-6 py-2 w-full leading-5 text-center text-white transition-colors duration-200 transform bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
                Add Publication
            </routerLink>
            <a
                :href="'mailto:' + member.email"
                v-else
                class="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
                Contact
            </a>
        </div>
    </div>
    <!-- cv -->
    <div class="lg:flex">
        <div class="lg:w-[80%]">
            <div class="my-6 mx-2">
                <div class="border-0 border-b-2 p-4">
                    <h1 class="font-extrabold text-2xl text-gray-700">
                        Auto-Biography & CV
                    </h1>
                </div>
                <div class="p-6">
                    <p
                        class="mt-2 text-sm md:p-6 text-gray-600 dark:text-gray-400 leading-loose"
                    >
                        {{ member.biography }}
                    </p>
                </div>
            </div>
            <!-- publications -->
            <div class="my-6 mx-2 px-4">
                <div class="border-0 border-b-2 p-4">
                    <h1 class="font-extrabold text-2xl text-gray-700">
                        Publications
                    </h1>
                </div>

                <div class="h-full py-4">
                    <div
                        v-if="posts.length != 0"
                        class="w-full lg:flex justify-between shadow border"
                        v-for="post in posts"
                        :key="post.id"
                    >
                        <router-link
                            class="w-full md:h-28 md:flex"
                            :to="{
                                name: 'single-post',
                                params: {
                                    type: 'post',
                                    id: post.id,
                                },
                            }"
                        >
                            <img
                                :src="post.image"
                                class="md:w-32 md:h-full object-cover w-full h-24"
                                alt=""
                            />
                            <div class="p-2 text-center md:text-left w-full">
                                <h3 class="text-md">{{ post.title }}</h3>
                                <p class="text-sm font-light mt-2">
                                    {{ post.content.substring(0, 19) + "..." }}
                                </p>
                                <button
                                    type="button"
                                    class="text-sm text-blue-600 mt-2 hover:underline"
                                >
                                    Read More
                                </button>
                            </div>
                        </router-link>
                        <div
                            v-if="user.id == member.id"
                            class="p-4 flex justify-center space-x-2"
                        >
                            <a href="#" @click.prevent="deletePost(post.id)">
                                <TrashIcon
                                    class="h-6 w-6 text-red-500 hover:text-red-400"
                                />
                            </a>
                            <router-link
                                :to="{
                                    name: 'post.edit',
                                    params: {
                                        id: post.id,
                                    },
                                }"
                            >
                                <PencilIcon
                                    class="h-6 w-6 text-blue-500 hover:text-blue-400"
                                />
                            </router-link>
                        </div>
                    </div>
                    <div v-else-if="loading == 1" class="py-10">
                        <svg
                            class="animate-spin h-16 w-16 mx-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                class="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                stroke-width="4"
                            ></circle>
                            <path
                                class="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    </div>
                    <div v-else class="w-full">
                        <p class="text-center w-full text-lg py-8">No Posts</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:w-[20%]">
            <div class="my-6 mx-2 px-4">
                <div class="border-0 border-b-2 p-4">
                    <h1 class="font-extrabold text-2xl text-gray-700">
                        Thesis
                    </h1>
                </div>

                <div
                    v-if="these.length != 0"
                    class="py-4"
                    v-for="th in these"
                    :key="th.id"
                >
                    <p class="text-sm font-light text-center">{{ th.theme }}</p>
                    <p class="text-sm font-light mt-2 text-center">
                        {{ th.university }} - {{ th.year }}
                    </p>
                    <div
                        class="flex text-xs font-light text-blue-600 mt-3 justify-center space-x-6 text-center"
                    >
                        <a
                            :href="th.path"
                            class="flex items-center hover:underline"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 mr-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span>View</span>
                        </a>
                        <!-- <a href="#" class="flex items-center hover:underline">
                               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                                <span>Download</span>
                           </a> -->
                    </div>
                </div>
                <div v-else-if="loading == 1" class="py-10">
                    <svg
                        class="animate-spin h-16 w-16 mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                        ></circle>
                        <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                </div>
                <div v-else>
                    <p class="text-center text-lg py-8">No Thesis</p>
                </div>
            </div>
            <!-- <div class="my-6 mx-2 px-4">
                <div class="border-0 border-b-2 p-4">
                    <h1 class="font-extrabold text-2xl text-gray-700">
                        Supervision
                    </h1>
                </div>
                <div>
                    <p class="text-center text-lg py-8">No Student Supervise</p>
                </div>

                 <div class="py-4">
                <div class="w-full md:h-28 md:flex justify-between shadow-md border">
                   <div class="p-2 w-full text-center md:text-left">
                       <h3 class="text-md font-bold">ETA CYRIL</h3>
                       <p class="text-sm font-light mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                           <p class="text-sm font-light mt-2">University of Douala - 2021</p>
                   </div>
                </div>   
            </div> 
            </div> -->
        </div>
    </div>
</template>
