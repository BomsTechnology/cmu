<script setup>
import useActivities from "../services/activityServices.js";
import useAwards from "../services/awardsServices.js";
import useJobOffers from "../services/jobOfferServices.js";
import usePosts from "../services/postServices.js";
import router from "../router/index.js";
import { onMounted, ref } from "vue";
const { activity, activities, getActivity, getOtherActivities } =
    useActivities();
const { award, awards, getAward, getOtherAwards } = useAwards();
const { jobOffers, jobOffer, getJobOffer, getOtherJobOffers } = useJobOffers();
const { post, posts, getPost, getOtherPosts } = usePosts();
const props = defineProps({
    type: String,
    id: String,
});
const currentPost = ref(null);
const loading = ref(0);
const getCurrentPost = async () => {
    loading.value = 1;
    if (props.type == "activity") {
        await getActivity(props.id);
        await getOtherActivities(props.id);
        await getOtherAwards();
        await getOtherJobOffers();
        await getOtherPosts();
        currentPost.value = activity.value;
    } else if (props.type == "post") {
        await getPost(props.id);
        await getOtherPosts(props.id);
        await getOtherActivities();
        await getOtherAwards();
        await getOtherJobOffers();
        currentPost.value = post.value;
    } else if (props.type == "job") {
        await getJobOffer(props.id);
        await getOtherJobOffers(props.id);
        await getOtherActivities();
        await getOtherAwards();
        await getOtherPosts();
        console.log(jobOffer.value);
        currentPost.value = jobOffer.value;
    } else if (props.type == "award") {
        await getAward(props.id);
        await getOtherAwards(props.id);
        await getOtherActivities();
        await getOtherJobOffers();
        await getOtherPosts();
        currentPost.value = award.value;
    } else {
        router.push({ name: "home" });
    }
    loading.value = 0;
};
onMounted(getCurrentPost());
</script>

