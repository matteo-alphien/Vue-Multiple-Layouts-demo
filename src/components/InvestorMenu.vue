<template>
  <div>
    <h3>This is Investor Menu</h3>
    <p><a href="/investor">home</a> | <a href="/investor/dashboard">dashboard</a> | leaderboard | alphAlloc | alphaStats</p>
    <router-view></router-view>
  </div>
</template>

<!-- "scoped" limit CSS to this component only -->
<style scoped>
  h3, p {
    text-align: center;
  }
  h3 {
    color: darkblue;
  }
</style>
