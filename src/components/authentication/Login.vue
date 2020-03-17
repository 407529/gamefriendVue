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
