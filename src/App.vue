<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/game-friend">Game friend</router-link> |
      <router-link to="/friends">Friends</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --main-color1:#e3170a;
  --main-color2:#e16036;
  --main-color3:#d6a99a;
  --accentuator-color1:#d6cbc1;
  --accentuator-color2: #cdd6d0;
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
