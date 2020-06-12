
function test() {
    try {
        throw new SyntaxError('Message');

    } catch (e) {
        console.error('Error.prototype.name: ' + e.name);
        console.error('Error.prototype.message: ' + e.message);
        console.error('Error.prototype.description: ' + e.description);
        console.error('Error.prototype.number: ' + e.number);
        console.error('Error.prototype.lineNumber: ' + e.lineNumber);
        console.error('Error.prototype.columnNumber: ' + e.columnNumber);
        console.error('Error.prototype.toString(): ' + e.toString());
        console.error('Error.prototype.stack: ' + e.stack);
    }
}
test();


// Error.prototype.message			// Error message.
// Error.prototype.name			    // Error name.
// Error.prototype.description		// A non-standard Microsoft property for the error description. Similar to message.
// Error.prototype.number			// A non-standard Microsoft property for an error number.
// Error.prototype.fileName		    // A non-standard Mozilla property for the path to the file that raised this error.
// Error.prototype.lineNumber		// A non-standard Mozilla property for the line number in the file that raised this error.
// Error.prototype.columnNumber	    // A non-standard Mozilla property for the column number in the line that raised this error.
// Error.prototype.stack			// A non-standard Mozilla property for a stack trace.


// try ... catch

function parse(jsonString) {
    try {
        return JSON.parse(jsonString)
    } catch {
        return []
    }
}