import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#theexcuse").innerHTML = generateexcuse();
};

console.log("Hello Rigo from the console!");
let generateexcuse = () => {
  let pronoun = ["A", "the"];
  let subject = ["dog", "cat", "horse", "Pig", "driver", "pinecone"];
  let action = [
    "took my",
    "threw my",
    "taken my",
    "yelled at my",
    "stole my",
    "bit my"
  ];
  let possetion = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", " at my house,", "in my driveway"];

  let pronounindex = Math.floor(Math.random() * pronoun.length);
  let subjectindex = Math.floor(Math.random() * subject.length);
  let actionindex = Math.floor(Math.random() * action.length);
  let possetionindex = Math.floor(Math.random() * possetion.length);
  let whereindex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounindex] +
    " " +
    subject[subjectindex] +
    " " +
    action[actionindex] +
    " " +
    possetion[possetionindex] +
    " " +
    where[whereindex]
  );
};
