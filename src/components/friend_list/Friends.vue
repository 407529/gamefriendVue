<template>
    <div class="friends">
        <h2>Friends</h2>
        <div v-bind:key="friend.id"  v-for="friend in friends">
            <Friend v-bind:friend="friend"/>
        </div>
    </div>
</template>

<script>
    import GamerService from "../../service/gamer-service"
    import Friend from "./Friend";
    export default {
        name: "Friends",
        data()
        {
            return{friends:[]}
        },
        mounted()
        {
            GamerService.getGamerFriendsByGamerId(this.$store.state.authentication.user.id).then(friends=> this.friends = friends).error(err => console.log(err));
        },
        components:{
            Friend
        }
    }
</script>

<style scoped>

</style>
