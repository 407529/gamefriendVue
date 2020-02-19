<template>
  <div class="profile">
    <h1>profile</h1>
    <p>name: {{user.firstName}}</p>
    <p>username: {{user.userName}}</p>
    <h2>games</h2>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {user: {firstName: "Cas", userName: "Bert@gmail.com"}}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
