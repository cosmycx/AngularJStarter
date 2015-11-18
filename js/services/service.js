//sample service
sap.service('dataServ', function(){//-----------------------

        var tags = [];
        var names = [];
        
        var setTagsAndNames = function(inTags, inNames){

            tags = inTags;
            names = inNames;

            //broadcasting change in filters
            //$rootScope.$broadcast('mrktFB'); 
        }

        var getTags = function(){
        return tags;
        }
        var getNames = function(){
        return names;
        }

     return {
        setTagsAndNames : setTagsAndNames,
        getTags : getTags,
        getNames : getNames
    }

});//-----------------------------------------------------------------
