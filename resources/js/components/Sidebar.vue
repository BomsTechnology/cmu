<template>
    <div class="min-h-screen">
        <div
            class="rounded-r bg-gray-800 xl:hidden flex fixed xl:relative justify-between w-full p-6 items-center z-40"
        >
            <div class="xl:flex hidden justify-center items-center space-x-3">
                <p class="text-2xl leading-6 text-white">CMU</p>
            </div>
            <div class="flex justify-center items-center">
                <button
                    v-if="!open.menu"
                    @click="open.menu = true"
                    class="focus:outline-none focus:ring-2"
                >
                    <MenuIcon class="w-6 h-6 text-white" />
                </button>
                <button
                    v-if="open.menu"
                    @click="open.menu = false"
                    class="focus:outline-none focus:ring-2"
                >
                    <XIcon class="w-6 h-6 text-white" />
                </button>
            </div>
        </div>
        <div
            v-if="open.menu"
            class="xl:rounded-r xl:mt-0 mt-[74px] transform xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start h-full w-full sm:w-64 bg-gray-800 flex-col z-30"
        >
            <div
                class="hidden xl:flex justify-center p-6 items-center space-x-3"
            >
                <p class="text-3xl leading-6 text-white">CMU</p>
            </div>
            <div
                class="mt-6 flex flex-col justify-start items-center pl-4 w-full border-gray-600 border-b space-y-3 pb-5"
            >
                <router-link
                    :to="{ name: 'admin.dash' }"
                    class="flex jusitfy-start items-center space-x-6 w-full focus:outline-none focus:text-blue-600 text-white rounded"
                >
                    <HomeIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Dashboard</p>
                </router-link>
                <button
                    class="flex jusitfy-start items-center w-full space-x-6 focus:outline-none text-white focus:text-blue-600 rounded"
                >
                    <NewspaperIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Member Request</p>
                </button>
            </div>
            <div
                class="flex flex-col justify-start items-center px-4 border-b border-gray-600 w-full"
            >
                <button
                    @click="open.article = !open.article"
                    class="focus:outline-none focus:text-blue-600 text-left text-white flex justify-between items-center w-full py-2 space-x-14"
                >
                    <p
                        class="text-base leading-4 flex jusitfy-start items-center w-full"
                    >
                        <UserGroupIcon class="w-6 h-6 mr-6" />
                        Members
                    </p>

                    <ChevronDownIcon v-if="!open.article" class="w-10 h-10" />
                    <ChevronUpIcon v-if="open.article" class="w-10 h-10" />
                </button>
                <div
                    v-if="open.article"
                    class="flex justify-start flex-col w-full md:w-auto items-start pb-1"
                >
                    <router-link
                        :to="{ name: 'admin.member.index' }"
                        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                    >
                        <TableIcon class="w-6 h-6" />
                        <p class="text-base leading-4">All Members</p>
                    </router-link>
                    <router-link
                        :to="{ name: 'admin.member.create' }"
                        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                    >
                        <PlusCircleIcon class="w-6 h-6" />
                        <p class="text-base leading-4">Add Member</p>
                    </router-link>
                </div>
            </div>
            <div
                class="flex flex-col justify-start items-center px-4 border-b border-gray-600 w-full"
            >
                <button
                    @click="open.post = !open.post"
                    class="focus:outline-none focus:text-blue-600 text-left text-white flex justify-between items-center w-full py-2 space-x-14"
                >
                    <p
                        class="text-base leading-4 flex jusitfy-start items-center w-full"
                    >
                        <CollectionIcon class="w-6 h-6 mr-6" />
                        Post
                    </p>

                    <ChevronDownIcon v-if="!open.post" class="w-10 h-10" />
                    <ChevronUpIcon v-if="open.post" class="w-10 h-10" />
                </button>
                <div
                    v-if="open.post"
                    class="flex justify-start flex-col w-full md:w-auto items-start pb-1"
                >
                    <router-link
                        :to="{ name: 'admin.post.index' }"
                        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                    >
                        <TableIcon class="w-6 h-6" />
                        <p class="text-base leading-4">All Post</p>
                    </router-link>
                    <router-link
                        :to="{ name: 'admin.post.create' }"
                        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                    >
                        <PlusCircleIcon class="w-6 h-6" />
                        <p class="text-base leading-4">Add Post</p>
                    </router-link>
                </div>
            </div>
            <div
                class="flex flex-col justify-start items-center px-4 border-b border-gray-600 w-full"
            >
                <button
                    @click="open.awards = !open.awards"
                    class="focus:outline-none focus:text-blue-600 text-left text-white flex justify-between items-center w-full py-2 space-x-14"
                >
                    <p
                        class="text-base leading-4 flex jusitfy-start items-center w-full"
                    >
                        <SortAscendingIcon class="w-6 h-6 mr-6" />
                        Awards
                    </p>

                    <ChevronDownIcon v-if="!open.awards" class="w-10 h-10" />
                    <ChevronUpIcon v-if="open.awards" class="w-10 h-10" />
                </button>
                <div
                    v-if="open.awards"
                    class="flex justify-start flex-col w-full md:w-auto items-start pb-1"
                >
                    <router-link
                        :to="{ name: 'admin.awards.index' }"
                        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                    >
                        <TableIcon class="w-6 h-6" />
                        <p class="text-base leading-4">All Awards</p>
                    </router-link>
                    <router-link
                        :to="{ name: 'admin.awards.create' }"
                        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                    >
                        <PlusCircleIcon class="w-6 h-6" />
                        <p class="text-base leading-4">Add Awards</p>
                    </router-link>
                </div>
            </div>
            <div
                class="flex flex-col justify-start items-center px-4 border-b border-gray-600 w-full"
            >
                <button
                    @click="open.theses = !open.theses"
                    class="focus:outline-none focus:text-blue-600 text-left text-white flex justify-between items-center w-full py-2 space-x-14"
                >
                    <p
                        class="text-base leading-4 flex jusitfy-start items-center w-full"
                    >
                        <AcademicCapIcon class="w-6 h-6 mr-6" />
                        Theses
                    </p>

                    <ChevronDownIcon v-if="!open.theses" class="w-10 h-10" />
                    <ChevronUpIcon v-if="open.theses" class="w-10 h-10" />
                </button>
                <div
                    v-if="open.theses"
                    class="flex justify-start flex-col w-full md:w-auto items-start pb-1"
                >
                    <router-link
                        :to="{ name: 'admin.theses.index' }"
                        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                    >
                        <TableIcon class="w-6 h-6" />
                        <p class="text-base leading-4">All Theses</p>
                    </router-link>
                    <router-link
                        :to="{ name: 'admin.theses.create' }"
                        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                    >
                        <PlusCircleIcon class="w-6 h-6" />
                        <p class="text-base leading-4">Add Theses</p>
                    </router-link>
                </div>
            </div>
            <!-- <div
                class="flex flex-col justify-start items-center px-4 border-b border-gray-600 w-full"
            >
                <button
                    @click="open.propau = !open.propau"
                    class="focus:outline-none focus:text-blue-600 text-left text-white flex justify-between items-center w-full py-2 space-x-14"
                >
                    <p
                        class="text-base leading-4 flex jusitfy-start items-center w-full"
                    >
                        <UserIcon class="w-6 h-6 mr-6" />
                        Student Supervise
                    </p>

                    <ChevronDownIcon v-if="!open.propau" class="w-10 h-10" />
                    <ChevronUpIcon v-if="open.propau" class="w-10 h-10" />
                </button>
                <div
                v-if="open.propau"
                class="flex justify-start flex-col w-full md:w-auto items-start pb-1"
            >
                <a href="/admin/post/propau"
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <TableIcon class="w-6 h-6" />
                    <p class="text-base leading-4">All Student</p>
                </a>
                <button
                    class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                    <PlusCircleIcon class="w-6 h-6" />
                    <p class="text-base leading-4">Add Student</p>
                </button>
            </div>
            </div> -->
            <div
                class="flex flex-col justify-start items-center px-4 border-b border-gray-600 w-full"
            >
                <button
                    @click="open.university = !open.university"
                    class="focus:outline-none focus:text-blue-600 text-left text-white flex justify-between items-center w-full py-2 space-x-14"
                >
                    <p
                        class="text-base leading-4 flex jusitfy-start items-center w-full"
                    >
                        <LibraryIcon class="w-6 h-6 mr-6" />
                        University
                    </p>

                    <ChevronDownIcon
                        v-if="!open.university"
                        class="w-10 h-10"
                    />
                    <ChevronUpIcon v-if="open.university" class="w-10 h-10" />
                </button>
                <div
                    v-if="open.university"
                    class="flex justify-start flex-col w-full md:w-auto items-start pb-1"
                >
                    <router-link
                        :to="{ name: 'admin.university.index' }"
                        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                    >
                        <TableIcon class="w-6 h-6" />
                        <p class="text-base leading-4">All Universities</p>
                    </router-link>
                    <router-link
                        :to="{ name: 'admin.university.create' }"
                        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                    >
                        <PlusCircleIcon class="w-6 h-6" />
                        <p class="text-base leading-4">Add Universities</p>
                    </router-link>
                </div>
            </div>
            <div
                class="flex flex-col justify-start items-center px-4 border-b border-gray-600 w-full"
            >
                <button
                    @click="open.job = !open.job"
                    class="focus:outline-none focus:text-blue-600 text-left text-white flex justify-between items-center w-full py-2 space-x-14"
                >
                    <p
                        class="text-base leading-4 flex jusitfy-start items-center w-full"
                    >
                        <BriefcaseIcon class="w-6 h-6 mr-6" />
                        Job Offer
                    </p>

                    <ChevronDownIcon v-if="!open.job" class="w-10 h-10" />
                    <ChevronUpIcon v-if="open.job" class="w-10 h-10" />
                </button>
                <div
                    v-if="open.job"
                    class="flex justify-start flex-col w-full md:w-auto items-start pb-1"
                >
                    <router-link
                        :to="{ name: 'admin.job.index' }"
                        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                    >
                        <TableIcon class="w-6 h-6" />
                        <p class="text-base leading-4">All Job</p>
                    </router-link>
                    <router-link
                        :to="{ name: 'admin.job.create' }"
                        class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                    >
                        <PlusCircleIcon class="w-6 h-6" />
                        <p class="text-base leading-4">Add Job</p>
                    </router-link>
                </div>
            </div>
            <div
                class="flex flex-col justify-between items-center h-full pb-6 w-full space-y-10"
            >
                <div
                    class="flex flex-col justify-start items-center px-4 border-b border-gray-600 w-full"
                >
                    <button
                        @click="open.announcement = !open.announcement"
                        class="focus:outline-none focus:text-blue-600 text-left text-white flex justify-between items-center w-full py-2 space-x-14"
                    >
                        <p
                            class="text-base leading-4 flex jusitfy-start items-center w-full"
                        >
                            <SpeakerphoneIcon class="w-6 h-6 mr-6" />
                            Activities
                        </p>

                        <ChevronDownIcon
                            v-if="!open.announcement"
                            class="w-10 h-10"
                        />
                        <ChevronUpIcon
                            v-if="open.announcement"
                            class="w-10 h-10"
                        />
                    </button>
                    <div
                        v-if="open.announcement"
                        class="flex justify-start flex-col w-full md:w-auto items-start pb-1"
                    >
                        <router-link
                            :to="{ name: 'admin.activity.index' }"
                            class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                        >
                            <TableIcon class="w-6 h-6" />
                            <p class="text-base leading-4">All Activities</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'admin.activity.create' }"
                            class="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                        >
                            <PlusCircleIcon class="w-6 h-6" />
                            <p class="text-base leading-4">Add Activities</p>
                        </router-link>
                    </div>
                </div>
                <div class="flex justify-between px-6 items-center w-full">
                    <div class="flex justify-center items-center space-x-2">
                        <div>
                            <img
                                v-if="user.value.avatar"
                                class="rounded-full"
                                :src="user.value.avatar"
                                alt="avatar"
                            />
                            <UserCircleIcon v-else class="h-8 w-8 text-white" />
                        </div>
                        <div class="flex justify-start flex-col items-start">
                            <p
                                class="cursor-pointer text-sm leading-5 text-white"
                            >
                                {{ user.value.firstname }}
                                {{ user.value.lastname }}
                            </p>
                            <p
                                class="cursor-pointer text-xs leading-3 text-gray-300"
                            >
                                {{ user.value.email }}
                            </p>
                        </div>
                    </div>
                    <div>
                        <CogIcon class="w-6 h-6 text-white" />
                        <LogoutIcon
                            v-if="loading == 0"
                            @click="logout()"
                            class="w-6 h-6 text-white cursor-pointer"
                        />
                        <svg
                            v-if="loading == 1"
                            class="animate-spin text-white mt-1 h-6 w-6 cursor-wait"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    XIcon,
    MenuIcon,
    HomeIcon,
    UserGroupIcon,
    NewspaperIcon,
    ChevronDownIcon,
    TableIcon,
    PlusCircleIcon,
    UserIcon,
    UserCircleIcon,
    OfficeBuildingIcon,
    ChevronUpIcon,
    AcademicCapIcon,
    SpeakerphoneIcon,
    LibraryIcon,
    TemplateIcon,
    CogIcon,
    SortAscendingIcon,
    ChartPieIcon,
    BriefcaseIcon,
    CollectionIcon,
    LogoutIcon,
} from "@heroicons/vue/solid";
import axios from "axios";
import { reactive, ref, onMounted } from "vue";
export default {
    components: {
        XIcon,
        MenuIcon,
        UserCircleIcon,
        HomeIcon,
        UserGroupIcon,
        NewspaperIcon,
        ChevronDownIcon,
        TableIcon,
        PlusCircleIcon,
        UserIcon,
        OfficeBuildingIcon,
        ChevronUpIcon,
        AcademicCapIcon,
        SpeakerphoneIcon,
        LibraryIcon,
        TemplateIcon,
        CogIcon,
        SortAscendingIcon,
        ChartPieIcon,
        BriefcaseIcon,
        CollectionIcon,
        LogoutIcon,
    },
    setup() {
        const user = reactive({});
        const verifAdmin = async () => {
            if (localStorage.token) {
                user.value = JSON.parse(localStorage.user);

                try {
                    let response = await axios.post(
                        "/api/verif-admin",
                        { id: user.value.id },
                        {
                            headers: {
                                Authorization: `Bearer ${localStorage.token}`,
                            },
                        }
                    );
                } catch (e) {
                    if (e.response.status == 401) {
                        location.href = "/admin";
                        window.localStorage.removeItem("token");
                        window.localStorage.removeItem("user");
                    }
                }
            } else {
                location.href = "/admin";
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
            }
        };
        onMounted(verifAdmin());
        const open = reactive({
            menu: true,
            article: false,
            propau: false,
            announcement: false,
            university: false,
            job: false,
            post: false,
            awards: false,
            theses: false,
        });
        const loading = ref(0);

        const logout = async () => {
            try {
                loading.value = 1;
                await axios.post(
                    "/api/logout",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.token}`,
                        },
                    }
                );
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
                loading.value = 2;
                location.href = "/";
            } catch (e) {
                loading.value = 0;
                if (e.response.status == 422) {
                    for (const key in e.response.data.errors)
                        errors.value += e.response.data.errors[key][0] + "\n";
                }
                console.log(errors.value);
            }
        };

        return {
            open,
            user,
            logout,
            loading,
        };
    },
};
</script>
