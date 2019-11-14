import Mock from 'mockjs';
import {login , login1 }from './home';
import {getDetailTypeList ,getMainTypeList}from './detail';
  Mock.mock('/login', 'get', login);
  Mock.mock('/login1', 'post', login1);
  Mock.mock('/getDetailTypeList', 'post', getDetailTypeList({typeName:"detail"}));
  Mock.mock('/getMainTypeList', 'post', getMainTypeList({typeName:"main"}));