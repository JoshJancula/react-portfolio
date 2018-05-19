import axios from "axios";
export default {
    sendEmail: function(message) {
        return axios.post('/api/email/', { message: message })
    }
};