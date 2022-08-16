<template>
<NavbarSite></NavbarSite>
  <router-view></router-view>
    <FooterSite></FooterSite>
</template>

<script>

import NavbarSite from '../src/components/NavbarSite.vue'
import FooterSite from '../src/components/FooterSite.vue'

export default {
  name: 'App',
  components: {
   NavbarSite,
   FooterSite,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
 
}
</style>
