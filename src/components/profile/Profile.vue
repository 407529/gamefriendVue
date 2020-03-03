<template>
  <div class="profile">
    <h1>profile</h1>
    <p>name: {{user.firstName}}</p>
    <p>username: {{user.userName}}</p>
    <h2>games</h2>
    <div v-bind:key="game.id"  v-for="game in user.gamesPlayed">
      <GameProfile v-bind:game="game"/>
    </div>
  </div>
</template>

<script>
import GameProfile from "@/components/profile/GameProfile";

export default {
  name: 'Profile',
  data() {
    return {user: {firstName: "Bert", userName: "Bert@gmail.com",gamesPlayed:[{id:1,name:"league of legends",category:"MMO"},{gameId:1,name:"league of legends",category:"MMO"}]}}
  },
  mounted()
  {
    console.log("loaded profile");
  },
  components:
          {
            GameProfile
          }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
