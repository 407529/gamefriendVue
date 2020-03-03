<template>
    <div class="suggestedFriends">
        <div v-bind:key="suggestedFriend.id"  v-for="suggestedFriend in suggestedFriends">
            <SuggestedFriend v-bind:suggestedFriend="suggestedFriend"/>
        </div>
    </div>
</template>

<script>
    import SuggestedFriend from "@/components/suggested_friends/SuggestedFriend";
    export default {
        name: "GameFriend",
        components: {SuggestedFriend},
        data()
        {
            return {suggestedFriends:[]}
        }
    }
</script>

<style scoped>

</style>
