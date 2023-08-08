//We make use of the schemas in the index.js file under the sanity folder - don't confuse it 
//with the index.js file under the schemas folder. The index.js file under the sanity folder is

import { createSchema } from "sanity"

import product from "./product"
import banner from "./banner"


export const schemaTypes = [product, banner]

//now let's go back to our sanity desk

//what we just published in a database
//if you were working on mongoDB, it would take more time, but this as just taken few minutes
