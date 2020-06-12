<template>
    <div>
        <h2>Languages</h2>
        <div v-for="language in languages" v-bind:key="language.id">
            <p>{{language.name}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LanguageProfile",
        props:["languages"]
    }
</script>

<style scoped>

</style>
