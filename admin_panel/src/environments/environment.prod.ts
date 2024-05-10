import packageInfo from "../../package.json";

export const environment = {
  appVersion: packageInfo.version,
  websiteUrl: "https://jhumkaplanet.com/catalogoue?productId=",
  baseUrl: "./v1/admin/",
  production: true,
};
