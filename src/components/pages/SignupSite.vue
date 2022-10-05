<template>
<div class="signup-all">
  <div class="signup">
    <div class="sign">
      <h5>Sign Up </h5>
      <form @submit.prevent="Signup">
    
        <input class="size" type="text" placeholder="Enter your email" v-model="email"><br>
       
        <input class="size" type="password" placeholder="password" v-model="password"><br>
       
        <input class="btn" type="submit" value="Submit">
        
        <p>Already have an account? <router-link class="first" to="/login">Login</router-link></p>
      </form>
    </div>
  
  </div>
</div>
</template>

<script>

import firebase from "firebase";


export default {
 
  data(){
     return{
      email:'',
      password:''
     }
  
  },
  methods:{
    Signup(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        ()=>{
          alert('signup successfully');
          this.$router.replace("/");
        },
        (err)=>{
            alert(err.message);
        }
      );
    }
  }


}
</script>

<style scoped>
.signup-all{
  width: 100%;
  height: 555px;
   background-color: rgb(5, 5, 5);
   padding-top: 76px;
}
.signup{
  width: 500px;
  height: 350px;
background-color: rgb(141, 170, 90);
  margin-left: 400px;
 
  border-radius: 7px;
  padding-top: 50px;

}
.btn{
  background-color: darkslategrey;
 width: 300px;
 color: white;
 font-size: 18px;
margin-top: 10px;
margin-bottom: 9px;
}
.sign h5{
  color: white;
}
.size{
  width: 300px;
 margin: 5px;
 
}
.line{
  width: 300px;
  color: white;
}
.sign p{
  color: white;
  font-size: 19px;
}
.first{
  color: crimson;
}

</style>


