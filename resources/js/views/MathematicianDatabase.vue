<script setup>
import SubHeader from "../components/SubHeader.vue";
import { UserCircleIcon } from "@heroicons/vue/solid";
import useMembers from "../services/memberServices.js";
import { onMounted, ref, computed } from "vue";

const { members, getMembers, loading, errors } = useMembers();
const keyWords = ref("");

onMounted(getMembers());

const filteredMember = computed({
    get() {
        return members.value.filter((member) => {
            return member.firstname
                .toLowerCase()
                .includes(keyWords.value.toLowerCase());
        });
    },
    set(val) {
        keyWords.value = val;
    },
});
</script>

<template>
    <SubHeader :title="'Cameroon Matematician Database'" />
    <div class="lg:flex py-4 md:px-10">
        <div class="block lg::w-1/4 px-4 py-12">
            <section
                class="max-w-4xl py-6 px-4 mx-auto text-center bg-white rounded-md border border-gray-300 dark:bg-gray-800"
            >
                <h2
                    class="text-lg font-semibold text-blue-600 capitalize dark:text-white"
                >
                    Filter Mathematician
                </h2>
                <form>
                    <div class="mt-4">
                        <div>
                            <input
                                id=""
                                type="search"
                                v-model="keyWords"
                                placeholder="Keywords"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <input
                                id=""
                                type="text"
                                placeholder="University"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <input
                                id=""
                                type="text"
                                placeholder="country"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <input
                                id=""
                                type="text"
                                placeholder="Field Research"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                    </div>

                    <div class="mt-6">
                        <button
                            class="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                        >
                            Filter
                        </button>
                    </div>
                </form>
            </section>
        </div>
        <div class="block lg:w-3/4">
            <div
                v-if="filteredMember.length != 0"
                class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-6"
            >
                <router-link
                    v-for="member in filteredMember"
                    :key="member.id"
                    :to="{
                        name: 'account',
                        params: {
                            name: member.firstname.toLowerCase(),
                            id: member.id,
                        },
                    }"
                    class="flex flex-col items-center pt-9 text-center space-y-1 rounded-xl dark:bg-gray-800 border border-gray-300"
                >
                    <img
                        class="object-cover rounded-full h-36 w-36"
                        :src="member.avatar"
                        v-if="member.avatar"
                    />
                    <UserCircleIcon v-else class="h-36 w-36 text-gray-700" />

                    <h4
                        class="text-gray-700 font-bold capitalize dark:text-gray-300"
                    >
                        {{ member.firstname }} {{ member.lastname }}
                    </h4>

                    <h6 class="text-xs font-extralight italic">
                        {{ member.field_research }}
                    </h6>

                    <h4 class="text-sm font-light pb-4">
                        {{ member.university.name }}
                    </h4>
                </router-link>
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
</template>
