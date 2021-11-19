//This is hopefully two JS implementations of LCS (memoized vs brute force)
//this is the tabulated implemenation of LCS
///X[1...m] and Y[1...n] respectively are arrays respressenting strings

function tLCS(Y, X) //this is the brute force (non-memoized version)
{
    console.log("tLCS start");
    console.log("X is ", X);
    console.log("Y is ", Y);

    let m = X.length;
    let n = Y.length;

    //C is a 2 dimensional array of x columns and y rows
    C = new Array(n + 1);  //createa a base array the length of Y
    for(let i = 0; i < C.length; i++)
    {
        //create an array the length of X
        C[i] = new Array(m + 1);
    }

    for(let i = 0; i < (n + 1); i++) 
    {
        for(let j = 0; j < (m + 1); j++)
        {
            C[i][j] = 0;
        }
    }

    //This fills the table iteratively
    for(let i = 1; i <= n; i++) //for length of y
    {
        for(let j = 1; j <= m; j++) //for length of x
        {
            //console.log("i is", i, " j is ", j);
            if(Y[i - 1] == X[j - 1])
            {
                //console.log('congruent X[i]', X[i], ' Y[j]', Y[j]); //uncomment these to make sense of stuff
                C[i][j] =  C[i - 1][j - 1] + 1;
            }
            else
            {
                C[i][j] = Math.max(C[i][j - 1], C[i - 1][j]);
            }
        }
    }
    return C;
}

//this is the interface funciton
function test()
{
    const args = process.argv.slice(2)
    let X = args[0];
    let Y = args[1];
    console.log("X is", X," and Y is ", Y);
    let startTime = performance.now();
    let C = tLCS(Y, X); //this is the brute force iterated version
    let result = C[Y.length][X.length];
    let endTime = performance.now();
    let delta =  endTime - startTime; //outputs in milliseconds i belive
    console.log("answer is ", result, "elapsed time is ", (delta * 0.001), " seconds which is type ");
    console.log(C);
}
test();
