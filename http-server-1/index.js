const express = require("express")

function calculateSum(n){
    let ans = 0;
    for(let i = 1; i <= n; i++){
        ans = ans + i;
    }
    return ans;
}

const app = express();

app.get("/", function(req, ress){
    const n = req.query.n;
    const ans = calculateSum(n);
    ress.send(ans.toString());
})

app.listen(3000);