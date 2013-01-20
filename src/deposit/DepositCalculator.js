function DepositCalculator(){

	var _deposit;
	var _savingsPerMonth;
	var _monthsVsAmountData;

	DepositCalculator.prototype.setDeposit = function(deposit) {
	  return _deposit = deposit;
	};

	DepositCalculator.prototype.getDeposit = function() {
	  return _deposit;
	};

	DepositCalculator.prototype.setSavingsPerMonth = function(savingsPerMonth) {
	  return _savingsPerMonth = savingsPerMonth;
	};

	DepositCalculator.prototype.getSavingsPerMonth = function() {
	  return _savingsPerMonth;
	};

	DepositCalculator.prototype.calcMonthsToReachDepositAmount = function(deposit, savingsPerMonth) {
	  return Math.ceil(deposit / savingsPerMonth);
	};
	
	DepositCalculator.prototype.calcMonthsVsAmount = function(savingsPerMonth, monthsToReachDepositAmount) {
		
		var monthVsAmountArr = new Array();
	
		for(var i = 0; i <= monthsToReachDepositAmount; i++)
		{
			var monthAmountObj = new Object();
			monthAmountObj.month = i;
			monthAmountObj.amount = savingsPerMonth * i;
			
			monthVsAmountArr[i] = monthAmountObj;
		}
		
		_monthsVsAmountData = monthVsAmountArr;
	};
	
	DepositCalculator.prototype.calculate = function() {
	  var monthsToReachDepositAmount = this.calcMonthsToReachDepositAmount(this.getDeposit(), this.getSavingsPerMonth());
	  this.calcMonthsVsAmount(this.getSavingsPerMonth(), monthsToReachDepositAmount);
	};
	
	DepositCalculator.prototype.getMonthsVsAmountData = function() {
	  return _monthsVsAmountData;
	};
}