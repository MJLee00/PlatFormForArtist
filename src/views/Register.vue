<template>
    <div>
      
      <div class="main">
        <h2 class="txt">用户注册</h2>
        <div> <Register></Register></div>
    </div>
 
  
 
    </div>    
</template>

<script>
import Register from "./../components/Register"
export default {
    components:{
        Register
    }
}
</script>

<style scoped>
.main{
    position: absolute;
    top:60%;
    left:50%;
    margin-left:-150px;
    margin-top:-200px;
    padding:20px;
    border:1px solid black;
    border-radius: 15px;
}
.txt{
    text-align: center;
}
</style>

