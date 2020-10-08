class GeneralResponse {
    constructor(message,result,statusCode){
        this.message = message;
        this.result = result;
    }
}

class GeneralError {
    constructor(message,result,statusCode){
        this.message = message;
        this.result = result;
    }
}


module.exports = {
    GeneralResponse,
    GeneralError
}