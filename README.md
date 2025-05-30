# Maximum Profit Problem

Demo Link - https://maxprofit-demo.netlify.app/

Mr. X owns a large strip of land in Mars Land. For the purposes of this problem assume that he has infinite land capacity. On each parcel of he can choose to develop it as per his wishes. He can build either Theatres, Pubs or Commercial Park. Commercial Park houses 6 Commercial Spaces and 8 Screen Theatres.

- A Theatre takes 5 units of time to build and covers 2x1 parcel of land.
-  A Pub takes 4 units of time to develop and covers 1x1 parcel of land.
-  A Commercial Park takes 10 units of time to build and covers 3x1 parcel
of land.

Each period of time that a building is operational it earns him money.

- Theatre - $1500
- Pub - $1000
- Commercial Park - $3000

He cannot have two properties being developed in parallel in one unit of time.
- After n units of time where n is the input, he earns money based on which
properties have been developed.
- The output should be T for Theatre followed by number developed, P for Pub followed by number developed and C for Commercial Park followed
by number developed.

## Test Case - 1
- Time Unit:- 7
- Earnings:- $3000
- Solutions:- T: 1 P: 0 C: 0 , T: 0 P: 1 C: 0

![case-1](<TestCase1.png>)

## Test Case - 2
- Time Unit:- 8
- Earnings:- $4500
- Solutions:- T: 1 P: 0 C: 0

![alt text](<TestCase2.png>)
## Test Case - 3
- Time Unit:- 13
- Earnings:- $16500
- Solutions:- T: 2 P: 0 C: 0

![alt text](<TestCase3.png>)

## Test Case - 4
- Time Unit: 49
- Earnings: $324000
- Solutions: T: 9 P: 0 C: 0 , T: 8 P: 2 C: 0

![alt text](<TestCase4.png>)