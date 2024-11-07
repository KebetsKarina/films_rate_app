import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import img7 from "../assets/img/img7.png";
import img8 from "../assets/img/img8.png";
import img9 from "../assets/img/img9.png";
import img10 from "../assets/img/img10.png";
import img11 from "../assets/img/img11.png";
import img12 from "../assets/img/img12.png";
import img13 from "../assets/img/img13.png";
import img14 from "../assets/img/img14.png";

const data = [
  {
    img: img1,
    title: "Green Mile",
    year: "1999",
    genre: ""
  },
  {
    img: img2,
    title: "M - Eine Stadt sucht einen Mörder",
    year: "1931",
  },
  {
    imig: img3,
    title: "Poor Things",
    year: "2023",
  },
  {
    img: img4,
    title: "Coco",
    year: "2017",
  },
  {
    img: img5,
    title: "The Dark Knight",
    year: "2008",
  },
  {
    img: img6,
    title: "Shrek 2",
    year: "2004",
  },
  {
    img: img7,
    title: "Hachi: A Dog's Tale",
    year: "2009",
  },
  {
    img: img8,
    title: "Snatch",
    year: "2000",
  },
  {
    img: img9,
    title: "The Lion King",
    year: "1994",
  },
  {
    img: img10,
    title: "Tonari no Totoro",
    year: "1988",
  },
  {
    img: img11,
    title: "Back to the Future",
    year: "1985",
  },
  {
    img: img12,
    title: "Gladiator",
    year: "2000",
  },
  {
    img: img13,
    title: "The Pianist",
    year: "2002",
  },
  {
    img: img14,
    title: "The Wolf of Wall Street",
    year: "2013",
  },
];

let rowItemAmount = 2;

const twoDenominationalData = [];
let curr = [];
twoDenominationalData.push(curr);

for (let i = 0; i < data.length; i++) {
  if (curr.length >= rowItemAmount) {
    curr = [];
    twoDenominationalData.push(curr);
  }

  curr.push(data[i]);
}

export const DATA = twoDenominationalData;
