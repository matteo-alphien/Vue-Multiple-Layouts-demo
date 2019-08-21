<template>
  <div>
    <h3>This is Research Menu</h3>
    <p><a href="/research">home</a> | <a href="/research/dashboard">dashboard</a> | community | tools | FAQ</p>
    <router-view></router-view>
  </div>
</template>

<!-- "scoped" limit CSS to this component only -->
<style scoped>
  h3, p {
    text-align: center;
  }
  h3 {
    color: darkgreen;
  }
</style>
