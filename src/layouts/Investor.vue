<script>
import HeaderBar from '@/components/HeaderBar.vue';
import FooterBar from '@/components/FooterBar.vue';

export default {
  components: {
    HeaderBar,
    FooterBar,
  },
};
</script>

<template>
<div>
    <h2>this is Investor Portal Layout</h2>
    <h4>research portal layout: <a href="/research">click here</a></h4>
    <header-bar/>
    <section>
        <slot/>
    </section>
    <footer-bar/>
</div>
</template>

<!-- "scoped" limit CSS to this component only -->
<style scoped>
  h4 {
    position: absolute;
    top: 10px;
    right: 30px;
  }
</style>
