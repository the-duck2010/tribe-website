var app = require("express");

if ("firsttime" == "true") {
  var appdata = "Waiting";
}

function findappdata(type) {
  if ((app = "required")== type) {
      appdata = "Succesfully Verified User";
      window.open("home.html");
  }
  if ((app = "required")!= type) {
      appdata = "Not Verified";
      window.close();
  }
}