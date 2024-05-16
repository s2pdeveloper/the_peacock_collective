import packageInfo from "../../package.json";

export const environment = {
  appVersion: packageInfo.version,
  websiteUrl: "./api/v1/admin/",
  baseUrl: "./api/v1/admin/",
  production: true,
};
