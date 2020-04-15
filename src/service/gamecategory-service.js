import axios from 'axios';

const API_URL = 'http://localhost:9000/gamefriend/api/game_categories/';

class GameCategoryService
{
    getAllGameCategories()
    {
        return axios.get(API_URL+'all').then(response => {
            return response.data;
        });
    }
}
export default new GameCategoryService();
