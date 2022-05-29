//add button
const TotalAddSetBtn = document.querySelector(".addButton");
//ubdate
const update = document.querySelector(".updateSettings");

const billTypeSetting = document.querySelector(".billItemTypeWithSettings");

  // updating 
    const callCostS = document.querySelector(".callCostSetting");
    const smsCostS = document.querySelector(".smsCostSetting");
    const warningLevel = document.querySelector(".warningLevelSetting");
    const criticalLevel = document.querySelector(".criticalLevelSetting");

    //Total cost reference
    const callsTotalSetEleme = document.querySelector(".callTotalSettings");
    const smsTotalSetEleme = document.querySelector(".smsTotalSettings");
    const totalCostSetEleme = document.querySelector(".totalSettings");

    
    let settingsBill = BillWithSettings();

    function updatingFuction(){
        settingsBill.setCallCost(Number(callCostS.value));
        settingsBill.setSmsCost(Number(smsCostS.value));
        settingsBill.setWarningLevel(Number(warningLevel.value));
        settingsBill.setCriticalLevel(Number(criticalLevel. value));
        colorsFunction();
    }

    function addingFunction(){
        var checkedRadioSetBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked").value;
        if(checkedRadioSetBtn === "call"){
            settingsBill.makeCall()
        }
        else if(checkedRadioSetBtn === "sms"){
            settingsBill.sendSms();
            
        }
        callsTotalSetEleme.innerHTML = settingsBill.getCallTotalCost();
        smsTotalSetEleme.innerHTML = settingsBill.getSmsTotalCost();
            
        totalCostSetEleme.innerHTML = settingsBill.getTotalCost();
       
        colorsFunction();
    }

    function colorsFunction(){

        totalCostSetEleme.classList.remove("danger");
        totalCostSetEleme.classList.remove("warning"); 
        totalCostSetEleme.classList.add(settingsBill.totalClassName());
    }

update.addEventListener('click', updatingFuction);
TotalAddSetBtn.addEventListener('click', addingFunction);