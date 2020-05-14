<template>
    <div class="register">
<<<<<<< HEAD
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
=======
        <ValidationObserver ref="loginValidation">
            <form onsubmit="return false">
                <ValidationProvider name="E-mail" rules="required|email" v-slot="{errors}">
                    <label>username: </label><input type="text" name="userName">
                    <span>{{ errors[0]}}</span>
                </ValidationProvider>
                <ValidationProvider name="password" rules="required" v-slot="{errors}">
                    <label>password: </label><input type="password" name="password">
                    <span>{{ errors[0]}}</span>
                </ValidationProvider>
                <ValidationProvider name="firstName" rules="required" v-slot="{errors}">
                    <label>first name:</label><input type="text" name="firstName">
                    <span>{{ errors[0]}}</span>
                </ValidationProvider>
                <ValidationProvider name="lastName" rules="required|" v-slot="{errors}">
                    <label>last name: </label><input type="text" name="lastName">
                    <span>{{ errors[0]}}</span>
>>>>>>> 0763e35e98e45bc81cad4baee5e56d119eb55e5e
                </ValidationProvider>
                <button class="submitButton" type="submit">register</button>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
    import { required,email } from 'vee-validate/dist/rules'
    import { ValidationObserver } from 'vee-validate';
    import {extend} from 'vee-validate'
    extend('email',email);
    extend('required',required)
    export default {
        name: "Register",
        components: {
            ValidationObserver
        }
    }

</script>

<style scoped>

</style>
