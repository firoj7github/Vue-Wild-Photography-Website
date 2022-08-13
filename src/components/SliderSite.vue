<template>
  <div class="slider-all">
  <h1>The Best Of The <br> Wildlife Photography</h1>
  <p>Winning images from national and international wildlife photography competitions of the year</p>
  <button>View More</button>
  </div>
</template>

<script>


export default {
  name: 'SliderSite',
  
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap');

.slider-all{
    width: 100%;
    height: 580px;
    background: url(../assets/image/33.png);
    font-family: 'Slabo 27px', serif;
}
.slider-all h1{
    padding-top: 170px;
    color: white;
    font-size: 68px;
}
.slider-all p{
    width: 500px;
    margin-left: 425px;
    color: white;
}
.slider-all button{
   padding-left: 15px;
   padding-right: 15px;
   padding-top: 8px;
   padding-bottom: 8px;
   font-size: 18px;
   background-color: white;
   border-radius: 8px;
   border: 1px solid white;
}
</style>