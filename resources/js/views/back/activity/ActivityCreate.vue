<script setup>
    import Sidebar from "../../../components/Sidebar.vue";
    import { reactive, ref, onMounted } from "vue";
    import Error from "../../../components/Error.vue";
    import useActivities from "../../../services/activityServices.js";

    import router from "../../../router/index.js";
    const user = JSON.parse(localStorage.user);

    const activity = reactive({
        title: "",
        content: "",
        image: "",
        type: "",
        activity_date: "",
        user_id: user.id,
    });
    const { createActivity, errors, loading } = useActivities();

    const storeActivity = async () => {
        let formData = new FormData();
        formData.append("image", activity.image);
        formData.append("title", activity.title);
        formData.append("type", activity.type);
        formData.append("activity_date", activity.activity_date);
        formData.append("content", activity.content);
        formData.append("user_id", activity.user_id);


        await createActivity(formData);
        if(errors.value == ''){
            router.push({
                name: "admin.activity.index",
            });
        }

    };

    const file =  ref(null);
    const handelFileObject = () => {
        activity.image = file.value.files[0];
        console.log(activity);
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
                        Add activity
                    </h1>
                </div>

                <section class="p-6 mx-auto bg-white shadow-md w-full">
                    <Error v-if="errors != ''">{{ errors }}</Error>
                    <h2 class="text-md font-light text-gray-700">
                        Add a new activity
                    </h2>
                    <form
                        @submit.prevent="storeActivity()"
                        id="activityform"
                        enctype="multipart/form-data"
                    >
                        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div class="col-span-2">
                                <label class="text-gray-700 dark:text-gray-200"
                                    >Title</label
                                >
                                <input
                                    required
                                    v-model="activity.title"
                                    type="text"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div class="col-span-2">
                                <label class="text-gray-700 dark:text-gray-200"
                                    >Type</label
                                >
                                <select v-model="activity.type" name="" id="" class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue">
                                    <option value="events">Events</option>
                                    <option value="news">News</option>
                                </select>
                            </div>

                            <div class="col-span-2">
                                <label class="text-gray-700 dark:text-gray-200"
                                    >Date</label
                                >
                                <input
                                    required
                                    v-model="activity.activity_date"
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
                                    required
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
                                    >Content</label
                                >
                                <textarea
                                    required
                                    type="text"
                                    v-model="activity.content"
                                    id="pt"
                                    class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                >
                                </textarea>
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


