<template>
  <div class="profile">
    <h1>profile</h1>
    <p>name: {{user.firstName}}</p>
    <p>username: {{user.username}}</p>
    <p>email: {{user.email}}</p><button id="change-email-button" v-on:click="changeEmail">change email</button>
    <div id="email-changer" class="hidden">
      <input v-model="user.email" type="text">
    </div>
    <h2>games</h2>
    <div v-bind:key="gameProfile.id"  v-for="gameProfile in user.gameProfiles">
      <PrivateGameProfile v-bind:gameProfile="gameProfile"/>
    </div>
    <PrivateLanguageProfile v-on:removeLanguage="removeLanguage" v-bind:languages="user.languages"></PrivateLanguageProfile>
    <button v-on:click="removeGamer">remove account</button>
  </div>
</template>

<script>
import PrivateGameProfile from "./PrivateGameProfile";
import GamerService from "../../service/gamer-service"
import PrivateLanguageProfile from "./PrivateLanguageProfile";
import {GamerUpdateRequest} from "../../payload/requests/GamerUpdateRequest";
import {UserUpdateRequest} from "../../payload/requests/UserUpdateRequest";

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
            PrivateLanguageProfile,
            PrivateGameProfile
          },
  methods: {
    removeLanguage(languageId)
    {
      this.user.languages = this.user.languages.filter(x =>{
        return x.id !== languageId;
      })
      console.log(this.user.languages);
      GamerService.removeLanguage(this.$store.state.authentication.user.id,languageId);
    },
    removeGamer()
    {
      GamerService.removeUser(this.$store.state.authentication.user.id).then(() => {this.$store.dispatch('authentication/logout');
      this.$router.push('/login')}).catch(err => console.log(err));
    },
    changeEmail()
    {
      const descriptionChanger =  document.getElementById('email-changer');
      const buttonId ="change-email-button";
      const hideClass = 'hidden';
      if (descriptionChanger.classList.contains(hideClass)) {
        descriptionChanger.classList.remove(hideClass);
        document.getElementById(buttonId).innerText = 'submit description';
      } else {
        document.getElementById(buttonId).innerText = 'change description';
        const gamerUpdateRequest = new GamerUpdateRequest(new UserUpdateRequest(this.$store.state.authentication.user.id,'',this.user.email),'','');
        GamerService.updateGamer(gamerUpdateRequest);
        descriptionChanger.classList.add(hideClass);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hidden{
    display: none;
  }
</style>
