const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
        <h1>Create Article</h1>

        <form>
            <div style="
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;
                max-width: 325px;
            ">
            <label for="articleTitle">
                Article Title
            </label>
            <input
                type="text"
                name="articleTitle"
                placeholder="type article title..."
            />
            </div>
            <button type="submit">Submit</button>
        </form>
    `);

  const firestore = require("firebase/firestore");

  const db = firestore.getFirestore();

  router.get("/", (req, res) => res.send(form));

  router.get("/submit", (req, res) => {
    const queryParams = req.query;
    const title = queryParams.articleTitle;
    const text = queryParams.articleText;
    const author = queryParams.author;

    const idFromTitle = title.replace(/\s+/g, "-").toLowerCase();

    const setBlogPost = firestore.setDoc(
      firestore.doc(db, "blogpost", idFromTitle),
      {
        //if key is same as value you don't have to do : value
        title: title,
        text: text,
        author: author,
      }
    );

    setBlogPost
      .then((response) => {
        console.log("Success");
        res.send(`
          <h1>Submission Successful</h1>
          <p><a href="/create">Add Another Post</a></p>
        `);
      })
      .catch((error) => res.send(error));

    console.log();

    res.send("?");
  });
});

module.exports = router;
