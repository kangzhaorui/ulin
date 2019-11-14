import  request  from  "@/api/request";

export   function getDetailTypeList (data){
    console.log(data)
    return request({
        url: '/getDetailTypeList',
        method: 'post',
        query: data,
      });
}

export function getMainTypeList  (data){
    return request({
        url: '/getMainTypeList',
        method: 'post',
        query: data,
      });
}
