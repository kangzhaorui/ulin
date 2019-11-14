export function  getDetailTypeList(data){
    debugger
     if(data.typeName=="detail"){
        // 如果是从主页分类跳过来data里面的dataType会包裹ID，后台用ID查数据库返回list
        return {
            typeList:[
                {
                    name:"盒子11",
                    price:"100元",
                    typeId:"2"
                },  {
                  name:"盒子22",
                  price:"100元",
                  typeId:"3"
              },  {
                  name:"盒子33",
                  price:"100元",
                  typeId:"4"
              },  {
                  name:"盒子44",
                  price:"100元",
                  typeId:"5"
              },  {
                  name:"盒子55",
                  price:"100元",
                  typeId:"6"
              },  {
                  name:"盒子66",
                  price:"100元",
                  typeId:"7"
              },  {
                  name:"盒子77",
                  price:"100元",
                  typeId:"8"
              },
            ]
        }
    }

}
export function getMainTypeList(data){
    if(data.typeName=="main"){
        // 如果是主页分类跳过来data里面不会包裹ID,直接用type查数据库返回list
        return{
           typeList:[
               {
                   name:"盒子",
                   price:"100元",
                   typeId:"2",
                   imgUrl:"../assets/Boxes_1.jpg"
               },  {
                 name:"运输物品",
                 price:"100元",
                 typeId:"3",
                 imgUrl:"../assets/Boxes_1.jpg"
             },  {
                 name:"物料搬运",
                 price:"100元",
                 typeId:"4", 
                 imgUrl:"../assets/Boxes_1.jpg"
             },  {
                 name:"保利袋",
                 price:"100元",
                 typeId:"5",
                 imgUrl:"../assets/Boxes_1.jpg"
             },  {
                 name:"零售/商店运营",
                 price:"100元",
                 typeId:"6",
                 imgUrl:"../assets/Boxes_1.jpg"
             },  {
                 name:"仓库设备",
                 price:"100元",
                 typeId:"7",
                 imgUrl:"../assets/Boxes_1.jpg"
             },  {
                 name:"设施维修",
                 price:"100元",
                 typeId:"8",
                 imgUrl:"../assets/Boxes_1.jpg"
             }, {
                name:"门卫用品",
                price:"100元",
                typeId:"8",
                imgUrl:"../assets/Boxes_1.jpg"
            }, {
                name:"安全产品",
                price:"100元",
                typeId:"8",
                imgUrl:"../assets/Boxes_1.jpg"
            },
           ]
        }
        
           }
}