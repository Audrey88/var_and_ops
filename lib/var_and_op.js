/**
 * Check the equality of two parameters
 * Two parameters are equals, only if they have
 * the same type, and same value.
 * @param  {[type]}
 * @param  {[type]}
 * @return {Boolean}
 */
var isEquals = function(a, b) {
	return a === b;
}


/**
 * Add 10 and then multiply the result by 5
 * @param  {[type]}
 * @return {[type]}
 */
var add10AndMultiplyBy5 = function(a) {

	return (a + 10) * 5;
}

/**
 * Should compute the exponentiel of the first number by the second
 * @param  {[int]} number
 * @param  {[int]} factor
 * @return {[int]} result
 */
var computeExponention = function(a, b) {

	return  a = Math.exp(b);

}



/**
 * Computes the arithmetic sum of all the arguments
 * @return {[integer]}
 */
var computeSum = function() {

	var result = 0;

	for (i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return parseInt(arguments[i]);

}


/**
 * It  computes and return the double of the specified number
 * @param  {[number]}
 * @return {[number]}
 */
var shouldComputeDouble = function(number){
	var a = number*2;

    var multiply = function(b){
    	var a = b*2;
    	return a;
    }
    
    return a;
}





module.exports.isEquals = isEquals;
module.exports.sum = computeSum;
module.exports.add10AndMultiplyBy5 = add10AndMultiplyBy5;
module.exports.exponentiel = computeExponention;
module.exports.computeDouble = shouldComputeDouble;
