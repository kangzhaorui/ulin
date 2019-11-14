<template>
  <div>
    <el-row>
      <el-col :span="8" v-for="(item, index) in goodsList" :key="index">
          <div @click="goodsDetail(item)">
               <el-card  :body-style="{ padding: '0px' }">
          <img src="../assets/Boxes_1.jpg" class="image" />
          <div class="list_text" style="padding: 14px;">
            <span>{{item.goodsName}}</span>
          </div>
        </el-card>
          </div>
       
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
      currentDate: new Date()
    };
  },
  props:['goodsList'],
//   created: {
//     //列表数据应该在这去请求接口渲染页面
//   },
  methods: {
    goodsDetail(data) {
        console.log('data----',data)
        this.$emit('goodsListClick',data)
    //   this.$router.push({ path: "/firstDateil", query: { id: data } });
    }
  }
};
</script>

<style lang="scss" scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.list_text {
  width: 100%;
  text-align: center;
}
</style>