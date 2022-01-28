var app = require("express");
var reloaddata = ("false");

if ("firsttime" == "true") {
  var appdata = "Waiting";
}

function findappdata(type, tf) {
  if ((app == "required")& type != "Forced") {
      appdata = "Succesfully Verified User";
        window.open("home.html");
  }
    if (((app == "required")|| type == "Forced")|| tf == "false") {
      appdata = "Not Verified";
      window.close();
  }  
}