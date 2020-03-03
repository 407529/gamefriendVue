<template>
        <div>
            <p>{{game.name}}</p>
            <p>{{game.category}}</p>
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
