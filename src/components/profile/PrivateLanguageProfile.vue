<template>
    <div>
        <h2>Languages</h2>
        <div v-for="language in languages" v-bind:key="language.id">
            <p>{{language.name}}</p><button v-on:click="removeLanguage(language.id)">remove</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PrivateLanguageProfile",
        props:["languages"],
        methods: {
            removeLanguage(languageId)
            {
                this.$emit('removeLanguage',languageId);
            }
        }
    }
</script>

<style scoped>

</style>