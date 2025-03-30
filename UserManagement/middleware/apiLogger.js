const apilogger = (req, res, next) => {
    console.log("logging api request", req.url, req.method);
    // we have to override the res.send function 
    // Store original send method to capture response data
    const originalSend = res.send;
    // Not use this because arrow function doesn't have this object own
    // res.send = (body) => {
    //     console.log('logging api response',body,res.statusCode);   
    //     originalSend.call(this,body); // x causing error
    // }

    res.send = function (body) {
        console.log(`Response Data:`, body, res.statusCode);
        originalSend.call(this, body);
    };
    next();
}

module.exports = apilogger;