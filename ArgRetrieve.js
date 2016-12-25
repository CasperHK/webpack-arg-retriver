export function regArgRetrieveFuncs() {
    
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
    document.lenOfArgs = function() {
        var eles = document.querySelectorAll('[id^="args::"]');
        return eles.length;
    }
    
    // 
    document.lenOfArgsWithStr = function(string) {
        console.log("Not implemented.");
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
    document.getAllArgsByName = function(name) {
        console.log("Not implemented.");
    }   
    
}
