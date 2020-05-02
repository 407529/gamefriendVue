<template>
    <div class="loginPage">
        <div class="login">
            <ValidationObserver ref="loginValidation">
                <form @submit.prevent="handleLogin">
                    <ValidationProvider name="E-mail" rules="required|email" v-slot="{errors}">
                        <label>email: </label><input id="userName" type="text" v-model="user.username" name="userName">
                        <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider name="Password" rules="required" v-slot="{errors}">
                        <label>password: </label><input id="password" type="password" v-model="user.password" name="password">
                        <span>{{errors[0]}}</span>
                    </ValidationProvider>
                    <button class="submitButton" type="submit">login</button>
                </form>
                <div v-if="message">{{message}}}</div>
            </ValidationObserver>
            <router-link class="registerLink" to="/register">Or register here</router-link>
        </div>
    </div>
</template>

<script>
    import {required,email} from 'vee-validate/dist/rules'
    import { ValidationObserver } from 'vee-validate';
    import {extend} from 'vee-validate'
    import User from "@/components/models/user";
    //vee-validate rules
    extend('email',email);
    extend('required',required)
    export default {
        name: "Login",
        components:{
            ValidationObserver
        },
        data() {
            return {
                user: new User('', ''),
                loading: false,
                message: ''
            };
        },
        computed: {
            loggedIn() {
                return this.$store.state.authentication.status.loggedIn;
            }
        },
        created() {
            if (this.loggedIn) {
                this.$router.push('/profile');
            }
        },
        methods: {
            handleLogin() {
                console.log("login");
                this.loading = true;
                this.$refs.loginValidation.validate().then(isValid => {
                    if (!isValid) {
                        console.log('no login');
                        this.loading = false;
                        return;
                    }

                    if (this.user.username && this.user.password) {
                        console.log('authentication');
                        this.$store.dispatch('authentication/login', this.user).then(
                            () => {
                                this.$router.push('/profile');
                            },
                            error => {
                                this.loading = false;
                                this.message =
                                    (error.response && error.response.data) ||
                                    error.message ||
                                    error.toString();
                            }
                        );
                    }
                });
            }
        }
    };
</script>

<style scoped>
    .loginPage
    {
        height: 100%;
        width: 50%;
        margin-right: auto;
        margin-left: auto;
        background-color: var(--darkestBlue);
        padding-bottom: 22.5%;
        border-radius: 3%;
        box-shadow: 7px 10px var(--whiteBlue);
    }
    .login
    {
        margin-top: 7.5%;
        margin-left: auto;
        margin-right: auto;
        display: inline-block;
        border-radius: 3%;
        padding: 2%;
    }
    input{
        display: block;
        margin: auto;
        border-radius: 5px;
        border-color: var(--white);
    }
    .submitButton
    {
        background: var(--white);
        border-radius: 25px;
        border: none;
        outline: none;
        margin-top: 0.2%;
        font-size: 18px;
        color: var(--darkestBlue);
    }
    label{
        color: var(--white);
        margin: auto;
    }
    .registerLink
    {
        color: var(--blue);
        text-decoration: none;
    }
</style>
