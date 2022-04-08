<script setup>
    import Sidebar from "../../../components/Sidebar.vue";
    import { toRefs, ref, onMounted } from "vue";
    import Error from "../../../components/Error.vue";
    import useTheses from "../../../services/thesesServices.js";

    import router from "../../../router/index.js";

    const props = defineProps({
            id : {
              required: true,
              type: String
          }
        });
    const { id } = toRefs(props);

    const { updateThese, getThese, these, errors, loading } = useTheses();

    onMounted(
                getThese(id.value),                        
        );

    const saveThese = async () => {
        let formData = new FormData();
        formData.append("theme", these.theme);
        formData.append("year", these.year);
        formData.append("path", these.path);
        formData.append("university", these.university);
        formData.append('_method', 'PUT');

        await updateThese(formData, id.value);
        router.push({
            name: "admin.theses.index",
        });

    };

    const file =  ref(null);
    const handelFileObject = () => {
        these.value.image = file.value.files[0];
        console.log(these);
    };

</script>

<template>
    <div class="flex">
        <Sidebar />
        <div class="w-full xl:mt-0 mt-[74px] relative h-auto xl:p-4">
            <div class="w-full z-0 p-4">
                <div
                    class="px-8 py-5 bg-white shadow-lg flex w-full justify-between"
                >
                    <h1 class="text-4xl text-gray-700 font-bold capitalize">
                        Add these
                    </h1>
                </div>

                <section class="p-6 mx-auto bg-white shadow-md w-full">
                    <Error v-if="errors != ''">{{ errors }}</Error>
                    <h2 class="text-md font-light text-gray-700">
                        Add a new these
                    </h2>
                    <form
                        @submit.prevent="saveThese()"
                        id="theseform"
                        enctype="multipart/form-data"
                    >
                        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div class="col-span-2">
                                <label class="text-gray-700 dark:text-gray-200"
                                    >Theme</label
                                >
                                <input
                                    required
                                    v-model="these.theme"
                                    type="text"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                             <div class="col-span-2">
                                <label class="text-gray-700 dark:text-gray-200"
                                    >Date</label
                                >
                                <input
                                    required
                                    v-model="these.year"
                                    type="date"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>


                            <div class="col-span-2">
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="fr"
                                    >Image</label
                                >
                                <input
                                    ref="file"
                                    @change="handelFileObject()"
                                    type="file"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div class="col-span-2">
                                <label
                                    class="text-gray-700 dark:text-gray-200"
                                    for="pt"
                                    >University</label
                                >
                                <input
                                    required
                                    type="text"
                                    v-model="these.university"
                                    id="pt"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                >
                            </div>
                        </div>

                        <div class="flex justify-end mt-6">
                            <button
                                v-if="loading == 0"
                                type="submit"
                                class="px-6 py-2 leading-5 bg-blue-600 text-white rounded blue-600 focus:outline-none"
                            >
                                Save
                            </button>
                            <button
                                v-if="loading == 1"
                                type="submit"
                                disabled
                                class="px-6 py-2 leading-5 text-white rounded bg-blue-300 focus:outline-none"
                            >
                                <svg
                                    class="animate-spin h-5 w-5 text-white"
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
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </div>
</template>


