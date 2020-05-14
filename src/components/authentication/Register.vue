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
    export default {
        name: "Register"
    }
</script>

<style scoped>

</style>
