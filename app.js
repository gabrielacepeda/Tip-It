//Calculate Tip
function calculateTip() {
    let billAmt = document.getElementById("bill-amnt").value;
    let serviceQual = document.getElementById("service-quality").value;
    let numOfPeople = document.getElementById("people-amnt").value;
    let error = document.getElementById("error");
    //validate input
    if (billAmt === "" || serviceQual == 0) {
        error.textContent = "*Please enter values";
        return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculate tip
    let total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("total-tip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}
const incrementValue = () => {
    let value = parseInt(document.getElementById("people-amnt").value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('people-amnt').value = value;
}
const decrementValue = () => {
    let value = document.getElementById("people-amnt").value -= 1;
    document.getElementById('people-amnt').value = value;

}
const subtract = document.getElementById("minus").addEventListener("click", decrementValue);

//Hide the tip amount on load
document.getElementById("total-tip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").addEventListener("click", calculateTip);
