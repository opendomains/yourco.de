const isValidDomain = require("is-valid-domain")
const cnames = require("./../cnames.js")
const reserved = require("./../reserved.js")

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};

let exitCode = 0

Object.keys(cnames)
	.forEach(
		(key) => {
			if(reserved.contains(key)) {
				console.error(`
					ERROR: Key '${key}' is reserved.
				`)
				exitCode = 1
			} else {
				if(!isValidDomain(cnames[key].split('/')[0], {
					wildcard: false
				})) {
					console.error(`
						ERROR: Domain '${cnames[key]}' is not a valid domain. 
					`)
					exitCode = 1	
				}
			}			
		}
	)

process.exit(exitCode)
