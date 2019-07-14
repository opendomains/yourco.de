const isValidDomain = require("is-valid-domain")
const cnames = require("./../cnames.js")
const reserved = require("./../reserved.js")

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};

Object.keys(cnames)
	.forEach(
		(key) => {
			if(reserved.contains(key)) {
				console.log(`
					ERROR: Key '${key}' is reserved.
				`)
			} else {
				if(!isValidDomain(cnames[key].split('/')[0], {
					wildcard: false
				})) {
					console.log(`
						ERROR: Domain '${cnames[key]}' is not a valid domain. 
					`)	
				}
			}			
		}
	)
