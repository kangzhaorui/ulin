const getters = {
  // user
  menuList: state => state.user.menuList,
  cartList:state=>state.cart.cartList,
  total:state=>{
         var Total=0;
          for (var  item =0;item<state.cart.cartList.length;item++) {
           console.log('total',Number(state.cart.cartList[item].total))
            Total+=Number(state.cart.cartList[item].total);
          }
          return Total?Total:'0';
  }

};
export default getters;
