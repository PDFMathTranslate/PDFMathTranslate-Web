import axios from 'axios';

const apiClient = axios.create({
    baseURL: '/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    translate(params) {
        const formData = new FormData();
        for (const key in params) {
            if (params[key] !== null && params[key] !== undefined) {
                formData.append(key, params[key]);
            }
        }
        return apiClient.post('/translate', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
    },
    getStatus(taskId) {
        return apiClient.get(`/translate/${taskId}`);
    },
    cancelTranslation(taskId) {
        return apiClient.post(`/translate/${taskId}/stop`);
    },
    getConfig() {
        return apiClient.get('/config');
    },
    getHealth() {
        return apiClient.get('/status');
    },
    downloadTaskMono(taskId) {
        return apiClient.get(`/translate/${taskId}/download/mono`, { responseType: 'blob' });
    },
    downloadTaskDual(taskId) {
        return apiClient.get(`/translate/${taskId}/download/dual`, { responseType: 'blob' });
    },
    checkTaskExists(taskId) {
        return apiClient.get(`/translate/${taskId}`);
    }
};
