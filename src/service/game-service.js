import axios from 'axios';

const API_URL = 'http://localhost:9000/gamefriend/api/games/';

class GameService {
    getAllGames()
    {
        return axios.get(API_URL+'all').then(response => {
            return response.data;
        });
    }
    getGameById(id)
    {
        return axios.get(API_URL+id).then(response=>{
            return response.data;
        });
    }
    saveGame(game)
    {
        return axios.post(API_URL+'save',{
            name:game.name,
            imageUrl:game.imageUrl,
            gameCategory: game.gameCategory
        });
    }
    getGamesByGameCategory(game_category)
    {
        return axios.get(API_URL+game_category).then(response =>
        {
           return response.data;
        });
    }
}
export default new GameService();
