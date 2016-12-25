export function regArgRetrieveFuncs() {
    
    //
    document.lenOfArgs = function() {
        console.log("Not implemented.");
    }
    
    
    // 
    document.lenOfArgsWithStr = function(string) {
        console.log("Not implemented.");
    }
    
    
    //
    document.getAllArgs = function() {
    	var eles = document.querySelectorAll('[id^="args::"]');
    	var args = [];
    	for (var i=0; i<eles.length; i++) {
    		args[i] = eles[i].value.split(",");
    	}
    	return args;
    }

    //
    document.getArgByIndex = function(index) {
    	var val = document.getAllArgs()[index];
    	return val;
    }
    
    //
    document.getArgByName = function(name) {
        console.log("Not implemented.");
    }
    
    //
    document.getAllArgByName = function(name) {
        console.log("Not implemented.");
    }   
    
}
