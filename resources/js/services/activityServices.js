import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";

export default function useActivities() {
    const activities = ref([]);
    const activity = ref([]);
    const errors = ref("");
    const loading = ref(0);
    const news = ref([]);
    const events = ref([]);

    const getActivities = async () => {
        errors.value = "";
        loading.value = 1;
        let response = await axios.get("/api/activities/", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        activities.value = response.data.data;

        loading.value = 2;
    };

    const getActivitiesHome = async () => {
        errors.value = "";
        loading.value = 1;
        let response = await axios.get("/api/activities-home/", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        activities.value = response.data.data;

        loading.value = 2;
    };

    const getOtherActivities = async (id = 0) => {
        errors.value = "";
        loading.value = 1;
        let response = await axios.get("/api/activities-others/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        activities.value = response.data.data;

        loading.value = 2;
    };

    const getActivitiesFront = async (year) => {
        errors.value = "";
        loading.value = 1;
        let response = await axios.get("/api/activities-front/" + year, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        activities.value = response.data.data;

        news.value = activities.value.filter((activity) => {
            return activity.type == "news";
        });

        events.value = activities.value.filter((activity) => {
            return activity.type == "events";
        });

        loading.value = 2;
    };

    const getActivity = async (id) => {
        errors.value = "";
        loading.value = 1;
        let response = await axios.get("/api/activities/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        activity.value = response.data.data;
    };

    const getActivity2 = async (id) => {
        errors.value = "";
        loading.value = 1;
        let response = await axios.get("/api/activities2/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        activity.value = response.data.data;
    };

    const createActivity = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.post("/api/activities", data, {
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

    const updateActivity = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.post("/api/activities/" + activity.value.id, data, {
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

    const destroyActivity = async (id) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.delete("/api/activities/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de supprimer ce activity";
            }
        }
    };

    return {
        activities,
        activity,
        errors,
        loading,
        news,
        events,
        getOtherActivities,
        getActivitiesHome,
        getActivities,
        getActivitiesFront,
        getActivity,
        createActivity,
        updateActivity,
        destroyActivity,
        getActivity2,
        getActivities,
    };
}
