import { getRetailers } from "./retailers/retailersProvider.js";
import { RetailerList } from "./retailers/RetailerList.js";
import { getDistributors } from "./distributors/distributorsProvider.js";

getRetailers()
    .then(getDistributors)
    .then(RetailerList)
