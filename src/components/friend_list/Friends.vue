<template>
    <div class="friends">
        <div v-bind:key="friend.id"  v-for="friend in friends">
            <Friend v-bind:friend="friend"/>
        </div>
    </div>
</template>

<script>
    import Friend from "@/components/friend_list/Friend";
    export default {
        name: "Friends",
        data()
        {
            return{friends:[{id:1,name:"Gert"},{id:2,name:"B"}]}
        },
        components:{
            Friend
        }
    }
</script>

<style scoped>

</style>
