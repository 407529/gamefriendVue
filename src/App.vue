<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/games">Games</router-link> |
      <router-link to="/game-friend">Game friend</router-link> |
      <router-link to="/friends">Friends</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link v-if="!currentUser" to="/login">Login</router-link>
      <a v-if="currentUser" @click.prevent="logout">Logout</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    computed:
    {
      currentUser()
      {
        console.log(this.$store.state.authentication.user);
        return this.$store.state.authentication.user;
      }
    },
    methods:
    {
      logout()
      {
        console.log('logout');
        this.$store.dispatch('authentication/logout');
        this.$router.push('/login')
      }
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --darkestBlue:#0e2e47;
  --lighterBlue:#1e3888;
  --blue:#26408b;
  --whiteBlue:#1b4079;
  --white: #ffffff;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a{
  font-weight: bold;
  color: #2c3e50;
}
</style>
