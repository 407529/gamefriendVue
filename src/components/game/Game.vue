<template>
    <div>
        <p>{{game.name}}</p>
        <p>{{game.gameCategory}}</p>
        <p>{{game.discription}}</p>
        <img class="gameImage" v-bind:src="game.imageUrl">
    </div>
</template>

<script>
    export default {
        name: "Game",
        props:["game"]
    }
</script>

<style scoped>
    .gameImage{
        max-width: 450px;
    }
</style>
