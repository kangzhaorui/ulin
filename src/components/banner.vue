<template>
  <div class="banner">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
            <div class="line" >

            </div>
          <div class="banner-menu">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-submenu index="1">
                <template slot="title">Products</template>
                <div class="menu-item">
                  <el-menu-item index="2-1"></el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                </div>
                  <div class="menu-item">
                  <el-menu-item index="2-1"></el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                </div>
                  <div class="menu-item">
                  <el-menu-item index="2-1"></el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                </div>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">Buy Again</template>
                <div class="menu-item">
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                </div>
              </el-submenu>
                <el-submenu index="3">
                <template slot="title">Help</template>
                <div class="menu-item">
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                </div>

              </el-submenu>
                <el-submenu index="4">
                <template slot="title">About Us</template>
                <div class="menu-item">
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                </div>
              </el-submenu>
            </el-menu>
          </div>
        </div>
      </el-col>
    </el-row>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  // margin-bottom: 20px;
  // height: 110px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  height: 80px;
  background: #1013a1;
  z-index: 2;
}
.line{
    height: 10px;
}
.banner-menu {
 
  width: 40%;
  margin: auto;
}
.el-menu-demo {
  height: 50px;
  background: #1013a1;
  color: white;
  border: solid 1px #1013a1;
  li {
    border-right: solid 3px white;
    width: 150px;
    text-align: center;
    color: white;
    
  }
  li:last-child{
      border: none;
  }
  
}
.is-opened {
  background: #1013a1;
}
.menu-item {
  display: flex;
}
</style>