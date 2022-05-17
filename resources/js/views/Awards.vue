<script setup>
import SubHeader from "../components/SubHeader.vue";
import { onMounted, ref, computed } from "vue";
import useAwards from "../services/awardsServices.js";
import router from "../router/index.js";

const { awards, getAwardsFront, loading, errors } = useAwards();
const props = defineProps({
    year: String,
});
const currentDate = new Date().getFullYear();

onMounted(getAwardsFront(props.year));

function changeDate(date) {
    getAwardsFront(date);
    router.push({
        name: "awards",
        params: { year: date },
    });
}
</script>

<template>
    <SubHeader :title="'Awards'" />
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
        <div
            class="lg:h-[600px] border lg:flex py-4"
            v-if="awards.length != 0"
            v-for="award in awards"
            :key="award.id"
        >
            <div
                class="lg:h-full h-[600px] block w-full border-0 lg:border-r-2 px-4"
            >
                <div class="h-full py-4">
                    <div
                        class="w-full md:h-28 md:flex justify-between shadow-md border"
                    >
                        <div class="p-4 text-center md:text-left w-full">
                            <h3 class="text-md">{{ award.title }}</h3>
                            <p class="text-sm font-light mt-2 w-full">
                                {{ award.description.substring(0, 19) + "..." }}
                            </p>
                            <a
                                href="#"
                                class="text-sm text-blue-600 mt-2 hover:underline"
                                >Read More</a
                            >
                        </div>
                        <div
                            class="px-1 h-full bg-gray-400 w-1 md:block hidden"
                        >
                            &nbsp;
                        </div>
                    </div>
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
</template>
