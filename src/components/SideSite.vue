<template>
  <div class="side-all">
    <div class="side">
        <div class="side-1">
           <h3>Enjoy Your Time With Animals !!</h3>
           <p>Whether you have a puppy or an older dog, it takes some times to get to know each other, build your bond and establish boundaries.</p>
           <button>View More</button>
        </div>
        <div class="side-2">
            <img src="../assets/image/200.jpg" alt="">
        </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'SideSite',
 
}
</script>

<style>
.side-all{
    width: 100%;
    height: 700px;
    background-color: rgb(5, 5, 5);
}
.side{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.side-2 img{
    width: 800px;
    height: 570px;
    padding-top: 80px;
    margin-left: 450px;
}
.side-1{
     background-color: rgb(5, 5, 5);
     width: 430px;
     height: 250px;
     
    margin-top: 200px;
    margin-left: 170px;
    position: absolute;
    color: white;
    border: 2px solid rgb(70, 2, 2);
    
}
.side-1 p{
    width:350px ;
    margin-left: 30px;
    
}
.side-1 h3{
    margin-top: 45px;
}
</style>
