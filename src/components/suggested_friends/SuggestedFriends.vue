<template>
    <div class="suggestedFriends">
        <form @submit.prevent="searchByGameName">
            <input type="text" name="game-name" v-model="gameName">
            <button class="submitButton" type="submit">search</button>
        </form>
        <select @change="searchByGameCategory($event)">
            <option v-for="(gameCategory, index) in  gameCategories" :value="gameCategory" :key="index">{{gameCategory.toLowerCase()}}</option>
        </select>
        <div v-bind:key="suggestedFriend.id"  v-for="suggestedFriend in suggestedFriends">
            <SuggestedFriend v-bind:suggestedFriend="suggestedFriend"/>
        </div>
    </div>
</template>

<script>
    import GamerService from "../../service/gamer-service"
    import GameCategoryService from "../../service/gamecategory-service"
    import SuggestedFriend from "@/components/suggested_friends/SuggestedFriend";
    export default {
        name: "GameFriend",
        components: {SuggestedFriend},
        data()
        {
            return {suggestedFriends:[],gameCategories:[],gameName:"",gameCategory:""}
        },
        mounted()
        {
            GameCategoryService.getAllGameCategories().then(gameCategories => this.gameCategories = gameCategories).catch(error => console.log(error));
        },
        methods:
        {
            searchByGameName()
            {
                GamerService.getGamersByGameName(this.gameName).then(suggestedFriends=> this.suggestedFriends = suggestedFriends).catch(err=> console.log(err));
            },
            searchByGameCategory(event)
            {
                GamerService.getGamerByGameCategory(event.target.options[event.target.options.selectedIndex].text).then(suggestedFriends => this.suggestedFriends = suggestedFriends).catch(err => console.log(err));
            }
        }
    }
</script>

<style scoped>

</style>
