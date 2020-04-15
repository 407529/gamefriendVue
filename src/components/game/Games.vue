<template>
    <div>
        <h1>Games</h1>
        <div v-bind:key="game.id"  v-for="game in games">
            <Game v-bind:game="game"/>
        </div>
    </div>
</template>

<script>
    import Game from "@/components/game/Game";
    import GameService from "../../service/game-service"
    export default {
        name: "Games",
        components: {Game},
        data()
        {
            return{
                games:[]
            }
        },
        mounted() {
            GameService.getAllGames().then(games => this.games = games).catch(err => console.log(err));
        }
    }
</script>

<style scoped>

</style>
