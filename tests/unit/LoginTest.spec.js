import Login from "../../src/components/authentication/Login";
import { mount,createLocalVue } from '@vue/test-utils'
import {ValidationProvider} from "vee-validate";
import {required,email} from "vee-validate/dist/rules";
import VueRouter from 'vue-router'
import routes from "../../src/router/routes";
import {authentication} from "../../src/store/authmodule";
import Vuex from 'vuex';



const localVue = createLocalVue();
localVue.use(Vuex)
localVue.use(VueRouter);
const router = new VueRouter({routes});
localVue.component("ValidationProvider",ValidationProvider)

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

const loginComponent = mount(Login,{attachToDocument: true,localVue,store,router,ValidationProvider,required,email})
describe('Login.vue',()=>{
    it('Login form request',()=>
    {
        loginComponent.find('#userName').setValue('Bert123');
        loginComponent.find('#password').setValue('Gert#123');
        const handleLogin = jest.fn();
        loginComponent.setMethods({handleLogin:handleLogin})
        const button = loginComponent.find('.submitButton');
        button.trigger('click');
        expect(handleLogin).toHaveBeenCalled();
    })
})
