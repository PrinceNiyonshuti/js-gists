# Technical Assessment JavaScript

## Q1 . Ranking
Having a list of players of some games (Fortnite, Crossfire and Minecraft) with their respective points in each games, the task is to compute total points and ranks of all players. And finally display all players sorted by points. 

Rank of Players is computed using below rules. 
1. If total points are different, then players with higher points gets better rank.
2. If total points are same, then players with higher points in Fortnite gets better rank.
3. If total points are same and points in Fortnite are also same, then students with better points in Minecraft gets better rank.
4. If total points are same and points in both Fortnite and Minecraft are also same, then players with better points in Crossfire gets better rank.
5. If all points (total, Fortnite, Crossfire and Minecraft) are same, then any player can be assigned better rank.


```js
[
{
	username: “user5”,
	fortnite: 435,
	minecraft: 894,
	crossfire: 9093,
},
{
	username: “use2”,
	fortnite: 530,
	minecraft: 1149,
	crossfire: 5904,
},
{
	username: “user4”,
	fortnite: 3930,
	minecraft: 2749,
	crossfire: 8004,
},
{
	username: “user6”,
	fortnite: 9230,
	minecraft: 450,
	crossfire: 300,
},
{
	username: “user7”,
	fortnite: 2701,
	minecraft: 7620,
	crossfire: 5804,
},
{
	username: “user”,
	fortnite: 9130,
	minecraft: 1649,
	crossfire: 5704,
}

]
```


## Q2 . Matrix product
Considering the following matrix a and b find the product of the 2

    Matrix A               Matrix B
    5  3  2                8  6  5
    4  8  6                5  3  1
    1  4  6                9  3  7
