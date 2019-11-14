<template>
  <div>
    <div>
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

<style scoped>
</style>