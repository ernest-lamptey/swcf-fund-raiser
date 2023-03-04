//get the progress bar element with #bar
//make a fetch request to get the current amount raised
// elem.style.width = current/total expressed in percentage + %
// animate the value from zero to current

console.log("Want to contribute code? lamptey07@gmail.com");

const URL = "https://opensheet.elk.sh/1no71LHwNzWfnLX-qFt3A1Yo8jr1m3wN1gXanUsKV9Tw/Stats";

let currentPercentage = 0;
let amountRaised = 0;
let lastDonation = 0
let lastDonationDate;

fetch(URL)
    .then(data => data.json())
    .then(res => {
        currentPercentage = res[0].percentage;
        amountRaised = res[0].amountRaised;
        lastDonation = res[res.length - 1].amount;
        lastDonationDate = new Date(res[res.length - 1].date).toDateString();
    })
    .then(() => {
        document.getElementById("bar").style.width = currentPercentage;
        document.getElementById("amountRaised").innerHTML = `Amount raised: ${amountRaised}`;
        document.getElementById("last-donation").innerHTML = `${lastDonation} was donated on ${lastDonationDate} &#128151;`
    })