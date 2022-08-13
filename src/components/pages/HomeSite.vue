<template>
<NavbarSite></NavbarSite>
  <SliderSite></SliderSite>
  <BlogSite></BlogSite>
  <TagSite></TagSite>
  <TitleSite></TitleSite>
</template>

<script>
import SliderSite from '../SliderSite.vue'
import NavbarSite from '../NavbarSite.vue';
import BlogSite from '../BlogSite.vue';
import TagSite from '../TagSite.vue';
import TitleSite from '../TitleSite.vue';


export default {
  name: 'HomeSite',
  components: {
    SliderSite,
    NavbarSite,
    BlogSite,
    TagSite,
    TitleSite
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