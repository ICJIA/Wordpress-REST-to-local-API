const fs = require("nano-fs");
const axios = require("axios");
const rimraf = require("rimraf");
var path = require("path");

const config = {
  sitemetaUrl: "https://cjcc.icjia-api.cloud/wp-json/wp/v2/sitemeta/",
  localApiDirectory: "./api"
};

/**
 * For sitemeta construction, see: https://github.com/ICJIA/cjcc-wordpress-client/blob/master/wordpress/icjia-functions.php
 */
const sitemeta = async function() {
  const { data } = await axios.get(config.sitemetaUrl);
  return data;
};

const writeToFile = async (filePath, apiFullUrl) => {
  const { data } = await axios.get(`${apiFullUrl}`);
  await fs.mkpath(path.resolve(filePath)); // Make sure path exists

  console.log("Save to file: ", `${filePath}/index.json`);
  const myPath = path.resolve(`${filePath}/index.json`);
  await fs.writeFile(
    path.resolve(`${filePath}/index.json`),
    JSON.stringify(data),
    {
      encoding: "utf8"
    }
  ); // Write to file
};

// clean directory
rimraf.sync(path.resolve(config.localApiDirectory));

// get sitemeta, then get each post/page type
sitemeta().then(res =>
  res.map(r => {
    writeToFile(config.localApiDirectory + r.route, r.apiFullUrl);
  })
);
