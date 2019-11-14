import  request  from  "@/api/request";

export function getMenuList() {
    return request({
      url: '/login',
      method: 'get',
    });
  }
export function  login(data){
  console.log('data',data);
  return request({
    url: '/login1',
    method: 'post',
    query: data,
  });
}

