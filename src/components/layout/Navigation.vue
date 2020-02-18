<template>
    <div class="nav">
        <p class="title">GameFriend</p>
        <ul>
            <li>
                <a>profile</a>
            </li>
            <li>
                <a>friends</a>
            </li>
            <li>
                <a>find new friend</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>
    .nav
    {
        background-color: rgb(0,0,128);
        padding-bottom: 3.5%;
    }
    .title
    {
        float: left;
        color:white;
        margin: 0 0 2%;
        padding: 0;
        font-size: 20px;
    }
    .login
    {
        float:right;
        margin: 0.5%;
        padding: 0.5%;
        border-radius: 15%;
        background-color: grey;
    }
    ul
    {
        float:left;
        width: 70%;
    }
    li
    {
        display: inline-block;
        padding: 0;
        margin: 0 4% 0 0;
    }
    li a
    {
        color: white;
    }
    .nav p
    {
        display: inline-block;
    }
</style>