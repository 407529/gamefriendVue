<template>
    <div>
        <p>{{game.name}}</p>
        <p>{{game.category}}</p>
        <p>{{game.discription}}</p>
        <img v-bind:src="game.img">
    </div>
</template>

<script>
    export default {
        name: "Game",
        props:["game"]
    }
</script>

<style scoped>

</style>
