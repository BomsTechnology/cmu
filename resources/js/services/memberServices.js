import axios from "axios";
import { ref } from "vue";
import router from "../router/index.js"

export default function useMembers() {

    const members = ref([]);
    const member = ref([]);
    const errors = ref('');
    const loading = ref(0);


    const getMembers = async () => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/members/',  {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        members.value = response.data.data;

        loading.value = 2;
    };

    const getMembersUser = async (id) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/members-user/' + id,  {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        members.value = response.data.data;

        loading.value = 2;
        
    };

    const getMember = async (id) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/members/' + id, {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        loading.value = 0;
        member.value = response.data.data;
    };

    const getMember2 = async (id) => {
        errors.value = '';
        loading.value = 1;
        let response = await axios.get('/api/members2/' + id, {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        });
        loading.value = 0;
        member.value = response.data.data;
    };

    const createMember = async (data) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.post('/api/members', data, {
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

    const updateMember = async (data) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.post('/api/members/' + member.value.id, data, {
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

    const destroyMember = async (id) => {
        errors.value = '';
        try {
            loading.value = 1;
            await axios.delete('/api/members/' + id, {
                headers:{
                    'Authorization': `Bearer ${localStorage.token}`
                }
            });
            loading.value = 2;
    } catch (e) {
        loading.value = 0;
        if (e.response.status == '500') {
            errors.value = 'Impossible de supprimer ce member';
        }
    }
    };

    return {
        members,
        member,
        errors,
        loading,
        getMembers,
        getMember,
        createMember,
        updateMember,
        destroyMember,
        getMember2,
        getMembers,
    };
} 