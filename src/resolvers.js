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

export const hackdaySearch = (_, args) => {
  console.log(args);
  const axiosInstance = axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "se-api-token": "156806cc-80cf-449d-b0ca-86c9252a36a1"
    }
  });
  return axiosInstance
    .post("http://localhost:8080/flashsales/v3/search/hackday", args)
    .then(_ => _.data);
};
