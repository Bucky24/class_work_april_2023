Write a query that prints a list of employee names (i.e.: the name attribute) from the Employee table in alphabetical order.
Input Format

The Employee table containing employee data for a company is described as follows:
Column | Type
id     | int
name   | String
month  | int
salary | int

where id is an employee's ID number, name is their name, months is the total number of months they've been working for the company, and salary is their monthly salary.
Sample Input
id  |  name      |  month  |  salary
1   |   john     |  14     |    1985
2   |   sam      |  12     |    3896
3   |   sarah    |  3      |    5000
4   |   amanda   |  24     |    2000
5   |   sam      |  1      |    1000

Sample Output
amanda
john
sam
sarah

----------------------------
select name from Employee group by name order by name asc;