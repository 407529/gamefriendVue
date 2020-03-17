<template>
    <div>
        <h1>Games</h1>
        <div v-bind:key="game.id"  v-for="game in games">
            <Game v-bind:game="game"/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Game from "@/game/Game";
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
            axios.get('http://localhost:9000/gamefriend/api/games/all').then(res => this.games = res.data).catch(err => console.log(err));
        }
    }
</script>

<style scoped>

</style>
