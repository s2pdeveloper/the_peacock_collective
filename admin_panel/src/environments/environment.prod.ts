import packageInfo from "../../package.json";

export const environment = {
  appVersion: packageInfo.version,
  websiteUrl: "./v1/admin/",
  baseUrl: "./v1/admin/",
  production: true,
};
