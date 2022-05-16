//add button
const TotalAddSetBtn = document.querySelector(".addButton");
const callsTotalSetEleme = document.querySelector(".callTotalSettings");
const smsTotalSetEleme = document.querySelector(".smsTotalSettings");
const totalCostSetEleme = document.querySelector(".totalSettings");
//ubdate
const update = document.querySelector(".updateSettings");

var callCostSet = 0;
var smsCostSet = 0;
var warningLevelOne = 0;
var criticalLevelOne = 0;

function updateFunction(){
    const callCostS = document.querySelector(".callCostSetting").value;
    const smsCostS = document.querySelector(".smsCostSetting").value;
    const warningLevel = document.querySelector(".warningLevelSetting").value;
    const criticalLevel = document.querySelector(".criticalLevelSetting").value;

    if(callCostS){
        callCostSet = Number(callCostS);
    }
    if(smsCostS){
        smsCostSet = Number(smsCostS);
    }
    if(warningLevel){
        warningLevelOne = Number(warningLevel);
    }
    if(criticalLevel){
        criticalLevelOne = Number(criticalLevel);
    }

}

var callsSet = 0;
var smsSet = 0;

function settingBillTotal(){
    var checkedRadioSetBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked").value;
    if (checkedRadioSetBtn === "call"){
        callsSet += Number(callCostSet);
    }
    else if (checkedRadioSetBtn === "sms"){
        smsSet += Number(smsCostSet);
    }
    
    callsTotalSetEleme.innerHTML = callsSet.toFixed(2);
    smsTotalSetEleme.innerHTML = smsSet.toFixed(2);
    var totalCostSet = Number(callsSet) + Number(smsSet);
    totalCostSetEleme.innerHTML = Number(totalCostSet).toFixed(2);
    

     totalCostSetEleme.classList.remove("danger");
     totalCostSetEleme.classList.remove("warning");
 
    if (totalCostSet >= warningLevelOne && totalCostSet < criticalLevelOne){
        totalCostSetEleme.classList.add("warning");
    }
    if (totalCostSet >= criticalLevelOne){
         totalCostSetEleme.classList.add("danger");
    }
    
}

TotalAddSetBtn.addEventListener('click', settingBillTotal);
update.addEventListener('click', updateFunction);

