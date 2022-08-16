<template>

  <SliderSite></SliderSite>
  <BlogSite></BlogSite>
  <TagSite></TagSite>
  <TitleSite></TitleSite>
  <SideSite></SideSite>

</template>

<script>
import SliderSite from '../SliderSite.vue'

import BlogSite from '../BlogSite.vue';
import TagSite from '../TagSite.vue';
import TitleSite from '../TitleSite.vue';
import SideSite from '../SideSite.vue';



export default {
  name: 'HomeSite',
  components: {
    SliderSite,
   
    BlogSite,
    TagSite,
    TitleSite,
    SideSite,
  
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
  
}
</style>