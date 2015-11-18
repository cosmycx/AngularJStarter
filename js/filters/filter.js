//sample filter selecting any data tags from data set
sap.filter('filterByTags', function() {
    return function filterByTags( haystack , needle ) {
        var result = [];
        var i,j,k,pushed;

        //console.log( 'haystack: '+ haystack +'  -  needle: '+needle);

        if (needle.length===0) result = haystack;

        	else{	

		        for (i in haystack) {
		        	pushed = false;

		        	for (j in haystack[i].tags){

		        	 	//console.log('haystack['+i+']'+'.tags['+j+']:'+haystack[i].tags[j]);
		        	 	if (pushed) break;

		        	 	for (k in needle) {

		        	 		//console.log('needle['+k+']:'+needle[k])

		        	 		if (haystack[i].tags[j]==needle[k]) {
		        	 			
		        	 			if (!pushed) {
		        	 				result.push(haystack[i]);
		        	 				//console.log('push:'+i);
		        	 				pushed = true;
		        	 			} else break;

		        	 		} 		

		        	 	}

		        	 }
		        	 
		        }

		    }//end else

		    //var n; for (n in result) console.log(result[n].tags)

        return (result);
    };
});