# Write your MySQL query statement be > 1

SELECT email FROM person GROUP BY email HAVING COUNT(*)> 1;