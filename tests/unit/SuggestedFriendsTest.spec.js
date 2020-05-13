import SuggestedFriends from "../../src/components/suggested_friends/SuggestedFriends";
import { mount,createLocalVue  } from '@vue/test-utils'
import VueRouter from 'vue-router'

import routes from "../../src/router/routes";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter({routes});

const gameCategories = ["MMO","RPG","FPS"]
const user = {id:1,pictureUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FK05bsc_EKBWE1yDnbl8swHaDt%26pid%3DApi%26h%3D160&f=1",username:"Bert",description:"I like mmo's"}
const suggestedFriends = mount(SuggestedFriends,{attachToDocument: true,localVue,router});
suggestedFriends.setData({gameCategories:gameCategories})
describe('SuggestedFriends.vue',()=>{
    it('find by game button pressed',()=>{
        suggestedFriends.find('.gameName').setValue('League of Legends');
        const searchByGameName = jest.fn();
        suggestedFriends.setMethods({searchByGameName:searchByGameName})
        const button = suggestedFriends.find('.submitButton');
        button.trigger('click');
        expect(searchByGameName).toHaveBeenCalled();
    })
    it('category item binding',()=>
    {
        suggestedFriends.findAll('select#gameCategoryDd > option').at(1).element.selected = true;
        const searchByGameCategory = jest.fn();
        suggestedFriends.setMethods({searchByGameCategory:searchByGameCategory})
        suggestedFriends.find('select#gameCategoryDd').trigger('change');
        expect(searchByGameCategory).toHaveBeenCalled();
    })
});

