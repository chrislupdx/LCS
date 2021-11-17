//This is hopefully two JS implementations of LCS (memoized vs brute force)
//this is the tabulated implemenation of LCS
///X[1...m] and Y[1...n] respectively are arrays respressenting strings
function tLCS(Y, X)
{
    console.log("tLCS start");
    console.log("X is ", X);
    console.log("Y is ", Y);

    let m = X.length;
    let n = Y.length;
    let C = new Array(n + 1); //C is a 2 dimensional array of x columns and y rows
    row = C.length;
    
    for(let i = 0; i < C.length; i++)
    {
       C[i] = new Array(m + 1);
    }
    
    for(let i = 0; i < (n + 1); i++) 
    {
        for(let j = 0; j < (m + 1); j++)
        {
            C[i][j] = 0;
        }
    }
    console.log(C);
}

//this is the recursive implementation of LCS
function rLCS()
{
    console.log("rLCS");
}

//this is the interface funciton
function test()
{
    //generate new stuff
    X = "abc";
    Y = "bcde";
    tLCS(X, Y);
}
//produce a 2-d array of the 2 strings x and y
function makeArr(x, y)
{
    //result = [];
    let result = new Array(x);
    row = result.length;
    for(let i = 0; i < result.length; i++)
    {
        result[i] = new Array(y);
    }

    for(let i = 0; i < x; i++) //i think =
    {
        for(let j = 0; j < y; j++)
        {
            result[i][j] = 0;
        }
    }
    //console.log("start");
    //console.log(result);
    //console.log("end");
    return result;
}
test();
