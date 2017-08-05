const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.send('Hi there, welcome to my assignment!');
});

app.get("/speak/:animalName", function (req, res) {
    const animal = req.params.animalName.toLowerCase();

    const sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        chicken: 'coo-kooo!!!',
        cat: "Mee-oowww"
    };
    if (animal in sounds) {
        res.send("The " + animal + " says " + '"' + sounds[animal] + '"');
    } else {
        res.send("Sorry, no animal speaks that language here");
    }
});

app.get("/repeat/:salamu/:number", function (req, res) {
    const salamu = req.params.salamu.toLowerCase();
    const number = parseInt(req.params.number);
    let inputText = "";

    for (let i = 0; i < number; i++) {
        inputText += salamu + " ";
    }
    res.send(inputText);
});


app.get("*", function (req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});
app.listen(3000, function () {
    console.log("Server started");
});