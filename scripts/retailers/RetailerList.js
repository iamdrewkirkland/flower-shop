import { useRetailers } from "./retailersProvider.js";
import { retailerHtml } from "./Retailer.js";
import { useDistributors } from "../distributors/distributorsProvider.js";

const contentTarget = document.querySelector("#container");

const render = (retailers) => {
  const distributors = useDistributors();
  contentTarget.innerHTML = retailers
    .map((retailer) => {
      const distributor = distributors.find(
        (distributor) => distributor.id === retailer.distributorId
      );
      return retailerHtml(retailer, distributor);
    })
    .join("");
};

export const RetailerList = () => {
  const retailers = useRetailers();

  render(retailers);
};
