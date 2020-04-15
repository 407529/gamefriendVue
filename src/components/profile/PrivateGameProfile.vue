<template>
        <div>
            <p>{{game.name}}</p>
            <p>{{game.gameCategory}}</p>
        </div>
</template>

<script>
    export default {
        name: "GameProfile",
        props:["game"]
    }
</script>

<style scoped>

</style>
