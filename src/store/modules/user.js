
// import headimg from '../../assets/user/headImg.png'
const user = {
  state: {
    menuList: [1,2,3], // 侧边栏数据
  
  },

  mutations: {
    // SET_MENU_LIST: (state, menuList) => {
    //   state.menuList = menuList;
    // },
   
  },

  actions: {
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

export default user;
