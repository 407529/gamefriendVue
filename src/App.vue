<template>
  <div id="app">
    <Navigation/>
    <Profile/>
  </div>
</template>
<script>
import Navigation from "@/components/layout/Navigation";
import Profile from './components/Profile.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Profile
  },
}
</script>

<style>
  body
  {
    margin: 0;
    padding: 0;
  }
  #app {
  }
</style>
