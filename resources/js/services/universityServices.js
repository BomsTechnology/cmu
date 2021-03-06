import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js"

export default function useUniversities() {

    const universities = ref([]);
    const university = ref([]);
    const errors = ref('');
    const loading = ref(0);

    const getUniversities = async () => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/universities',  {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        universities.value = response.data.data;

        loading.value = 2;
        // console.log(universities.value);
    };

    const getUniversity = async (id) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/universities/' + id, {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        loading.value = 0;
        university.value = response.data.data;
    };

    const createUniversity = async (data) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.post('/api/universities', data, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            router.push({ name: 'admin.university.index' });
        } catch (e) {
            if(e.response.status == 422){
            loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateUniversity = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.put('/api/universities/' + id, university.value, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            router.push({ name: 'admin.university.index' });
        } catch (e) {
            loading.value = 0;
            if(e.response.status == 422){
                for(const key in e.response.data.errors)
                errors.value += e.response.data.errors[key][0] + '\t\n';
            }
        }
        
    };

    const destroyUniversity = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.delete('/api/universities/' + id, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
    } catch (e) {
        loading.value = 0;
        if (e.response.status == '500') {
            errors.value = 'Impossible de supprimer ce pays';
        }
    }
    };

    return {
        universities,
        university,
        errors,
        loading,
        getUniversities,
        getUniversity,
        createUniversity,
        updateUniversity,
        destroyUniversity,
    };
} 