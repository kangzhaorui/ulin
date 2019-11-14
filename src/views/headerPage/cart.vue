<template>
    <div class="cart">
        <div class="title">
             <h1>ShoppingCart</h1>
             <div>
                 <h1>Forward</h1>
             </div>
        </div>
    <el-divider></el-divider>
     <div class="title">
         <div  >
              <h1 @click="addMyself=!addMyself" > Add Product by Model #</h1>
         </div>
            
            
        </div>
        <div  class="search" v-if="addMyself">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label=" ">
    <el-input v-model="formInline.user" placeholder="width"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-input v-model="formInline.user" placeholder="long"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="search">Search</el-button>
  </el-form-item>
</el-form>
        </div>
        <div>
             <el-table
    :data="cartList"
    style="width: 100%">
    <el-table-column
      label="Model#"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.model }}</span>
      </template>
    </el-table-column>
      <el-table-column
      label="Description"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.description }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Qty"
      width="180">
      <template slot-scope="scope">
        <!-- <span style="margin-left: 10px">{{ scope.row.date }}</span> -->
        <el-input v-model="scope.row.qty" placeholder="请输入内容"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      label="Price"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.price }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Total"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.total }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Remove">
      <template slot-scope="scope">
        <!-- <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
        <el-button
          size="mini"
          type="danger"
          @click="removeGoods({'goodsId':scope.row.goodsId})">Remove</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="total_box" >
    <div class="total" >
       <h1>TOTAL=</h1> <h1>{{total?total:'0'}}</h1>
    </div>
   
  </div>
  <div>
    <span> <el-button @click="UpdateList({'item':cartList})" type="info">Update</el-button></span>
    <span><el-button  @click="goPay()" type="primary">Checkout</el-button></span>
  </div>
        </div>
         <el-divider></el-divider>
    </div>
</template>

<script>
import { mapGetters, mapState ,mapActions} from 'vuex';
    export default {
         data() {
      return {
        addMyself:false,
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    computed:{
       ...mapGetters(['cartList','total']),
    
    },
    mounted(){
      // setTimeout(() => {
        
      // }, 1000);
     
      this.getCarlist();
    },
    methods: {
      ...mapActions(['getCarlist','removeGoods','UpdateList']),
      search() {
          this.$message({
          showClose: true,
          message: '这是去搜索页面',
          type: 'success'
        });
        console.log('submit!');
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      goPay(){
        this.$message({
          showClose: true,
          message: 'This go Pay  Page',
          type: 'success'
        });
      
      },
    } 
    }
</script>

<style lang='scss' scoped>
.cart{
    width: 80%;
    // border: solid 1px red;
    margin: auto;
    height: 600px;
}
.title{
    display: flex;
    justify-content: space-between;  
    div{
        color: lightgray;
    }
    
}
  .total{
  display: flex;
  height: 100px;
  align-self: center;
  h1{
    display: flex;
    align-self: center;
  }
}
.search{
  // width: 400px;
 box-sizing: border-box;
  height: 80px;
  margin-top: 20px;
}
// .el-divider--horizontal{
// /* height: 5px; */
// margin: 5px 0;
// background: black;
// }
</style>