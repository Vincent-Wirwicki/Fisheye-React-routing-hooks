const express = require('express');
const path = require('path');
const fisheyeData = require("./data.json");

const app = express();

// app.use(express.static(path.join(__dirname, 'client/build')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("client"));

const { photographers, media } = fisheyeData;

app.get("/photographers", (req, res) => res.json(photographers));
app.get("/media", (req, res) => res.json(media));

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
