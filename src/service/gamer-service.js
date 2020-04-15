import axios from 'axios';
import authHeader from "@/service/auth-header";

const API_URL = 'http://localhost:9000/gamefriend/api/gamers/';

class GamerService {
    getGamerById(id)
    {
        return axios.get(API_URL+id,{headers:authHeader()}).then(response => {
           return response.data;
        });
    }
    getGamersByGameId(id) {
        return axios.get(API_URL + 'games/' + id, {headers: authHeader()}).then(response => {
            return response.data;
        });
    }
    getGamersByGameName(name)
    {
        return axios.get(API_URL + 'games/name/' + name, {headers: authHeader()}).then(response => {
            return response.data;
        });
    }
    getGamerByGameCategory(game_category)
    {
        return axios.get(API_URL+'games/category/'+game_category,{headers:authHeader()}).then(response =>{
            return response.data;
        });
    }
    getGamerFriendsByGamerId(gamerId)
    {
        return axios.get(API_URL+'friends/'+gamerId,{headers:authHeader()}).then(response =>{
            return response.data
        });
    }
}
export default new GamerService();


