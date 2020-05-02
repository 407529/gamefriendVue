import SuggestedFriend from "@/components/suggested_friends/SuggestedFriend";
import { mount,createLocalVue  } from '@vue/test-utils'
import VueRouter from 'vue-router'
import routes from "@/router/routes";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter({routes});

const user = {id:1,pictureUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FK05bsc_EKBWE1yDnbl8swHaDt%26pid%3DApi%26h%3D160&f=1",username:"Bert",description:"I like mmo's"}
const suggestedFriend = mount(SuggestedFriend,{localVue,router,propsData:{suggestedFriend:user}});
describe('SuggestedFriend.vue',()=>{
  it('should show users name',()=>{
        expect(suggestedFriend.text()).toContain("Bert");
      }
  )
  it('should display description',()=>{
      expect(suggestedFriend.text()).toContain("I like mmo's");
  })
    it('link on profile works',()=>{

    })
});

