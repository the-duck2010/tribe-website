var app = require("express");
var appdata = "";
function spstart(appdataset) {
  //credit: Trevor Watkins, SP Engine
  if (appdata != appdataset) {
    appdata = appdataset;
  }
  console.log("Engine INT");
  if (appdata == app) {
    stop();
    window.close();
  }
  console.log("Attempt Blocked");
  if (app == "required:express") {
    if (appdata != "null") {
      return "allow";
      window.close();
      window.open("home.html");
      console.log("User Verified");
    }
  }
}
