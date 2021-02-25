const express = require("express");
const APIKEY = "41036bf55dbb43159d856097ecb51f5f";
const axios = require("axios");

const newsRouter = express.Router();
newsRouter.get("", async (req, res) => {
  try {
    const newsUrl = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`
    );
    // const newsUrl = await axios.get("https://raddy.co.uk/wp-json/wp/v2/posts/");
    console.log(newsUrl);
    console.log("Articles Are as ", newsUrl.data.articles);
    // console.log(newsUrl.data.articles);
    res.render("news", { items: newsUrl.data.articles });
    // newsUrl.data;
  } catch (error) {
    if (error.response) {
      res.render("news", { items: null });
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      res.render("news", { items: null });
      console.log(error.request);
    } else {
      res.render("news", { items: null });
      console.error("error", error.message);
    }
  }
});

newsRouter.post("", async (req, res) => {
  let itemQuery = req.body.search;
  try {
    const newsUrl = await axios.get(
      `https://newsapi.org/v2/everything?q=${itemQuery}&apiKey=41036bf55dbb43159d856097ecb51f5f`
    );

    console.log(newsUrl);
    console.log("Articles Are as ", newsUrl.data.articles);
    // console.log(newsUrl.data.articles);
    res.render("newsSearch", { items: newsUrl.data.articles });
    // newsUrl.data;
  } catch (error) {
    if (error.response) {
      res.render("newsSearch", { items: null });
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      res.render("newsSearch", { items: null });
      console.log(error.request);
    } else {
      res.render("newsSearch", { items: null });
      console.error("error", error.message);
    }
  }
});

module.exports = newsRouter;

//         {
// "source": {
// "id": null,
// "name": "Hindustan Times"
// },
// "author": "HT Entertainment Desk",
// "title": "Priyanka Chopra can't stop laughing over 'boriya bistar' memes on her dress, even Virat Kohli is a part of them - Hindustan Times",
// "description": "Priyanka Chopra has shared several fanmade memes on one of her looks which features her in a quirky ball-shaped costume.",
// "url": "https://www.hindustantimes.com/entertainment/bollywood/priyanka-chopra-can-t-stop-laughing-over-her-boriya-bistar-memes-even-virat-kohli-is-a-part-of-them-101614135246473.html",
// "urlToImage": "https://images.hindustantimes.com/img/2021/02/24/1600x900/priyanka-chopra-memes_1614136902539_1614136919498.jpg",
// "publishedAt": "2021-02-24T03:55:12Z",
// "content": "Priyanka Chopra is over the moon with the success of her memoir, Unfinished. However, there is another reason why the former Miss World is laughing out loud. The actor has shared several viral memes … [+1798 chars]"
// },
