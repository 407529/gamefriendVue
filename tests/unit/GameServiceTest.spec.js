import GameService from "../../src/service/game-service";


describe("GameService",()=>{
    it("Get all games service",()=>{
        return GameService.getAllGames().then(response => {
            expect(response[0].name).toEqual('League of legends');
            expect(response[1].name).toEqual('Call of duty modern warfare');
        });
    })
})