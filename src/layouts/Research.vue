<script>
import HeaderBar from '@/components/HeaderBar.vue';
import SideBar from '@/components/SideBar.vue';
import FooterBar from '@/components/FooterBar.vue';

export default {
  components: {
    HeaderBar,
    SideBar,
    FooterBar,
  },
};
</script>

<template>
<div>
    <h2>this is Research Portal Layout</h2>
    <h4>investor portal layout: <a href="/investor">click here</a></h4>
    <header-bar/>
    <side-bar/>
    <section>
        <slot/>
    </section>
    <footer-bar/>
</div>
</template>

<!-- "scoped" limit CSS to this component only -->
<style scoped>
  h4 {
    position:absolute;
    top: 10px;
    right: 30px;
  }
</style>

