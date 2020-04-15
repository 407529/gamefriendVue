import axios from 'axios';

const API_URL = 'http://localhost:9000/gamefriend/api/roles/';

class RoleService {
    getAllRoles() {
        return axios.get(API_URL+'all').then(response => {
            return response.data
        });
    }
}
export default new RoleService();
