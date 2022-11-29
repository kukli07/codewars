/*
Parameters: Array with Strings; length always = 10; 0 <= x,y <= 4
Returns: Integer; Sum of total points

1. The function takes in a parameter called games.
2. We map through the scores in the games array and add the respective points.
3. We then add all the points together and return the result. 
*/

function points(games) {
    const pointsOfX = games.map((score) => {
        // If X won, return 3.
        if (Number(score[0]) > Number(score[2])) {
            return 3;
        }
        // If X lost, return 0.
        if (Number(score[0]) < Number(score[2])) {
            return 0;
        }
        // If X drew, return 1.
        return 1;
    });
    // Add all the points together.
    return pointsOfX.reduce((prev, curr) => prev + curr, 0);
}

// Examples:
// points(["1:0", "2:0", "0:3", "3:3", "1:1", "4:0", "1:2", "0:3", "1:0", "2:2"])
// returns 3 + 3 + 0 + 1 + 1 + 3 + 0 + 0 + 3 + 1 = 16
