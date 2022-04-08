import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js"

export default function useAwards() {

    const awards = ref([]);
    const award = ref([]);
    const errors = ref('');
    const loading = ref(0);

    const getAwards = async () => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/awards',  {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        awards.value = response.data.data;

        loading.value = 2;
        // console.log(awards.value);
    };

    const getAwardsFront = async (year) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/awards-front/'+ year,  {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        awards.value = response.data.data;

        loading.value = 2;
    };

    const getAward = async (id) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/awards/' + id, {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        loading.value = 0;
        award.value = response.data.data;
    };

    const createAward = async (data) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.post('/api/awards', data, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            router.push({ name: 'admin.awards.index' });
        } catch (e) {
            if(e.response.status == 422){
            loading.value = 0;
                for (const key in e.response.data.errors)
                    errors.value += e.response.data.errors[key][0] + "\n";
            }
        }
    };

    const updateAward = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.put('/api/awards/' + id, award.value, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
            router.push({ name: 'admin.awards.index' });
        } catch (e) {
            loading.value = 0;
            if(e.response.status == 422){
                for(const key in e.response.data.errors)
                errors.value += e.response.data.errors[key][0] + '\t\n';
            }
        }
        
    };

    const destroyAward = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.delete('/api/awards/' + id, {
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
        awards,
        award,
        errors,
        loading,
        getAwardsFront,
        getAwards,
        getAward,
        createAward,
        updateAward,
        destroyAward,
    };
} 