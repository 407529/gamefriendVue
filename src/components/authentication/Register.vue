<template>
    <div class="register">
        <form onsubmit="return false">
            <label>username: </label><input type="text" name="userName">
            <label>password: </label><input type="password" name="password">
            <label>first name:</label><input type="text" name="firstName">
            <label>last name: </label><input type="text" name="lastName">
            <button class="submitButton" type="submit">register</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>

</style>
