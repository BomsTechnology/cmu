import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";

export default function usePosts() {
    const posts = ref([]);
    const post = ref([]);
    const errors = ref("");
    const loading = ref(0);

    const getPosts = async () => {
        errors.value = "";
        loading.value = 1;
        let response = await axios.get("/api/posts/", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        posts.value = response.data.data;

        loading.value = 2;
    };

    const getPostsHome = async () => {
        errors.value = "";
        loading.value = 1;
        let response = await axios.get("/api/posts-home/", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        posts.value = response.data.data;

        loading.value = 2;
    };

    const getOtherPosts = async (id = 0) => {
        errors.value = "";
        loading.value = 1;
        let response = await axios.get("/api/posts-others/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        posts.value = response.data.data;

        loading.value = 2;
    };

    const getPostsUser = async (id) => {
        errors.value = "";
        loading.value = 1;
        let response = await axios.get("/api/posts-user/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        posts.value = response.data.data;

        loading.value = 2;
    };

    const getPost = async (id) => {
        errors.value = "";
        loading.value = 1;
        let response = await axios.get("/api/posts/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        post.value = response.data.data;
    };

    const getPost2 = async (id) => {
        errors.value = "";
        loading.value = 1;
        let response = await axios.get("/api/posts2/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        post.value = response.data.data;
    };

    const createPost = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.post("/api/posts", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            loading.value = 2;
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updatePost = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.post("/api/posts/" + post.value.id, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyPost = async (id) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.delete("/api/posts/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de supprimer ce post";
            }
        }
    };

    return {
        posts,
        post,
        errors,
        loading,
        getOtherPosts,
        getPosts,
        getPostsHome,
        getPost,
        createPost,
        updatePost,
        destroyPost,
        getPost2,
        getPosts,
        getPostsUser,
    };
}
