// get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
const radioTotalAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
const callsTotalEle = document.querySelector(".callTotalTwo");
const smsTotalEle = document.querySelector(".smsTotalTwo");
const totalCostEle = document.querySelector(".totalTwo");

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


var calls2 = 0;
var sms2 = 0;

function radioBillTotal(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
    }
    // get the value entered in the billType textfield
    // var billTypeEntered = billItemType.value.trim();
    // update the correct total
    if (billItemType === "call"){
        calls2 += 2.75;
    }
    else if (billItemType === "sms"){
        sms2 += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callsTotalEle.innerHTML = calls2.toFixed(2);
    smsTotalEle.innerHTML = sms2.toFixed(2);
    var totalCost2 = calls2 + sms2;
    totalCostEle.innerHTML = totalCost2.toFixed(2);

     //Removing the color initially
     totalCostEle.classList.remove("danger");
     totalCostEle.classList.remove("warning");
 
      //color the total based on the criteria
      if (totalCost2 >= 50){
         // adding the danger class will make the text red
         totalCostEle.classList.add("danger");
     }
     else if (totalCost2 >= 30){
         totalCostEle.classList.add("warning");
     }
}

radioTotalAddBtn.addEventListener('click', radioBillTotal);
