<template>
    <div class="suggestedFriend">
        <router-link :to="{name:'profile',params:{id:suggestedFriend.id}}">
            <img class="profilePic" :src="suggestedFriend.pictureUrl">
            <p>{{suggestedFriend.username}}</p>
            <p>{{suggestedFriend.description}}</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "SuggestedFriend",
        props: ["suggestedFriend"]
    }
</script>

<style scoped>
    .profilePic
    {
        max-width: 400px;
    }
    a
    {
        text-decoration: none;
    }
    a p
    {
        color: black;
    }
</style>
