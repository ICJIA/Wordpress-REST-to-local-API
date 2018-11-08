const fs = require("nano-fs");

const json = [
  {
    data: "test data",
    dir: "./test/test1"
  },
  {
    data: "test2 data",
    dir: "./test/test2"
  },
  {
    data: "test3 data",
    dir: "./test/test3"
  }
];

const writeToFile = async (data = "Hello world", dir = "./test") => {
  const HTML = data;
  3;
  await fs.mkpath(dir); // Make sure path exists
  console.log("Saving:", `${dir}/index.html`);
  return fs.writeFile(`${dir}/index.html`, HTML, { encoding: "utf8" }); // Write to file
};

init = async function() {
  const myMap = await json.map(obj => {
    writeToFile(obj.data, obj.dir);
  });
  return myMap;
};

resolvePromises = async function(res) {
  await Promise.all(res);
  return;
};

init().then(promises => resolvePromises(promises));
