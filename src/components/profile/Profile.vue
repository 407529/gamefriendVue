<template>
    <div>
        <img class="gamerTag" v-bind:src="gamer.pictureUrl">
        <p>{{gamer.username}}</p>
        <p>{{gamer.description}}</p>
        <h2>Games</h2>
        <div v-bind:key="game.id"  v-for="game in gamer.games">
            <PrivateGameProfile v-bind:game="game"/>
        </div>
        <h2>Languages</h2>
        <LanguagesProfile v-bind:languages="gamer.languages"></LanguagesProfile>
    </div>
</template>

<script>
    import GamerService from '../../service/gamer-service'
    import LanguagesProfile from "./LanguagesProfile";
    import PrivateGameProfile from "./PrivateGameProfile";
    export default {
        name: "Profile",
        components: {
            LanguagesProfile,
            PrivateGameProfile
        },
        data()
        {
           return {gamer:{}}
        },
        mounted()
        {
            GamerService.getGamerById(this.$route.params.id).then(gamer=> this.gamer = gamer)
        }
    }
</script>

<style scoped>
    .gamerTag
    {
        max-width: 400px;
    }
</style>
