# book_store
图书商城，仿照新华书店官网，为前后端分离项目，用于个人练手

## 一、需求分析
1、拥有用户模块，能做到基本的登录、注册、保存一定的用户信息，修改用户信息等

2、能够展示书籍信息，价格信息，能将书籍加入到购物车并进行结算

3、...

## 二、系统设计

+ 前端
    + 开发框架: vue2.0

+ 后端
  + 开发框架: springboot

+ 数据库
  + mysql8.0

## 三、数据库设计

+ 数据库
  + book_store
  
+ 表
  + book
  + clazz
  + car
  + user
  + user_order
  + order
  
+ 表结构
  + book
    | 字段   | 类型       | 描述       |
    | :---: | :---:      | :---:     |
    |  id   | int        | 主键，自增 |
    |  clazz_id  |  	varchar(6)  |  用于描述书籍的类型 |
    | img   | varchar(200) | 书籍的图片地址 |
    | depict    | varchar(50)    |  用于存放书籍描述信息 |
    | price      | varchar(8) | 用于存放书籍的价格|
    | author  | varchar(80) | 用于存放书籍的作者名称 |
    
  + clazz
    
    |   字段    |    类型     |    描述    |
    | :-------: | :---------: | :--------: |
    |    id     |     int     | 主键，自增 |
    |   name    | varchar(20) | 类别的名称 |
    | father_id |     int     | 父类别的id |
    |  son_id   |     int     | 子类别的id |
    
   + car
    
      |  字段   | 类型 |        描述        |
      | :-----: | :--: | :----------------: |
      |   id    | int  |     主键，自增     |
      | book_id | int  |       书籍id       |
      | user_id | int  |  购物车所属用户id  |
      |   num   | int  | 单件商品的购买数量 |

	+ user

    |     字段      |    类型     |    描述    |
    | :-----------: | :---------: | :--------: |
    |      id       |     int     | 主键，自增 |
    |   username    | varchar(20) |  用户昵称  |
    |   password    | varchar(20) |  用户密码  |
    | user_order_id |     int     | 用户订单id |
  
  + user_order
  
      |   字段   | 类型 |     描述     |
      | :------: | :--: | :----------: |
      |    id    | int  |  主键，自增  |
      | order_id | int  | 订单子项的id |
      
  + order 

    |  字段   | 类型 |    描述    |
    | :-----: | :--: | :--------: |
    |   id    | int  | 主键，自增 |
    | book_id | int  |   书籍id   |
    |   num   | int  |  书籍数目  |
