import Game from "../../src/components/game/Game";
import { mount } from '@vue/test-utils'

const game = {id:1,name:"League of legends",gameCategory:"MMO",description:"Its an battle arena game in which you need to battle other people to defeat the other people's bases.",imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FsoBH7j3Fr4I%2Fmaxresdefault.jpg&f=1&nofb=1"}
const gameVueComponent = mount(Game,{propsData:{game:game}})
describe("gameVueComponent.vue",()=>{
    it("Game name showed up",()=>{
        expect(gameVueComponent.text()).toContain("League of legends")
    }),
    it("Game category showed up",()=>{
      expect(gameVueComponent.text()).toContain("MMO")
    }),
    it("Description showed up",()=>{
       expect(gameVueComponent.text()).toContain("Its an battle arena game in which you need to battle other people to defeat the other people's bases.")
    })
})
