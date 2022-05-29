function BillWithSettings(){
    // Declaring variables that are going to be passed in
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    //Declaring Total costs
    var callCostTotal = 0;
    var smsCostTotal = 0;

    // Declaring  a function that sets in the call cost
    function setCallCost(callCost){
        theCallCost = callCost;
    }

    // Declaring a function that will get the Call cost passed when it was set
    function getCallCost(){
        return theCallCost;
    }

    // Declaring  a function that sets in the sms cost
    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }

    // Declaring a function that will get the Sms cost passed when it was set
    function getSmsCost(){
        return theSmsCost;
    }

    // Declaring a function that sets the warning level
    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel;
    }

    // Declaring a function that gets the warning level passed when it was set
    function getWarningLevel(){
        return theWarningLevel;
    }

    // Declaring a function that sets the critical level
    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel;
    }

    // Declaring a function that gets the critical level passed when it was set
    function getCriticalLevel(){
        return theCriticalLevel;
    }

    //Declaring a function that enables you to make a call.
    function makeCall(){
        if(!hasReachedCriticalLevel()){
            callCostTotal += theCallCost;
        }
    }

    // Declaring a function that that gets total cost.
    function getTotalCost(){
        return callCostTotal + smsCostTotal;
    }

    // Declaring a function that that gets total call cost.
    function getCallTotalCost(){
        return callCostTotal;
    }

    // Declaring a function that that sends sms.
    function sendSms(){
        if(!(hasReachedCriticalLevel())){
            smsCostTotal += theSmsCost;
        }
    }

    // Declaring a function that that gets total sms cost.
    function getSmsTotalCost(){
        return smsCostTotal;
    }

    // Declaring a function for levels.
    function hasReachedCriticalLevel(){
        return getTotalCost() >= getCriticalLevel();
    }

    // Declaring a function for levels
    function totalClassName(){
        if(getTotalCost() >= getCriticalLevel()){
            return "danger";
        }
        else if(getTotalCost() >= getWarningLevel()){
            return "warning";
        }
    }



// Returning all the Objects.
    return{
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getCallTotalCost,
        sendSms,
        getSmsTotalCost,
        totalClassName


    }
}