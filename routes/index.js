const express = require("express");

const router = express.Router();

const firebase = require("firebase/firestore/lite"); //fix

const db = firebase.getFirestore(); //fix
const blogpost = db.collection("blogpost"); //fix

router.get("/", (req, res) => {
  const blogpostArray = [];
  //push document from blogpost into blogpost Array. . .
  res.send(blogpostArray);
});

module.exports = router;
