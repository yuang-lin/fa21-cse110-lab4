1: It will output 3, because the scope of var is the whole function and console.log(i) is to display variable i, and i is the index of loop. i should be smaller than prices length which is 3, so when i=3, the loop stop, and the value of i is 3.\
2: It will output 150, because the scope of var is the whole function and in the final loop, our price[i] is 300, and 300 * 0.5 = 150.\
3: It will output 150, because the scope of var is the whole function and in the final loop, our discountedPrice is 150 and Math.round(150*100)/100 = 150.\
4: It will return the array of discounted [50,100,150], because discounted is var and the scope is the whole function, so we can get the array of final price.
5: error, because i is defined in the for block, out of the block, i is not defined.\
6: error, because discountedPrice is defined in the for block, out of the block, discountedPrice is not defined.\
7: It will output 150, because the variable type is not const or let, so we have already defined finalPrice and can use it out of the block.\
8: It will return the array of discounted [50, 100, 150], because discounted is a let variable, and return discounted is in the block, so the scope is correct.\
9: error, because i is defined in the for block, and i's type is let, so out of the block, i is not defined.\
10: It will output 3, because length is const variable, and console.log(length) is in the block that length defined, so it can output 3.\
11: It will return the array of discounted [50, 100, 150], because const can not be reassigned or redeclared, however, we can push value into the const array.\
12: a: student.name\
    b: student["Grad Year"]\
    c: student.greeting()\
    d: student["Favorite Teahcer"].name\
    e: student.courseLoad[0]\
13: a: 32, because 2 converts to string '2' then '3'+'2' = '32'\
    b: 1, because 3 converts to integer 3, then 3-2 = 1\
    c: 3, because null converts to value 0 then 3+0=3\
    d: 3null, because '3' is string, null converts to string 'null' then we got '3null'\
    e: 4, because truen converts to 1 then 1+3 = 4\
    f: 0, false converts to 0, null converts to 0, then 0+0=0;\
    g: 3undefined, because undefined converts to string 'undefined' then add string we have '3undefined'\
    h: NaN, because undefined converts to NaN, then '3'-NaN is NaN\
14: a: true, because '2' becomes integer 2 then 2 > 1\
    b: false, because by dictionary order '2' > '12'\
    c: true, because '2' becomes integer 2, then 2 == 2\
    d: false, because each of them is a different type\
    e: false, because true becomes 1, and 1!=2\
    f: true, because Boolean(2) becomes true, then they have same type and same value true, so true===Boolean(2)\
15: == is used to compare two variables, but it ignores the datatype of variable (it will make type correction); === is used to compare two variables, but this operator also checks datatype and compares two values.\
17:

