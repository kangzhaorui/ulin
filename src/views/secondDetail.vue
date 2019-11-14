<template>
    <div>
          <goods-listcom  @goodsListClick='goThirdDetail' :goodsList='goodsLists'></goods-listcom>
       
      
    </div>
</template>

<script>
import goodsListcom  from '@/components/goodsList.vue';
    export default {
          data(){
return{
 goodsLists: [
        {
          goodsName: "盒子1",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
       
      ],
}
  },
  components:{
goodsListcom
  },
        methods:{
            goThirdDetail(data){
                this.$router.push({path:'/thirdDetail',query:{id:data.goodsId}})
            }
        }
    }
</script>

<style scoped>

</style>