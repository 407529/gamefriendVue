<template>
    <div class="loginPage">
        <div class="login">
            <form @submit="login">
                <label>email: </label><input type="text" v-model="email" name="userName">
                <label>password: </label><input type="password" v-model="password" name="password">
                <button class="submitButton" type="submit">login</button>
            </form>
            <router-link class="registerLink" to="/register">Or register here</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data()
        {
            return {email:'',password:''}
        },
        methods:{
            login()
            {
                fetch("").then()
            }
        }
    }
</script>

<style scoped>
    .loginPage
    {
        height: 100%;
        width: 100%;
        margin-right: 0;
        margin-left: 0;
        background-color: var(--main-color1);
        padding-bottom: 22.5%;
    }
    .login
    {
        margin-top: 7.5%;
        margin-left: auto;
        margin-right: auto;
        display: inline-block;
        border-radius: 3%;
        padding: 2%;
        background-color: white;
    }
    input{
        display: block;
        margin: auto;
        border-radius: 5px;
        border-color: var(--accentuator-color2);
    }
    .submitButton
    {
        background: var(--main-color2);
        border-radius: 25px;
        border: none;
        outline: none;
        margin-top: 0.2%;
        font-size: 18px;
        color: var(--accentuator-color1);
    }
    label{
        color: var(--main-color3);
        margin: auto;
    }
    .registerLink
    {
        color: var(--main-color1);
        text-decoration: none;
    }
</style>
