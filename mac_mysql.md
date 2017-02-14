打开一个终端窗口

输入 sudo /usr/local/mysql/support-files/mysql.server stop

输入 sudo /usr/local/mysql/bin/mysqld_safe --skip-grant-tables

这时不要关窗口，再打开一个终端窗口

输入 sudo /usr/local/mysql/bin/mysql -u root

这时候会出现mysql>了，输入use mysql

最后输入 update user set authentication_string=password('9527') where user='root';
