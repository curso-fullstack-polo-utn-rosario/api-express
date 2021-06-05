function logger(request, response, next) {

    console.log('request recibido', request.path);
    next();
}


function validate(request, response, next) {
    console.log(request.headers);
    if (!request.headers['token']) {
        response.status(401).json({error: 'Unauthorized'});
    } else {
        next()
    }
    
}

module.exports = {
    logger,
    validate
};