<template>
    <div>
        <img class="gamerTag" v-bind:src="gamer.pictureUrl">
        <p>{{gamer.username}}</p>
        <p>{{gamer.description}}</p>
        <h2>Games</h2>
        <div v-bind:key="gameProfile.id"  v-for="gameProfile in gamer.gameProfiles">
            <PrivateGameProfile v-bind:gameProfile="gameProfile"/>
        </div>
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
