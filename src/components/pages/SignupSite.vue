<template>
<div class="signup-all">
  <div class="signup">
    <div class="sign">
      <form @submit.prevent="Signup">
        <input type="text" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
       
        <input type="submit" value="Signup">
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
}
.signup{
  width: 500px;
  height: 400px;
  background-color: white;
  margin-left: 100px;
 
  border-radius: 7px;

}

</style>


