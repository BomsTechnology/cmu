<script setup>
import SubHeader from "../components/SubHeader.vue";
import { onMounted, ref, computed } from "vue";
import useActivities from "../services/activityServices.js";
import router from "../router/index.js";

const { news, events, getActivitiesFront, loading, errors } = useActivities();
const props = defineProps({
    year: String,
});
const currentDate = new Date().getFullYear();

onMounted(getActivitiesFront(props.year));

function changeDate(date) {
    getActivitiesFront(date);
    router.push({
        name: "news-events",
        params: { year: date },
    });
    //location.href = '/news-events/'+date
}
</script>

<template>
    <SubHeader :title="'News & Events'" />
    <div class="md:px-8 mt-8 md:mb-8">
        <div class="flex w-full border-0 border-b border-gray-300">
            <button
                @click="changeDate(currentDate)"
                :class="[
                    year == currentDate
                        ? 'flex items-center h-12 px-4 py-2 md:text-sm text-xs font-bold text-center text-blue-600 border border-b-0 border-gray-300 sm:text-base dark:border-gray-500 rounded-t-md dark:text-white whitespace-nowrap focus:outline-none'
                        : 'flex items-center h-12 px-4 py-2 md:text-sm text-xs  text-center text-gray-700 bg-transparent sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300',
                ]"
            >
                {{ currentDate }}
            </button>

            <button
                @click="changeDate(Number(currentDate) - 1)"
                :class="[
                    year == Number(currentDate) - 1
                        ? 'flex items-center h-12 px-4 py-2 md:text-sm text-xs font-bold text-center text-blue-600 border border-b-0 border-gray-300 sm:text-base dark:border-gray-500 rounded-t-md dark:text-white whitespace-nowrap focus:outline-none'
                        : 'flex items-center h-12 px-4 py-2 md:text-sm text-xs  text-center text-gray-700 bg-transparent sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300',
                ]"
            >
                {{ Number(currentDate) - 1 }}
            </button>

            <button
                @click="changeDate(Number(currentDate) - 2)"
                :class="[
                    year == Number(currentDate) - 2
                        ? 'flex items-center h-12 px-4 py-2 md:text-sm text-xs font-bold text-center text-blue-600 border border-b-0 border-gray-300 sm:text-base dark:border-gray-500 rounded-t-md dark:text-white whitespace-nowrap focus:outline-none'
                        : 'flex items-center h-12 px-4 py-2 md:text-sm text-xs  text-center text-gray-700 bg-transparent sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300',
                ]"
            >
                {{ Number(currentDate) - 2 }}
            </button>

            <button
                @click="changeDate('previous')"
                :class="[
                    year == 'previous'
                        ? 'flex items-center h-12 px-4 py-2 md:text-sm text-xs font-bold text-center text-blue-600 border border-b-0 border-gray-300 sm:text-base dark:border-gray-500 rounded-t-md dark:text-white whitespace-nowrap focus:outline-none'
                        : 'flex items-center h-12 px-4 py-2 md:text-sm text-xs  text-center text-gray-700 bg-transparent sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300',
                ]"
            >
                Previous Year
            </button>
        </div>
        <div class="lg:h-[600px] border lg:flex py-4">
            <div
                class="lg:h-full h-[600px] block lg:w-1/2 border-0 lg:border-r-2 px-4"
            >
                <h1 class="text-2xl text-blue-600 font-bold underline">News</h1>

                <div class="h-full py-4" v-if="news.length != 0">
                    <div
                        class="w-full md:h-28 md:flex shadow border"
                        v-for="n in news"
                        :key="n.id"
                    >
                        <router-link
                            :to="{
                                name: 'single-post',
                                params: {
                                    type: 'activity',
                                    id: n.id,
                                },
                            }"
                        >
                            <img
                                :src="n.image"
                                class="md:w-32 md:h-full object-cover w-full h-24"
                                alt=""
                            />
                        </router-link>
                        <router-link
                            :to="{
                                name: 'single-post',
                                params: {
                                    type: 'activity',
                                    id: n.id,
                                },
                            }"
                            class="p-2 text-center md:text-left w-full"
                        >
                            <h3 class="text-md">{{ n.title }}</h3>
                            <p class="text-sm font-light mt-2">
                                {{ n.content.substring(0, 19) + "..." }}
                            </p>
                            <a
                                href="#"
                                class="text-sm text-blue-600 mt-2 hover:underline"
                                >Read More</a
                            >
                        </router-link>
                        <div
                            class="px-1 h-full bg-gray-400 w-1 md:block hidden"
                        >
                            &nbsp;
                        </div>
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
                    <p class="text-center text-3xl">NO RESULT</p>
                </div>
            </div>
            <div class="lg:h-full h-[600px] block lg:w-1/2 px-4">
                <h1 class="text-2xl text-blue-600 font-bold underline">
                    Events
                </h1>

                <div class="h-full py-4" v-if="events.length != 0">
                    <div
                        class="w-full md:h-28 md:flex shadow-md border"
                        v-for="event in events"
                        :key="event.id"
                    >
                        <router-link
                            :to="{
                                name: 'single-post',
                                params: {
                                    type: 'activity',
                                    id: event.id,
                                },
                            }"
                        >
                            <img
                                :src="event.image"
                                class="md:w-32 md:h-full object-cover w-full h-24"
                                alt=""
                            />
                        </router-link>
                        <router-link
                            :to="{
                                name: 'single-post',
                                params: {
                                    type: 'activity',
                                    id: event.id,
                                },
                            }"
                            class="p-2 text-center md:text-left w-full"
                        >
                            <h3 class="text-md">{{ event.title }}</h3>
                            <p class="text-sm font-light mt-2">
                                {{ event.content.substring(0, 19) + "..." }}
                            </p>
                            <a href="#" class="text-sm text-blue-600 mt-2"
                                >Read More</a
                            >
                        </router-link>
                        <div
                            class="px-1 h-full bg-gray-400 w-1 md:block hidden"
                        >
                            &nbsp;
                        </div>
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
                    <p class="text-center text-3xl">NO RESULT</p>
                </div>
            </div>
        </div>
    </div>
</template>
