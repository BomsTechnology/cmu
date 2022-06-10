<script setup>
import { ref, onMounted } from "vue";
import Error from "../components/Error.vue";
import useMembers from "../services/memberServices.js";
import useUniversities from "../services/universityServices.js";
import router from "../router/index.js";
const { updateMember, getMember, member, errors, loading } = useMembers();
const { universities, getUniversities } = useUniversities();

const user = ref(null);

onMounted(() => {
    if (localStorage.user) {
        user.value = JSON.parse(localStorage.user);
    } else {
        router.push({
            name: "account",
        });
    }
    getMember(user.value.id);
    getUniversities();
});

const saveMember = async () => {
    let formData = new FormData();
    formData.append("firstname", member.value.firstname);
    formData.append("lastname", member.value.lastname);
    formData.append("email", member.value.email);
    formData.append("cv_path", member.value.cv_path);
    formData.append("avatar", member.value.avatar);
    formData.append("biography", member.value.biography);
    formData.append("university_id", member.value.university_id);
    formData.append("field_research", member.value.field_research);
    formData.append("phone_number", member.value.phone_number);
    formData.append("type", member.value.type);
    formData.append("researchgate_account", member.value.researchgate_account);
    formData.append("_method", "PUT");

    await updateMember(formData);
    if (errors.value == "") {
        router.push({
            name: "account",
            params: {
                name: user.value.firstname.toLowerCase(),
                id: user.value.id,
            },
        });
    }
};

const avatar = ref(null);
const handelAvatarObject = () => {
    member.value.avatar = avatar.value.files[0];
};
const cv = ref(null);
const handelCvObject = () => {
    member.value.cv_path = cv.value.files[0];
};
</script>

<template>
    <div class="w-full xl:mt-0 mt-[74px] relative h-auto xl:p-4">
        <div class="w-full z-0 p-4">
            <div
                class="px-8 py-5 bg-white shadow-lg flex w-full justify-between"
            >
                <h1 class="text-4xl text-gray-700 font-bold capitalize">
                    Account Setting
                </h1>
            </div>

            <section class="p-6 mx-auto bg-white shadow-md w-full">
                <Error v-if="errors != ''">{{ errors }}</Error>
                <h2 class="text-md font-light text-gray-700">Edit a member</h2>
                <form
                    @submit.prevent="saveMember()"
                    id="memberform"
                    enctype="multipart/form-data"
                >
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div class="">
                            <label class="text-gray-700 dark:text-gray-200"
                                >Firstname</label
                            >
                            <input
                                required
                                v-model="member.firstname"
                                type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                        <div class="">
                            <label class="text-gray-700 dark:text-gray-200"
                                >Lastname</label
                            >
                            <input
                                required
                                v-model="member.lastname"
                                type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                        <div class="col-span-2">
                            <label class="text-gray-700 dark:text-gray-200"
                                >Email</label
                            >
                            <input
                                required
                                v-model="member.email"
                                type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                        <div class="col-span-2">
                            <label class="text-gray-700 dark:text-gray-200"
                                >University</label
                            >
                            <select
                                v-model="member.university_id"
                                name=""
                                id=""
                                class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                            >
                                <option
                                    v-for="university in universities"
                                    :key="university.id"
                                    :value="university.id"
                                >
                                    {{ university.name }}
                                </option>
                            </select>
                        </div>
                        <div class="">
                            <label class="text-gray-700 dark:text-gray-200"
                                >Field Research</label
                            >
                            <input
                                required
                                v-model="member.field_research"
                                type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div class="">
                            <label class="text-gray-700 dark:text-gray-200"
                                >Phone Number</label
                            >
                            <input
                                required
                                v-model="member.phone_number"
                                type="tel"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>
                        <div class="">
                            <label class="text-gray-700 dark:text-gray-200"
                                >ResearchGate Account</label
                            >
                            <input
                                v-model="member.researchgate_account"
                                type="url"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div class="">
                            <label
                                class="text-gray-700 dark:text-gray-200"
                                for="fr"
                                >Avatar</label
                            >
                            <input
                                ref="avatar"
                                @change="handelAvatarObject()"
                                type="file"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div class="">
                            <label
                                class="text-gray-700 dark:text-gray-200"
                                for="fr"
                                >Cv</label
                            >
                            <input
                                ref="cv"
                                @change="handelCvObject()"
                                type="file"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                        </div>

                        <div class="col-span-2">
                            <label
                                class="text-gray-700 dark:text-gray-200"
                                for="pt"
                                >Biagraphy</label
                            >
                            <textarea
                                required
                                type="text"
                                v-model="member.biography"
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
</template>
