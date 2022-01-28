var app = require("express");

if ("firsttime" == "true") {
  var appdata = "Waiting";
}

function findappdata() {
  if (app != "required") {
      appdata = "Succesfully Verified User";
        window.open("home.html");
  }
    if (app != "required") {
      appdata = "Not Verified";
      window.close();
  }  
}