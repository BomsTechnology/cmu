<script setup>
import { onMounted, ref, computed } from "vue";
import Sidebar from "../../../components/Sidebar.vue";
import { PlusCircleIcon } from "@heroicons/vue/solid";
import useTheses from "../../../services/thesesServices.js";
import Error from "../../../components/Error.vue";
  
        const { theses, getTheses, destroyThese, loading, errors } =
            useTheses();
        const searchKey = ref("");

        onMounted(getTheses());

        const deleteThese = async (id) => {
            if(confirm("I you Sure ?")){
                await destroyThese(id)
                if(errors.value == ''){
                    await getTheses();
                }
            }
        };


        const filteredThese = computed({
        get() { return theses.value.filter((these) => {
                return these.theme
                    .toLowerCase()
                    .includes(searchKey.value.toLowerCase());
            })},
        set(val) { searchKey.value = val }

    })
    

</script>

<template>
    <div class="flex">
        <Sidebar />
        <div class="w-full xl:mt-0 mt-[74px] relative h-auto xl:p-4">
            <div
                class=" w-full z-0 h-full p-4"
            >
                <div class="px-8 py-5 bg-white shadow-lg flex justify-between">
                    <h1 class="text-4xl text-gray-700 font-bold capitalize">
                        These
                    </h1>
                    <router-link
                        :to="{
                            name: 'admin.theses.create',
                        }"
                        class="flex justify-start items-center space-x-3 text-white bg-blue-600 rounded px-3 py-2"
                    >
                        <PlusCircleIcon class="w-6 h-6" />
                        <p class="text-base leading-4">Add These</p>
                    </router-link>
                </div>

                <div class="flex flex-col bg-white pt-8">
                    <div class="overflow-x-auto shadow-lg">
                        <div
                            class="inline-block min-w-full align-middle dark:bg-gray-800"
                        >
                            <div class="p-4">
                                <label for="table-search" class="sr-only"
                                    >Search</label
                                >
                                <div class="relative mt-1">
                                    <div
                                        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                                    >
                                        <svg
                                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="table-search"
                                        v-model="searchKey"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Search for items"
                                    />
                                </div>
                            </div>
                            <div class="overflow-hidden">
                                <table
                                    class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"
                                >
                                    <thead class="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                Theme
                                            </th>
                                            <th
                                                scope="col"
                                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                               University
                                            </th>
                                            <th
                                                scope="col"
                                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                Year
                                            </th>
                                            <th
                                                scope="col"
                                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                Content
                                            </th>
                                            <th scope="col" class="p-4">
                                                <span class="sr-only"
                                                    >Edit</span
                                                >
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                                        v-if="filteredThese.length != 0"
                                    >
                                        <tr
                                            v-for="these in filteredThese"
                                            :key="these.id"
                                            class="hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <td
                                                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {{ these.theme }}
                                            </td>
                                            <td
                                                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {{ these.university }}
                                            </td>
                                            <td
                                                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {{ these.year }}   
                                            </td>
                                            <td
                                                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {{ these.path }}
                                            </td>
                                            
                                           <td
                                                class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                                            >
                                                <router-link :to="{name:'admin.theses.edit', params: {id: these.id }}"
                                                    href="#"
                                                    class="text-blue-600 dark:text-blue-500 hover:underline"
                                                    >Edit</router-link
                                                >
                                                <a
                                                    @click="deleteThese(these.id)"
                                                    href="#"
                                                    class="text-red-600 ml-3 dark:text-blue-500 hover:underline"
                                                    >Delete</a
                                                >
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody
                                        class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                                        v-else-if="loading == 1"
                                    >
                                        <tr
                                            class="hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <td
                                                colspan="7"
                                                class="text-sm w-full font-medium border text-gray-900 whitespace-nowrap p-16"
                                            >
                                                <svg class="animate-spin h-16 w-16 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody
                                        class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                                        v-else
                                    >
                                        <tr
                                            class="hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <td
                                                colspan="7"
                                                class="py-4 px-6 text-xl font-medium text-gray-900 text-center whitespace-nowrap uppercase"
                                            >
                                                NO THESES
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


