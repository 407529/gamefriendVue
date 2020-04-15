<template>
    <div>
        <p>{{country.name}}</p>
        <p>{{country.region.name}}</p>
    </div>
</template>

<script>
    export default {
        name: "CountryProfile",
        props: ["country"]
    }
</script>

<style scoped>

</style>
