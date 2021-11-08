const express = require("express");

const router = express.Router();

const firestore = require("firebase/firestore");

const db = firestore.getFirestore();

router.get("/:id", (req, res) => {
  const postId = req.params.id;
  const blogpost = firestore.getDoc(firestore.doc(db, "blogpost", postId));
  blogpost
    .then((response) => {
      res.send(response.data());
    })
    .catch((error) => {
      res.send(`Nothing... sorry`);
    });
  res.send();
});

router.get("/", (req, res) => {
  res.send(`Please include an ID`);
});

module.exports = router;
