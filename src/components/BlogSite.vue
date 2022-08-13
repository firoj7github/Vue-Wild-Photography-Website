<template>
  <div class="blog-all">
    <div class="blog">
        <div class="blog-1">
            <h1>Explore The World</h1>
            <p>Phasellus eget lacinia ipsum. Aliquam lectus tellus, cursus at fermentum id, hendrerit <br> sollicitudin.</p>
        </div>
        <div class="blog-2">
          <div class="img-1">
            <img 
           src="../assets/image/diana-aishe-s6Wh7atT_u8-unsplash.jpg" alt="">
           <h5>Roundup at Revillagigedo, by Ralph Pace, Big Picture wildlife images competition, aquatic life</h5>
          </div>
          <div class="img-2">
             <img 
           src="../assets/image/radoslaw-prekurat-oJW6cBoCHfo-unsplash.jpg" alt="">
           <h5>Dutch photographer Marsel van Oosten’s stunning portrait of two  golden snub-nosed monkeys</h5>
          </div>

          <div class="img-3">
            
          <img src="../assets/image/ramsha-asad-rsaCyJIXMfU-unsplash.jpg" alt="">
          <h5>Komodo Judo by Andrey Gudkov Two large male Komodo dragons hissing angrily at each other in national park.</h5>
          </div>
          


         
          
        </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'App',
  

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&family=Slabo+27px&display=swap');
.blog-all{
    width: 100%;
    height: 930px;
    background-color: rgb(5, 5, 5);
    position: relative;
}
.blog-2{
    display: grid;
    width: 1200px;
    grid-template-columns: repeat(3, 1fr);
    margin-left: 90px;
   
}
.blog-2 img{
    width: 360px;
    height: 550px;
}
.blog-1{
    padding-top: 100px;
    margin-bottom: 70px;
    color: white;
     font-family: 'Raleway', sans-serif;

}
.blog-1 h1{
    font-size: 50px;
    font-weight: 500;
}
.img-1 h5{
 margin-top: -200px;
 color: white;
 width: 330px;
 font-size: 25px;
 margin-left: 35px;

}
.img-2 h5{
 margin-top: -200px;
 color: white;
 width: 330px;
 font-size: 25px;
 margin-left: 35px;

}
.img-3 h5{
 margin-top: -200px;
 color: white;
 width: 330px;
 font-size: 25px;
 margin-left: 35px;

}

</style>