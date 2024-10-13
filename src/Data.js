import img1 from "./assets/img/img1.png";
import img2 from "./assets/img/img2.png";
import img3 from "./assets/img/img3.png";
import img4 from "./assets/img/img4.png";
import img5 from "./assets/img/img5.png";
import img6 from "./assets/img/img6.png";

const data = [
    {
        img: img1,
        title: "Green Mile",
        year: "1999",
    },
    {
        img: img2,
        title: "M - Eine Stadt sucht einen Mörder",
        year: "1931",
    },
    {
        img: img3,
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
        year: "1999",
    },
    {
        img: img6,
        title: "Shrek 2",
        year: "1931",
    },
];

let rowItemAmount = 2

const twoDenominationalData = []
let curr = []
twoDenominationalData.push(curr)

for (let i = 0; i < data.length; i++) {

    if (curr.length >= rowItemAmount) {
        curr = []
        twoDenominationalData.push(curr)
    }

    curr.push(data[i])
}

export const DATA = twoDenominationalData
