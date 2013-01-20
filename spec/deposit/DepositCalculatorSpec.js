describe("DepositCalculator.js", function() {
	
	var depositCalculator;

	beforeEach(function() {
		depositCalculator = new DepositCalculator();
	});
	
    describe("deposit calulator", function() {
    it("Should take in deposit required", function() {
	
		var deposit = 50000;
		depositCalculator.setDeposit(deposit);
	
		expect(deposit).toEqual(depositCalculator.getDeposit());
    });
	
	it("Should take in savings per month required", function() {
	
		var savingsPerMonth = 2800;
		depositCalculator.setSavingsPerMonth(savingsPerMonth);
	
		expect(savingsPerMonth).toEqual(depositCalculator.getSavingsPerMonth());
    });
	
	it("Should Calculate number of months required to reach deposit amount", function() {
	
		var deposit = 50000;
		var savingsPerMonth = 2800;
		
		var monthsToReachDepositAmount = deposit / savingsPerMonth;
		
		var classMonthsToReachDepositAmount = depositCalculator.calcMonthsToReachDepositAmount(deposit, savingsPerMonth);
	
		expect(Math.ceil(monthsToReachDepositAmount)).toEqual(classMonthsToReachDepositAmount);
    });
	
	it("Should construct array of months vs amount", function() {

		var savingsPerMonth = 2800;
		var monthsToReachDepositAmount = 19;
	
		var monthVsAmountArr = new Array();
	
		for(var i = 0; i <= monthsToReachDepositAmount; i++)
		{
			var monthAmountObj = new Object();
			monthAmountObj.month = i;
			monthAmountObj.amount = savingsPerMonth * i;
			
			monthVsAmountArr[i] = monthAmountObj;
		}
	
		depositCalculator.calcMonthsVsAmount(savingsPerMonth, monthsToReachDepositAmount);
	
		classMonthVsAmountArr = depositCalculator.getMonthsVsAmountData();
	
		expect(classMonthVsAmountArr).toEqual(monthVsAmountArr);
    });
	
	it("Should calculate all and give back the months vs amount", function() {
		
		var deposit = 50000;
		var savingsPerMonth = 2800;
		monthsToReachDepositAmount = 18;
	
		var monthVsAmountArr = new Array();
	
		for(var i = 0; i <= monthsToReachDepositAmount; i++)
		{
			var monthAmountObj = new Object();
			monthAmountObj.month = i;
			monthAmountObj.amount = savingsPerMonth * i;
			
			monthVsAmountArr[i] = monthAmountObj;
		}

		depositCalculator.setDeposit(deposit);
		depositCalculator.setSavingsPerMonth(savingsPerMonth);
		
		depositCalculator.calculate(); 
	
		expect(depositCalculator.getMonthsVsAmountData()).toEqual(monthVsAmountArr);
    });
	});
});
