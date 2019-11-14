<template>
  <div>
    <goods-listcom @goodsListClick="goSecondDetail" :goodsList="goodsLists"></goods-listcom>
  </div>
</template>

<script>
import goodsListcom from "@/components/goodsList.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      goodsLists: [
        {
          goodsName: "盒子1",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
        {
          goodsName: "盒子2",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
        {
          goodsName: "盒子3",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
        {
          goodsName: "盒子4",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
        {
          goodsName: "盒子5",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
        {
          goodsName: "盒子6",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
        {
          goodsName: "盒子7",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
        {
          goodsName: "盒子8",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        },
        {
          goodsName: "盒子9",
          goodsId: "111",
          goodsType: "第一层",
          imgurl: "url"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["menuList"])
  },
  components: {
    goodsListcom
  },
  methods: {
    goSecondDetail(data) {
      this.$router.push({ path: "secondDetail", query: { id: data.goodsId } });
    }
  }
};
</script>

<style scoped>
</style>