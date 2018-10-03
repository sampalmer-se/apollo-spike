import axios from "axios";

export const getSaleCards = (source, args) => {
  return axios.get("http://localhost:3000/salecards").then(_ => _.data);
};

const mapSaleLabelData = saleCard => {
  console.log(saleCard);
  saleCard["saleLabels"] = getSaleLabels(saleCard["saleLabelId"]);
};

export const getSaleLabels = source => {
  return axios
    .get(`http://localhost:3000/salelabel/${source.saleLabelId}`)
    .then(l => l.data.saleLabels);
};

export const getPromotion = source => {
  return axios
    .get(`http://localhost:3000/promotion/${source.promotionId}`)
    .then(_ => _.data);
};
