//This is hopefully two JS implementations of LCS (memoized vs brute force)
//this is the tabulated implemenation of LCS
//X[1...m] and Y[1...n] respectively are arrays respressenting strings
function tLCS(X, Y)
{
    console.log("tLCS start");
    
    console.log("X is ", X);
    console.log("Y is ", Y);
    //C is a 2 dimensional array of x columns and y rows
    let m = X.length;
    let n = Y.length;
    let C = makeArr(m, n);
    console.log(C);
    //console.log("new array:", C);

    //for(let i = 0; i < m; i++)
    //{
    //    for (let j = 0; j < n; j++)
    //    {
    //        C[i,j] = 0;
    //    }
    //}
    //print(C, m, n);
    //console.log(C);

    for (let i = 1; i < m; i++) //for X.length
    {
        for (let j = 1; j < n; j++) // for Y.length
        {
            if(X[i] == Y[j])
            {
                C[i,j] = C[i - 1, j - 1] + 1; //increment the match
            }
            else
                C[i, j] = Math.max(C[i, j - 1], C[i - 1, j]);
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
//is this necessasry? lf buildin
function print(C, m, n)
{
    for(let i = 0; i < m; i++)
    {
        for (let j = 0; j < n; j++)
        {
            console.log(C[i][j]);
            //let thang = C[i,j]);
            //process.stdout.write(C[i,j]);
            //console.log(C[i,j]);
            //if (j == (n - 1))
            //{
            //    console.log('\n');
            //}
        }
    }
}
test();
