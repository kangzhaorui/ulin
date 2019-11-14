<template>
    <div  class="footer">
        <div class="footer_left1" >
<div @click="gohome">Home</div>
<div>Home</div>
<div>Home</div>
        </div>
        <div class="footer_left2" >
<div>Home</div>
<div>Home</div>
<div>Home</div>
        </div>
        <div class="footer_left3" >
<div>Home</div>
<div>Home</div>
<div>Home</div>
        </div>
        <div class="footer_left4" >
<div>Home</div>
<div>Home</div>
<div>Home</div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            gohome(){
                 this.$router.push({path:'/'})
            }
           
        }
    }
</script>

<style lang="scss" scoped>
.footer{
    display: flex;
    width: 40%;
    line-height: 2;
    margin: auto;
    text-align: center;
}
.footer_left1{
    width: 200px;
}
.footer_left2{
    width: 200px;
}.footer_left3{
    width: 200px;
}
.footer_left4{
    width: 200px;
}
</style>