<template>
    <div v-if="loading == 1" class="flex h-[500px] justify-center items-center">
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
    <div
        v-else
        class="my-4 md:mx-16 flex md:space-x-4 md:space-y-0 space-y-4 md:flex-row flex-col"
    >
        <div v-if="currentPost" class="md:w-[70%]">
            <div>
                <div
                    v-if="currentPost.image"
                    class="h-96 w-full overflow-hidden"
                >
                    <img
                        :src="currentPost.image"
                        class="w-full h-full object-cover"
                        alt=""
                    />
                </div>
                <div class="py-2 px-4">
                    <h1 class="text-4xl text-gray-700 font-bold uppercase">
                        {{ currentPost.title }}
                    </h1>
                    <p class="py-4">
                        <span v-if="currentPost.content">{{
                            currentPost.content
                        }}</span>
                        <span v-else>{{ currentPost.description }}</span>
                    </p>
                </div>
            </div>
            <div v-if="props.type != 'award'" class="space-y-8 w-full">
                <div class="border-0 border-b-2 p-4">
                    <h1 class="font-extrabold text-2xl text-gray-700">
                        YOU MIGHT LIKE
                    </h1>
                </div>
                <div v-if="props.type == 'activity'" class="md:flex space-x-2">
                    <div
                        v-if="activities.length != 0"
                        class="w-full md:h-28 md:flex shadow border"
                        v-for="activity in activities"
                        :key="activity.id"
                    >
                        <img
                            :src="activity.image"
                            class="md:w-32 md:h-full object-cover w-full h-24"
                            alt=""
                        />
                        <div class="p-2 text-center md:text-left w-full">
                            <h3 class="text-md">{{ activity.title }}</h3>
                            <p class="text-sm font-light mt-2">
                                {{ activity.content.substring(0, 19) + "..." }}
                            </p>
                            <a
                                href="#"
                                class="text-sm text-blue-600 mt-2 hover:underline"
                                >Read More</a
                            >
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
                        <p class="text-center w-full text-lg py-8">
                            No Activity
                        </p>
                    </div>
                </div>
                <div v-if="props.type == 'job'" class="md:flex space-x-2">
                    <div
                        v-if="jobOffers.length != 0"
                        class="w-full md:h-28 md:flex shadow border"
                        v-for="jobOffer in jobOffers"
                        :key="jobOffer.id"
                    >
                        <div class="md:w-32 md:h-full p-2 w-full h-24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="md:h-full md:w-full h-32 mx-auto text-gray-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                    clip-rule="evenodd"
                                />
                                <path
                                    d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                                />
                            </svg>
                        </div>
                        <div class="p-2 text-center md:text-left w-full">
                            <h3 class="text-md">{{ jobOffer.title }}</h3>
                            <p class="text-sm font-light mt-2">
                                {{ jobOffer.content.substring(0, 19) + "..." }}
                            </p>
                            <a
                                href="#"
                                class="text-sm text-blue-600 mt-2 hover:underline"
                                >Read More</a
                            >
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
                        <p class="text-center w-full text-lg py-8">
                            No Job Offers
                        </p>
                    </div>
                </div>
                <div v-if="props.type == 'post'" class="md:flex space-x-2">
                    <div
                        v-if="posts.length != 0"
                        class="w-full md:h-28 md:flex shadow border"
                        v-for="post in posts"
                        :key="post.id"
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
                            <a
                                href="#"
                                class="text-sm text-blue-600 mt-2 hover:underline"
                                >Read More</a
                            >
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
        <div class="md:w-[30%] space-y-4">
            <div
                class="m-2 px-4 space-y-2"
                v-if="props.type != 'activity' && activities.length != 0"
            >
                <div class="border-0 border-b-2 p-4">
                    <h1 class="font-extrabold text-2xl text-gray-700">
                        News & Events
                    </h1>
                </div>

                <div
                    v-if="activities.length != 0"
                    class="w-full md:h-28 md:flex shadow border"
                    v-for="activity in activities"
                    :key="activity.id"
                >
                    <img
                        :src="activity.image"
                        class="md:w-32 md:h-full object-cover w-full h-24"
                        alt=""
                    />
                    <div class="p-2 text-center md:text-left w-full">
                        <h3 class="text-md">{{ activity.title }}</h3>
                        <p class="text-sm font-light mt-2">
                            {{ activity.content.substring(0, 19) + "..." }}
                        </p>
                        <a
                            href="#"
                            class="text-sm text-blue-600 mt-2 hover:underline"
                            >Read More</a
                        >
                    </div>
                    <div class="px-1 h-full bg-gray-400 w-1 md:block hidden">
                        &nbsp;
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
                    <p class="text-center text-lg py-8">No Activity</p>
                </div>
            </div>
            <div
                class="m-2 px-4 space-y-2"
                v-if="props.type != 'job' && jobOffers.length != 0"
            >
                <div class="border-0 border-b-2 p-4">
                    <h1 class="font-extrabold text-2xl text-gray-700">
                        Job Offers
                    </h1>
                </div>

                <div
                    v-if="jobOffers.length != 0"
                    class="w-full md:h-28 md:flex shadow border"
                    v-for="jobOffer in jobOffers"
                    :key="jobOffer.id"
                >
                    <div class="md:w-32 md:h-full p-2 w-full h-24">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="md:h-full md:w-full h-32 mx-auto text-gray-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            />
                            <path
                                d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                            />
                        </svg>
                    </div>
                    <div class="p-2 text-center md:text-left w-full">
                        <h3 class="text-md">{{ jobOffer.title }}</h3>
                        <p class="text-sm font-light mt-2">
                            {{ jobOffer.content.substring(0, 19) + "..." }}
                        </p>
                        <a
                            href="#"
                            class="text-sm text-blue-600 mt-2 hover:underline"
                            >Read More</a
                        >
                    </div>
                    <div class="px-1 h-full bg-gray-400 w-1 md:block hidden">
                        &nbsp;
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
                    <p class="text-center text-lg py-8">No Job Offer</p>
                </div>
            </div>
            <div
                class="m-2 px-4 space-y-2"
                v-if="props.type != 'post' && posts.length != 0"
            >
                <div class="border-0 border-b-2 p-4">
                    <h1 class="font-extrabold text-2xl text-gray-700">Posts</h1>
                </div>

                <div
                    v-if="posts.length != 0"
                    class="w-full md:h-28 md:flex shadow border"
                    v-for="post in posts"
                    :key="post.id"
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
                        <a
                            href="#"
                            class="text-sm text-blue-600 mt-2 hover:underline"
                            >Read More</a
                        >
                    </div>
                    <div class="px-1 h-full bg-gray-400 w-1 md:block hidden">
                        &nbsp;
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
                    <p class="text-center text-lg py-8">No Posts</p>
                </div>
            </div>
        </div>
    </div>
</template>
