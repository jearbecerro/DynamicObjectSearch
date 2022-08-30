
export function DynamicSearch(toSearch, list){
    try {
        var query = []
        const keys = Object.keys(toSearch)
        const values = Object.values(toSearch)
        for(let i=0; i<keys.length; i++){
            const key = keys[i]
            var value = values[i]
            value = Array.isArray(value)? value : [value]
            if(value!==""){
                query.push({
                        Field: [key], Values: value
                })
            }   
        }
        console.log(query)
        Array.prototype.flexFilter = function(query) {
  
            var matchesFilter, matches = [], count;
            
            matchesFilter = function(item) {
              count = 0
              for (var n = 0; n < query.length; n++) {
                if (query[n]["Values"].indexOf(item[query[n]["Field"]]) > -1) {
                  count++;
                }
              }

              return count === query.length;
            }
          
            for (var i = 0; i < this.length; i++) {
              if (matchesFilter(this[i])) {
                matches.push(this[i]);
              }
            }
          
            return matches;
          }
        console.log("was here")
        console.log(list.flexFilter(query))
        return list.flexFilter(query)      
      } catch (err) {
        console.log(err.message)
        return []
      }
}