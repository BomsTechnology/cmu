import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js";

export default function useJobOffers() {
    const jobOffers = ref([]);
    const jobOffer = ref([]);
    const errors = ref("");
    const loading = ref(0);

    const getJobOffers = async () => {
        errors.value = "";
        loading.value = 1;
        let response = await axios.get("/api/jobOffers", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        jobOffers.value = response.data.data;

        loading.value = 2;
        // console.log(jobOffers.value);
    };

    const getOtherJobOffers = async (id = 0) => {
        errors.value = "";
        loading.value = 1;
        let response = await axios.get("/api/jobOffers-others/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        jobOffers.value = response.data.data;

        loading.value = 2;
        // console.log(jobOffers.value);
    };

    const getJobOffer = async (id) => {
        errors.value = "";
        loading.value = 1;
        let response = await axios.get("/api/jobOffers/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });
        loading.value = 0;
        jobOffer.value = response.data.data;
    };

    const createJobOffer = async (data) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.post("/api/jobOffers", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
            router.push({ name: "admin.job.index" });
        } catch (e) {
            if (e.response.status == 422) {
                loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateJobOffer = async (id) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.put("/api/jobOffers/" + id, jobOffer.value, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
            router.push({ name: "admin.job.index" });
        } catch (e) {
            loading.value = 0;
            if (e.response.status == 422) {
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\t\n";
            }
        }
    };

    const destroyJobOffer = async (id) => {
        errors.value = "";
        try {
            loading.value = 1;
            await axios.delete("/api/jobOffers/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if (e.response.status == "500") {
                errors.value = "Impossible de supprimer ce pays";
            }
        }
    };

    return {
        jobOffers,
        jobOffer,
        errors,
        loading,
        getOtherJobOffers,
        getJobOffers,
        getJobOffer,
        createJobOffer,
        updateJobOffer,
        destroyJobOffer,
    };
}
