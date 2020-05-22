<template>
  <div class="profile">
    <h1>profile</h1>
    <p>name: {{user.firstName}}</p>
    <p>username: {{user.userName}}</p>
    <h2>games</h2>
    <div v-bind:key="game.id"  v-for="game in user.gamesPlayed">
      <PrivateGameProfile v-bind:game="game"/>
    </div>
    <LanguageProfile v-bind:languages="user.languages"></LanguageProfile>
  </div>
</template>

<script>
import PrivateGameProfile from "./PrivateGameProfile";
import GamerService from "../../service/gamer-service"

export default {
  name: 'Profile',
  data() {
    return {user: {}}
  },
  mounted()
  {
    GamerService.getGamerById(this.$store.state.authentication.user.id).then(user => this.user = user).catch(err => console.log(err));
  },
  components:
          {
            PrivateGameProfile
          }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
