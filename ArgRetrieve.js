export function regArgRetrieveFuncs() {
    document.getAllArgs = function() {
    	var eles = document.querySelectorAll('[id^="args::"]');
    	var args = [];
    	for (var i=0; i<eles.length; i++) {
    		args[i] = eles[i].value.split(",");
    	}
    	return args;
    }

    document.getArgByIndex = function(index) {
    	var val = document.getAllArgs()[index];
    	return val;
    }
}
