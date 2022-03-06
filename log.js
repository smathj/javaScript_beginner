function log(param) {
  console.log("------------------------------------------");
  console.log(param);
}

function dir(param) {
  console.log("------------------------------------------");
  console.dir(param);
}

module.exports = { log, dir };
