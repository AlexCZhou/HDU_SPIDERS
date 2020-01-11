# HDU_SPIDERS

### 运行前的准备工作
* 包含的第三方库
  * pymysql
  * requests
  * bs4
  * selenium 
  * lxml
* 一些其他的准备工作  
  * *打开服务mysqld*  
  * *安装chromedriver并将其添加至环境变量* *[chromedriver](https://sites.google.com/a/chromium.org/chromedriver/home)*  

- - -
* 常见错误
  * `pymysql.err.ProgrammingError: (1007, "Can't create database 'spiders'; database exists")`  
  如果需要多次使用此脚本  
  注释掉代码中的  
  `create_sql() #第一次创建时使用`
  * `pymysql.err.OperationalError: (1045, "Access denied for user 'root'@'localhost' (using password: YES)")`  
  请在源代码中设置您数据库的用户名和密码