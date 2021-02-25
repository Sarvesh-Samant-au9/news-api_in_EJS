const express = require("express");
const app = express();
const PORT = 8008;
const bodyParser = require("body-parser");
// Static Files => CSS IMG
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

// Template Engine
app.set("views", "./src/Views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
// https://raddy.co.uk/wp-json/wp/v2/posts/
// https://raddy.co.uk/wp-json/wp/v2/posts?search=photoshop
// https://raddy.co.uk/wp-json/wp/v2/posts/5372
// https://raddy.co.uk/wp-json/wp/v2/posts?_embed

// Routes//
const newsRouter = require("./src/Routes/news");
app.use("/", newsRouter);

app.listen(PORT, () => {
  console.log(`listening port number ${PORT}`);
});
