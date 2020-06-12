<template>
        <div>
            <p>game: {{gameProfile.game.name}}</p>
            <p>category: {{gameProfile.game.gameCategory}}</p>
            <p>username: {{gameProfile.username}}</p>
        </div>
</template>

<script>
    export default {
        name: "GameProfile",
        props:["gameProfile"]
    }
</script>

<style scoped>

</style>
