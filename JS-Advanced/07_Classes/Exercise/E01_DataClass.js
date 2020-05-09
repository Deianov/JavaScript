class Request {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

// equivalent with function
function http(method, uri, version, message) {
    return {
        method,
        uri,
        version,
        message,
        response: undefined,
        fulfilled: false
    }
}

// test
let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
