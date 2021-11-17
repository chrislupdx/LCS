//This is hopefully two JS implementations of LCS (memoized vs brute force)
//this is the tabulated implemenation of LCS
//X[1...m] and Y[1...n] respectively are arrays respressenting strings
function tLCS(X, Y)
{
    console.log("tLCS start");
    //C is a 2 dimensional array of x columns and y rows
    m = X.length;
    n = Y.length;
    C = makeArr(m, n);
    //C = new Map();

    for(let i = 0; i < m; i++)
    {
        for (let j = 0; j < n; j++)
        {
            C[i,j] = 0;
        }
    }
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
    for(let i = 0; i < result.length; i++)
    {
        result[i] = new Array(y);
    }
    //for(var i = 0; i < x + 1; i++) 
    //{
    //    result[i] = new [y];
    //}a
    //let arr = new Array(x);
    //for (var i = 0; i < y; i++)
    //{
    //    arr[i] = new Array(y); 
    //} 
    console.log("new arrr:");
    console.log(result);

    //let arr = Array(x).fill().map(() => Array(x));
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
