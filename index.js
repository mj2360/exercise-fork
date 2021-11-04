const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

const firebase = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyCVxCsJ3J-lN-XCdwkNZu1NUMa_1pSmAfM",
  authDomain: "exercise-fork.firebaseapp.com",
  projectId: "exercise-fork",
  storageBucket: "exercise-fork.appspot.com",
  messagingSenderId: "509711547841",
  appId: "1:509711547841:web:9a05a76c284efb3a470340",
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index");
const articleRoute = require("./routes/article");
const createArticleRoute = require("./routes/createArticle");

app.use("/", indexRoute);
app.use("/", articleRoute);
app.use("/", createArticleRoute);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
