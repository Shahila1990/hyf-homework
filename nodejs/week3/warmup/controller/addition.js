const addition =(req,res)=>{
    const { firstParam, secondParam } = "firstParam"  in req.query? req.query : req.body;
    let first;
    let second;
    
    if(Array.isArray(firstParam)){
        first= firstParam.map((i)=> Number(i)).reduce((a,b)=> a+b,0)
    }
    else{
        first = Number(firstParam)
    }
    //change to number array using map and add all elements
    if (Array.isArray(secondParam)) {
      second = secondParam
        .map((i) => Number(i))
        .reduce((a, b) => a + b, 0);
      
    
    } else {
      second = Number(secondParam);
    }
    if(isNaN(first)|| isNaN(second)){
       return res.status(400).json("Please provide valid number")
    }
    const add = first + second
    res.json(add);
}

module.exports = addition
