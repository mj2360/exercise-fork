const express = require("express");

const router = express.Router();

const firebase = require("firebase/firestore/lite"); //fix

const db = firebase.getFirestore(); //fix

router.get("/", (req, res) => {
  const blogpost = firestore.getDocs(firestore.collection(db, "blogpost"));

  const blogpostArray = [];

  blogpost
    .then((response) => {
      response.forEach((doc) => {
        blogpostArray.push(doc.data());
      });
      return res.send(blogpostArray);
    })
    .catch(function (error) {
      console.log("Error:", error);
      return res.end(error);
    });
});

module.exports = router;
