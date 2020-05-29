import Games from "../../src/components/game/Games";
import {mount} from '@vue/test-utils'
import GameService from "../../src/service/game-service";
import httpAdapter from 'axios/lib/adapters/http'
import axios from  'axios';

const gamesVueComponent = mount(Games,{GameService:GameService,httpAdapter,axios});
gamesVueComponent.vm.$forceUpdate();

describe("games.vue",()=>{
    describe("gameVueComponent.vue",()=>{
        it("External game name League of Legends",done =>{
            setTimeout(async ()=>{
                await gamesVueComponent.vm.$forceUpdate();
                expect(gamesVueComponent.text()).toContain("League of legends");
                done();
            },4999)
        }),
        it('External game name Call of Duty', done =>{
            setTimeout(async ()=>{
                await gamesVueComponent.vm.$forceUpdate();
                expect(gamesVueComponent.text()).toContain("Call of duty");
                done();
            },4999)
        }),
        it('Expect external game category League of Legends',done => {
            setTimeout( ()=>{
                gamesVueComponent.vm.$forceUpdate();
                expect(gamesVueComponent.text()).toContain("mmo");
                done();
            },4999)
        }),
        it('Expect external game category Call of Duty',done => {
            setTimeout (()=>{
                gamesVueComponent.vm.$forceUpdate();
                expect(gamesVueComponent.text()).toContain("fps");
                done();
            },4999)
        })
    })
})
