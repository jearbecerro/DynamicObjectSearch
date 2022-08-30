# Install
npm install @jearbecerro/dynamicsearch
# Usage
import { DynamicSearch } from "@jearbecerro/dynamicsearch"
# Parameters
DynamicSearch(toSearch, data)
#
The fields you want to search or filter.
"toSearch" type Object
"data" type Array of Objects
# Example
DynamicSearch({ name: "NAME" }, data)