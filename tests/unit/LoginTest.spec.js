import Login from "@/components/authentication/Login";
import { mount,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import {authentication} from "@/store/authmodule";


const localVue = createLocalVue();
localVue.use(Vuex)
const store = new Vuex.Store({
    state: {

    },
    mutations: {
    },
    actions: {
    },
    modules: {
        authentication
    }
})

const loginComponent = mount(Login,{localVue,store})
describe('Login.vue',()=>{
    it('Login form request',()=>
    {
        loginComponent.find('#username').setValue('Bert123');
        loginComponent.find('#username').setValue('Gert#123');
        loginComponent.find('.submitButton').props().onClick();
    })
})
