const express = require("express");

const router = express.Router();

const firestore = require("firebase/firestore/lite");

const db = firebase.getFirestore();

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
