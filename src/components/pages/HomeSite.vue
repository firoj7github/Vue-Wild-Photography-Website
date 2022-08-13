<template>
<NavbarSite></NavbarSite>
  <SliderSite></SliderSite>
  <BlogSite></BlogSite>
</template>

<script>
import SliderSite from '../SliderSite.vue'
import NavbarSite from '../NavbarSite.vue';
import BlogSite from '../BlogSite.vue';

export default {
  name: 'HomeSite',
  components: {
    SliderSite,
    NavbarSite,
    BlogSite
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
  margin-top: 60px;
}
</style>