<template>
    <div>
  
      <div class="main">
        <h2 class="txt">账号密码登陆</h2>
        <div> <Login></Login></div>
    </div>
 
  
 
    </div>    
</template>

<script>
import Login from "./../components/Login"

export default {
    components:{
        Login
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

