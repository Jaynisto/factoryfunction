describe("Testing the Setting bill function", function(){
    it(" Should be able to set the call cost", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.85);
        assert.equal(2.85, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setCallCost(7.85);
        assert.equal(7.85, settingsBill2.getCallCost());
    });

    it(" Should be able to set the Sms cost", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(0.85);
        assert.equal(0.85, settingsBill.getSmsCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setSmsCost(1.85);
        assert.equal(1.85, settingsBill2.getSmsCost());
    });

    it(" Should be able to set the calls and sms cost", function(){
        let settingsBill = BillWithSettings();
        settingsBill.setSmsCost(0.75)
        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());
        assert.equal(0.75, settingsBill.getSmsCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setCallCost(7.85);
        settingsBill2.setSmsCost(1.50);
        assert.equal(7.85, settingsBill2.getCallCost());
        assert.equal(1.50, settingsBill2.getSmsCost());
    });

    it("Should be able to set warning level", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(20);
        assert.equal(20, settingsBill.getWarningLevel());
    })

    it("Should be able to set critical level", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(25);
        assert.equal(25, settingsBill.getCriticalLevel());
    })
   //Using the values
    describe("Using the values", function(){
        it("Should be able to use the Call set values", function(){
            let settingsBill = BillWithSettings();
    
            settingsBill.setCallCost(2);
            settingsBill.setSmsCost(1.50);
            settingsBill.setCriticalLevel(50);

            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(4, settingsBill.getTotalCost());
            assert.equal(4, settingsBill.getCallTotalCost());
            assert.equal(0, settingsBill.getSmsTotalCost());
        })

        it("Should be able to make two calls at 2.30", function(){
            let settingsBill = BillWithSettings();
    
            settingsBill.setCallCost(2.30);
            settingsBill.setCriticalLevel(50);

            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(4.60, settingsBill.getTotalCost());
            assert.equal(4.60, settingsBill.getCallTotalCost());
            assert.equal(0, settingsBill.getSmsTotalCost());
        })

        it("Should be able to send Sms's at R1.50 each", function(){
            let settingsBill = BillWithSettings();
    
            settingsBill.setSmsCost(1.50);
            settingsBill.setCriticalLevel(50);

            settingsBill.sendSms();
            settingsBill.sendSms();

            assert.equal(3, settingsBill.getTotalCost());
            assert.equal(0, settingsBill.getCallTotalCost());
            assert.equal(3, settingsBill.getSmsTotalCost());
        })

        it("Should be able to send Sms's at R1.50 each and make a Call at R2.50 same time", function(){
            let settingsBill = BillWithSettings();
    
            settingsBill.setSmsCost(1.50);
            settingsBill.setCallCost(2.50);
            settingsBill.setCriticalLevel(50);

            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.makeCall();

            assert.equal(5.50, settingsBill.getTotalCost());
            assert.equal(2.50, settingsBill.getCallTotalCost());
            assert.equal(3, settingsBill.getSmsTotalCost());
        })
    })

    describe("Should be able to Identify whether its Warning Level.", function(){
        it("Should be able to identify the Warning level when it at 10", function(){
            let settingsBill = BillWithSettings();
    
            settingsBill.setSmsCost(1.50);
            settingsBill.setCallCost(2.50);
            settingsBill.setWarningLevel(10);
            settingsBill.setCriticalLevel(15);

            
            
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            
            

            assert.equal(10.50, settingsBill.getTotalCost());
            assert.equal(7.50, settingsBill.getCallTotalCost());
            assert.equal(3, settingsBill.getSmsTotalCost());
            assert.equal("warning", settingsBill.totalClassName());
        })
    });

    describe("Should be able to Identify whether its Critical Level.", function(){
        it("Should be able to identify the Critical level when it at 20", function(){
            let settingsBill = BillWithSettings();
    
            settingsBill.setSmsCost(1.50);
            settingsBill.setCallCost(2.50);
            settingsBill.setCriticalLevel(20);

            
            
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.sendSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            

            assert.equal("danger", settingsBill.totalClassName());
        })
    });

});