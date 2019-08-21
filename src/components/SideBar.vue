<template>
  <aside>
    <p>This is some text in a sidebar</p>
  </aside>
</template>

<!-- "scoped" limit CSS to this component only -->
<style scoped>
  aside {
    position:absolute;
    top: 60px;
    width: 300px;
    height: 80%;
    background-color: #ffccff;
    z-index: -1
  }
</style>
