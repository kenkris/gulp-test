
/**
 *
 *
 *
 *
 * Sometih else's comments
 */




/**
*  Validation functions
*
*/


/**
* Check a password according to these rules: Rules: 8-24 digits, must have a upper and lower case char and may not contain consecutive number more than 2 digits long.
*/
function isPassword(password){

	if(password.search(/(?=^.{8,24}$)(?=.*\d)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/) == -1){
		return false;
	}
	else{
		//  Check consecutive numbers
		var passwordArr = password.split("");
		var passwordLength = password.length;

		for(var i = 0; i < passwordLength; i++){

			var val = parseInt(passwordArr[i]);

			if(!isNaN(passwordArr[i])){
				if(passwordArr[i+1] != undefined && parseInt(passwordArr[i+1]) == val+1 && passwordArr[i+2] != undefined && parseInt(passwordArr[i+2]) == val+2){
					return false;
				}
				else if(passwordArr[i+1] != undefined && parseInt(passwordArr[i+1]) == val-1 && passwordArr[i+2] != undefined && parseInt(passwordArr[i+2]) == val-2){
					return false;
				}
			}
		}
		return true;
	}
}


/**
 * Email validation
 */
function validEmail(sEmail){

 	var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(sEmail);
}

/**
 * Check if a string starts with http or https and has ://
 * Not bulletprof since it does not check the url againt dns. Better than nothing.
 * @author kehk@stofa.dk
 * @return Boolean
 */
function isHttpUrl(sUrl){

	var regex = /^(https|http):\/\//;
	return regex.test(sUrl);
}







