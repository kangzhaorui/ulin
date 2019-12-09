<template>
  <div>
    <div>
      <div class="home">
         <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item">
       <img v-if="item%2==0" src="../../assets/baneer1.jpg" alt="">
       <img v-if="item%2!=0" src="../../assets/baneer2.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
      </div>
      <goods-listcom  @goodsListClick='goodsListClick' :goodsList='goodsLists'></goods-listcom>
      <!-- <div @click="goFistdetail('id')">下面的list </div> -->
    </div>
  </div>
</template>

<script>
import goodsListcom  from '@/components/goodsList.vue';
export default {
  data(){
return{
 goodsLists: [
        {
          goodsName: "盒子",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
        {
          goodsName: "盒子",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
        {
          goodsName: "盒子",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
        {
          goodsName: "盒子",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
        {
          goodsName: "盒子",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
        {
          goodsName: "盒子",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
        {
          goodsName: "盒子",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
        {
          goodsName: "盒子",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
        {
          goodsName: "盒子",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        }
      ],
}
  },
  components:{
goodsListcom
  },
  methods: {
    goodsListClick(data) {
      console.log("ppppp",data)
      this.$router.push({ path: "/firstDateil", query: { id: data.goodsId } });
    }
  }
};
</script>

<style lang='scss'  scoped>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    img{
   width: 100%;
    }
  
    background-image: url('../../assets/baneer2.jpg') 0 0;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    img{
      width: 100%;
    }
     background-color: #d3dce6;
  }

</style>