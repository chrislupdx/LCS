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

    //C is a 2 dimensional array of x columns and y rows
    let C = new Array(n + 1);  //createa a base array the length of Y
    for(let i = 0; i < C.length; i++)
    {
        //create an array the length of X
        C[i] = new Array(m + 1);
    }

    //zero the entire taable
    for(let i = 0; i < (n + 1); i++) 
    {
        for(let j = 0; j < (m + 1); j++)
        {
            C[i][j] = 0;
        }
    }
    console.log(C);
    
    //this is tough
    for(let i = 1; i <= n; i++) //for length of y
    {
        for(let j = 1; j <= m; j++) //for length of x
        {
            //console.log("i is", i, " j is ", j);
            //if(X[j - 1] == Y[i - 1]) 
            if(Y[i - 1] == X[j - 1])
            {
                //console.log('congruent X[i]', X[i], ' Y[j]', Y[j]);
                C[i][j] =  C[i - 1][j - 1] + 1;
            }
            else
            {
                //console.log('incongruent, X[i]', X[i], ' Y[j] ', Y[j], "where j is", j);
                C[i][j] = Math.max(C[i][j - 1], C[i - 1][j]);
            }
        }
    }
    return C;
}

//C[0..m, 0..n], X[1..m], Y[1..n] i = m, j = n
function backtrack(C, X, Y, i, j)
{
    if(i == 0 | j == 0)
    {
        console.log("i is ", i, "j is ", j);
        return;
    }
    if(X[i - 1] == Y[j - 1]) //?
    {
        return backtrack(C, X, Y, i - 1, j - 1) + X[i - 1]; //??
    }
    if(C[i][j - 1] > C[i - 1][j])
    {
        return backtrack(C, X, Y, i, j - 1);
    }
    return backtrack(C, X, Y, i - 1, j);
}

//this is the interface funciton
function test()
{
    X = "mzjawxu";
    Y = "xmjyauz";
    C = tLCS(Y, X); //ehhh?
    console.log(C);
    //backtrack(C, X, Y, i ,j); //figure out i and j are in the right direciotn
    //console.log('backtrack end');
}

//this is the recursive implementation of LCS
function rLCS()
{
    console.log("rLCS");
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
