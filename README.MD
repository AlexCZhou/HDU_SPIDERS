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
  
  ---
* 函数作用
  * `get_one_page(url)`: 获取某个页面的源码
  * `parse_showproblem(Pro_ID)`:解析问题页，获取数据
  * `parse_discuss_page(Pro_ID)`: 从源码中解析discuss页面，获取discuss
  * `create_dir(path)`: 创建目录，若存在，则无操作
  * `get_page(Pro_ID)`: 根据问题ID求页码
  * `write_to_discuss(path, page, text)`: 把discuss写入相对应页码的txt
  * `create_database(database)`: 创建数据库
  * `create_table(database, table)`: 创建数据表
  * `write_to_sql(database, table, data)`: 往表中写入数据
  * `input_problem()`: 输入问题号
  * `specify_problem(Pro_ID)`: 传入问题号
  * `write_to_file(item)`: 将数据写入文本文件
  * `write_to_json(content)`: 将数据写入json
  * `write_to_csv(content)`: 将数据写入csv文件

