import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js"

export default function useTheses() {

    const theses = ref([]);
    const these = ref([]);
    const errors = ref('');
    const loading = ref(0);


    const getTheses = async () => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/theses/',  {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        theses.value = response.data.data;

        loading.value = 2;
    };

    const getThesesUser = async (id) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/theses-user/' + id,  {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        these.value = response.data.data;

        loading.value = 2;
        
    };

    const getThese = async (id) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/theses/' + id, {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        loading.value = 0;
        these.value = response.data.data;
    };

    const getThese2 = async (id) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/theses2/' + id, {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        loading.value = 0;
        these.value = response.data.data;
    };

    const createThese = async (data) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.post('/api/theses', data, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`,
                    'Content-Type' : 'multipart/form-data',
                }
            });
            loading.value = 2;
        } catch (e) {
            if(e.response.status == 422){
            loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateThese = async (data) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.post('/api/theses/' + these.value.id, data, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`,
                    'Content-Type' : 'multipart/form-data',
                }
            });
            loading.value = 2;
        } catch (e) {
            loading.value = 0;
            if(e.response.status == 422){
                for(const key in e.response.data.errors)
                errors.value += e.response.data.errors[key][0] + '\t\n';
            }
        }
        
    };

    const destroyThese = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.delete('/api/theses/' + id, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
    } catch (e) {
        loading.value = 0;
        if (e.response.status == '500') {
            errors.value = 'Impossible de supprimer ce these';
        }
    }
    };

    return {
        theses,
        these,
        errors,
        loading,
        getTheses,
        getThese,
        createThese,
        updateThese,
        destroyThese,
        getThese2,
        getTheses,
        getThesesUser,
    };
} 