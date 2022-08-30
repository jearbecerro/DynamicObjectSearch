# Install
npm install @jearbecerro/dynamicsearch
# Usage
import { DynamicSearch } from "@jearbecerro/dynamicsearch"
# Parameters
DynamicSearch(toSearch, data)
#
The fields you want to search or filter.
toSearch = 
    {
        name: "NAME"
    }
#
The data from your database.
data = 
    [
        {
            name: "NAME",
            sex: "MALE"
            .......
        }
    ]
# Example
DynamicSearch({ name: "NAME" }, data)