<template>
    <div class="register">
        <ValidationObserver ref="registerValidation">
            <form onsubmit="return false">
                <ValidationProvider name="E-mail" rules="required|email" v-slot="{errors}">
                    <label>username: </label><input type="text" name="userName">
                    <span>{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider name="Password" rules="required" v-slot="{errors}">
                    <label>password: </label><input type="password" name="password">
                    <span>{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider name="firstName" rules="required" v-slot="{errors}">
                    <label>first name:</label><input type="text" name="firstName">
                    <span>{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider name="lastName" rules="required" v-slot="{errors}">
                    <label>last name: </label><input type="text" name="lastName">
                    <span>{{ errors[0] }}</span>
                </ValidationProvider>
                <button class="submitButton" type="submit">register</button>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
    import { required,email } from 'vee-validate/dist/rules'
    import { ValidationObserver } from 'vee-validate';
    import {extend} from 'vee-validate';
    import Gamer from "../models/Gamer";
    extend('email',email);
    extend('required',required)
    export default {
        name: "Register",
        components: {
            ValidationObserver
        },
        data() {
            return {
                user: new Gamer('', '', '',' '),
                submitted: false,
                successful: false,
                message: ''
            };
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            }
        },
        mounted() {
            if (this.loggedIn) {
                this.$router.push('/profile');
            }
        },
        methods: {
            handleRegister() {
                this.message = '';
                this.submitted = true;
                this.$refs.registerValidation.validate().then(isValid => {
                    if (isValid) {
                        this.$store.dispatch('auth/register', this.user).then(
                            data => {
                                this.message = data.message;
                                this.successful = true;
                            },
                            error => {
                                this.message =
                                    (error.response && error.response.data) ||
                                    error.message ||
                                    error.toString();
                                this.successful = false;
                            }
                        );
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
