<script setup>
import SubHeader from "../components/SubHeader.vue";
import { reactive, ref, onMounted, computed } from "vue";
import Error from "../components/Error.vue";
import useUniversities from "../services/universityServices.js";
import SucessModal from "../components/SucessModal.vue";

const { universities, getUniversities } = useUniversities();
const loading = ref(0);
const errors = ref("");
const openModal = ref(false);
onMounted(getUniversities());
const request = reactive({
    firstname: "",
    lastname: "",
    email: "",
    field_research: "",
    biography: "",
    cv_path: "",
    phone_number: "",
    researchgate_account: "",
    university: "",
    theses_year: "",
    other_university: "",
});
const closeModal = () => {
    openModal.value = false;
};
const storeRequest = async () => {
    let formData = new FormData();
    formData.append("firstname", request.firstname);
    formData.append("lastname", request.lastname);
    formData.append("email", request.email);
    formData.append("cv_path", request.cv_path);
    formData.append("biography", request.biography);
    formData.append(
        "university",
        request.university == "other"
            ? request.other_university
            : request.university
    );
    formData.append("field_research", request.field_research);
    formData.append("phone_number", request.phone_number);
    formData.append("theses_year", request.theses_year);
    formData.append("researchgate_account", request.researchgate_account);

    errors.value = "";
    try {
        loading.value = 1;
        await axios.post("/api/join", formData);
        loading.value = 2;
        openModal.value = true;
        request.firstname = "";
        request.lastname = "";
        request.email = "";
        request.field_research = "";
        request.biography = "";
        request.cv_path = "";
        request.phone_number = "";
        request.researchgate_account = "";
        request.university = "";
        request.theses_year = "";
    } catch (e) {
        if (e.response.status == 422) {
            loading.value = 0;
            for (const key in e.response.data.errors)
                errors.value += e.response.data.errors[key][0] + "\n";
        }
    }
};

const cv = ref(null);
const handelCvObject = () => {
    request.cv_path = cv.value.files[0];
};
const showOtherUniversity = computed(() =>
    request.university == "other" ? true : false
);
</script>

<template>
    <SubHeader :title="'Join'" />
    <SucessModal :open="openModal" @close="closeModal()" />
    <section
        class="max-w-4xl my-16 p-6 mx-auto bg-white rounded-md shadow-lg dark:bg-gray-800"
    >
        <Error v-if="errors != ''">{{ errors }}</Error>
        <form
            @submit.prevent="storeRequest()"
            id="requestform"
            enctype="multipart/form-data"
        >
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div class="">
                    <label class="text-gray-700 dark:text-gray-200"
                        >Firstname</label
                    >
                    <input
                        required
                        v-model="request.firstname"
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
                        v-model="request.lastname"
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
                        v-model="request.email"
                        type="text"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>
                <div class="col-span-2">
                    <label class="text-gray-700 dark:text-gray-200"
                        >University</label
                    >
                    <select
                        v-model="request.university"
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
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="col-span-2" v-if="showOtherUniversity">
                    <label class="text-gray-700 dark:text-gray-200"
                        >Other University</label
                    >
                    <input
                        required
                        v-model="request.other_university"
                        type="text"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>
                <div class="">
                    <label class="text-gray-700 dark:text-gray-200"
                        >Theses Year</label
                    >
                    <input
                        v-model="request.theses_year"
                        type="date"
                        id=""
                        class="form-select block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                    />
                </div>
                <div class="">
                    <label class="text-gray-700 dark:text-gray-200"
                        >Field Research</label
                    >
                    <input
                        required
                        v-model="request.field_research"
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
                        v-model="request.phone_number"
                        type="tel"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>
                <div class="">
                    <label class="text-gray-700 dark:text-gray-200"
                        >ResearchGate Account</label
                    >
                    <input
                        v-model="request.researchgate_account"
                        type="url"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>

                <div class="col-span-2">
                    <label class="text-gray-700 dark:text-gray-200" for="fr"
                        >Cv</label
                    >
                    <input
                        ref="cv"
                        required
                        @change="handelCvObject()"
                        type="file"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>

                <div class="col-span-2">
                    <label class="text-gray-700 dark:text-gray-200" for="pt"
                        >Biagraphy</label
                    >
                    <textarea
                        required
                        type="text"
                        v-model="request.biography"
                        id="pt"
                        class="block w-full px-4 py-2 h-32 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:ring-blue-600 focus:border-blue-600 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    >
                    </textarea>
                </div>
            </div>

            <div class="flex justify-center mt-6">
                <button
                    v-if="loading == 0"
                    type="submit"
                    class="px-6 py-2 w-full leading-5 bg-blue-600 text-white rounded blue-600 focus:outline-none"
                >
                    Save
                </button>
                <button
                    v-if="loading == 1"
                    type="submit"
                    disabled
                    class="px-6 py-2 w-full flex justify-center leading-5 text-white rounded bg-blue-300 focus:outline-none"
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
                    <span>Save</span>
                </button>
            </div>
        </form>
    </section>
</template>
