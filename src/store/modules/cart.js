
// import headimg from '../../assets/user/headImg.png'
const cart  = {
    state: {
      cartList:[], 
    
    },
  
    mutations: {
      // SET_MENU_LIST: (state, menuList) => {
      //   state.menuList = menuList;
      // },

      GET_CAR_LIST:(state,carlist)=>{
        // sessionStorage.setItem('cartList',JSON.stringify(carlist.carlist));
        state.cartList=carlist;
        
      },
     REMOVE:(state,id)=>{
      state.cartList.splice(state.cartList.findIndex(item => item.goodsId === id.goodsId), 1);

     },
     UPDATE_LIST:(state,item)=>{
       for(var i=0;i<item.item.length;i++){
        item.item[i].total=Number( item.item[i].qty)*Number(item.item[i].price)
       }
      state.cartList=item.item;
      
     }
    },
  
    actions: {
      //得到购物车数据
      getCarlist({commit}){
        setTimeout(() => {
          var carlist=[{    // 购物车数据
            model:'S-17080',
            description:'这是一个什么产品',
            qty:'2',
            price:20,
            total:40,
            goodsId:'1'
    
          }, {
            model:'S-17080',
            description:'这是一个什么产品',
            qty:'1',
            price:20,
            total:20,
            goodsId:'2'
          }, {
            model:'S-17080',
            description:'这是一个什么产品',
            qty:'2',
            price:20,
            total:40,
            goodsId:'3'
          }, {
             model:'S-17080',
            description:'这是一个什么产品',
            qty:'4',
            price:20,
            total:80,
            goodsId:'4'
          }]
          // sessionStorage.setItem('cartlist',JSON.stringify(carlist));
         commit('GET_CAR_LIST',carlist);
        }, 300);
       
      },
      removeGoods({commit},params){
        console.log('vuex---',params);
        commit('REMOVE',params);

      },
      UpdateList({commit},params){
        commit('UPDATE_LIST',params);
      }
      // // 获取侧边栏数据
      // GetMenuList({ commit }) {
      //   return new Promise((resolve, reject) => {
      //     getMenuList().then((res) => {
      //       const data = res.data;
      //       commit('SET_MENU_LIST', data);
      //       commit('SET_BREAD_CRUMB_TITLE_DATA', data);
      //       resolve(data);
      //     }).catch((error) => {
      //       reject(error);
      //     });
      //   });
      // },
      // // 登录
      // LoginByUsername({ commit }, userLoginObj) {
      //   return new Promise((resolve, reject) => {
      //     loginByUsername(userLoginObj).then((res) => {
      //       if (res.code === '200') {
      //         resolve(Message({
      //           message: '登录成功',
      //           type: 'success',
      //           duration: 1000,
      //         }));
      //       } else {
      //         reject('captcha', res);
      //       }
      //     }).catch((error) => {
      //       reject(error);
      //     });
      //   });
      // },
     
      // // 退出登录
      // LogOut() {
      //   return new Promise((resolve, reject) => {
      //     logout().then(() => {
      //       localStorage.setItem('loginExpired', 'true');
      //       window.location.href = `${window.location.href.split('#')[0]}#/login`;
      //       resolve();
      //     }).catch((error) => {
      //       reject(error);
      //     });
      //   });
      // },
      // // 获取token
      // GetToken({ commit }) {
      //   return new Promise((resolve, reject) => {
      //     getToken().then((res) => {
      //       commit('SET_TOKEN', res.data);
      //       resolve(res.data);
      //     }).catch((error) => {
      //       reject(error);
      //     });
      //   });
      // },
    },
  };
  
  export default cart;
  