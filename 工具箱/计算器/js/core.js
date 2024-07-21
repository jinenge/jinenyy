
'use strict';

var core={
	maxN:0,
	isError:false,
	errorResult:'Error',
	specialCalculateExp: new RegExp('(tan|cos|sin|log|ln|√)([-]?[0-9\\.]+(E[\\+\\-][0-9]+)?)','g'),
	factorialExp:new RegExp('([\\+\\-\\*%\/]?[-]?)([0-9\\.]+(E[\\+\\-][0-9]+)?)!','g'),
	powExp:new RegExp('([\\+\\-\\*%\/]?[-]?)([0-9\\.]+)\\^([-]?[0-9\\.]+)','g'),
	secondPriorityOperator:new RegExp('[-]?[0-9\\.]+(E[\\+\\-][0-9]+)?([\\+\\-][-]?[0-9\\.]+(E[\\+\\-][0-9]+)?)+','g'),
	secondPrioritySingleOperator:new RegExp('[\\+\\-][-]?[0-9\\.]+(E[\\+\\-][0-9]+)?','g'),
	firstPriorityOperator:new RegExp('[-]?[0-9\\.]+(E[\\+\\-][0-9]+)?([\\*\\/%][-]?[0-9\\.]+(E[\\+\\-][0-9]+)?)+','g'),
	firstPrioritySingleOperator:new RegExp('[\\*\\/%][-]?[0-9\\.]+(E[\\+\\-][0-9]+)?','g'),
	firstPriorityResult:null,
	secondPriorityResult:null,
	testResult:function(str){
		str = str+'';
		if(str.indexOf('NaN')>-1){
			this.isError = true;
			this.errorResult='Error';
			return true;
		}else if(str.indexOf('Infinity')>-1){
			this.isError = true;
			this.errorResult='∞';
			return true;
		}
		return false;
	},
	showError:function(f,msg){
		console.error("core.js error: "+msg+" when it calculate "+f);
	},
	getCalculatorExp:function(){
		if(this.maxN<1) return null;
		return new RegExp("((tan|cos|sin|log|ln|√)?[-]?[0-9\\.!]+(E[\\+\\-][0-9]+)?([\\+\\-\\*%\/\\^](tan|cos|sin|log|ln|√)?[-]?[0-9\\.!]+(E[\\+\\-][0-9]+)?)*)(?=<\/b"+this.maxN+">)",'g');
	},
	clear:function(){
		this.maxN = 0;
		this.isError = false;
		this.errorResult = 'Error';
		this.firstPriorityResult = null;
		this.secondPriorityResult = null;
	},
	/**
	 * get calculated result with the input string
	 * @param {string}  the input string which need calculate
	 * @return {string} get calculated result
	 */
	calculate:function(blockStr){
		var str = this.getBrak(blockStr);
		var calculatorExp = null;

		//get e,π
		str = str.replace(/e/g,Math.E);
		str = str.replace(/π/g,Math.PI);
		str = str.replace(/x/g,'*');
		str = str.replace(/÷/g,'/');

		var isEmpty;
		while(calculatorExp = this.getCalculatorExp()){
			isEmpty = true;
			str = str.replace(calculatorExp,function(calculatorString){
				if(core.isError) return calculatorString;
				isEmpty = false;
				if(calculatorString&&calculatorString!=""){
					return core.calculateWithoutBracket(calculatorString);
				}
				return calculatorString;
			});

			if(this.isError) {return this.errorResult;}

			if(isEmpty){
				this.isError = true;
				this.errorResult='Error';
				this.showError(blockStr,'there is nothing in the brackets');
				return this.errorResult;
			}

			//clear bracket
			str = str.replace(new RegExp("(<b"+this.maxN+">|<\\/b"+this.maxN+">)",'g'),'');
			this.maxN--;
		}
		str = this.calculateWithoutBracket(str);
		if(this.isError) {return this.errorResult;}

		return str;
	},
	//make <bN> to replace brackets
	getBrak:function(str){
		var  temp = str;
		if(!str)
			return null;
		var N=0;
		str = str.replace(/(\(|\))/g,function($0,$1){
			if($1=="("){ N++;  core.maxN = (N>core.maxN)?N:core.maxN; return "<b"+N+">"; }
			if($1==")"){
				$0 = "</b"+(N--)+">";
				if(N<0){
					core.isError = true;
					core.showError(temp,'the number of brackets is error');
				}
				return $0;
			}
		});

		if(N!=0){
			this.isError = true;
			this.showError(temp,'the number of brackets is error')
		}
		return str;
	},
	calculateWithoutBracket:function(str){
		var blockStr = str;
		str = this.preCalculate(str);
		if(str.indexOf('^')>-1){
			core.isError = true;
			core.showError(blockStr,'too many "^", you need use brackets');
			return str;
		}
		if(this.isError) {return str;}

		str = str.replace(this.firstPriorityOperator,function(calculatorString){
			return core.getFirstPriorityCalculatedResult(calculatorString);
		});
		if(this.isError) {return str;}

		str = str.replace(this.secondPriorityOperator,function(calculatorString){
			return core.getSecondPriorityCalculatedResult(calculatorString);
		});

		return str;
	},
	preCalculate:function(str){

		str = str.replace(this.specialCalculateExp,function(calculatorString,operator,num){
			var specialResult = '';
			switch (operator){
				case 'tan':
					specialResult = Math.tan(num*0.017453293);
					break ;
				case 'sin':
					specialResult = Math.sin(num*0.017453293);
					break;
				case 'cos':
					specialResult = Math.cos(num*0.017453293);
					break;
				case 'log':
					specialResult = Math.log10(num);
					break;
				case 'ln':
					specialResult = Math.log(num);
					break;
				case '√':
					specialResult = Math.sqrt(num);
					break;
				default :
					return calculatorString;
			}
			specialResult +='';
			if(core.testResult(specialResult)){
				core.showError(calculatorString,"");
			}
			return specialResult;
		});

		//calculate factorial
		str = str.replace(this.factorialExp,function(calculatorString,operator,num,E,pos){
			if(operator.length==2||(pos === 0 && operator==='-')){
				core.isError = true;
				core.showError('-'+num+'!','factorial does not support a negative');
				return calculatorString;
			}
			var _factorial = factorial(num)+'';
			if(core.testResult(_factorial)) {
				core.showError(num + '!', 'factorial result is too large');
			}
			return operator+ _factorial;
		});

		//calculate x^y
		str = str.replace(this.powExp,function(calculatorString,operator,x,y){
			if(operator.length==2){ x= '-'+x;operator='-';}
			var _pow = Math.pow(x,y)+'';
			if(core.testResult(_pow)){
				core.showError(calculatorString,'Math.pow result is too large');
			}
			return operator+_pow;
		});

		return str;
	},
	getFirstPriorityCalculatedResult:function(str){
		this.firstPriorityResult = str.match(/^[-]?[0-9\\.]+(E[\\+\\-][0-9]+)?/)[0];

		str.replace(this.firstPrioritySingleOperator,function(calculatorString){
			switch(calculatorString[0]){
				case '*':
					core.firstPriorityResult = core.firstPriorityResult *calculatorString.substring(1,calculatorString.length);
					break;
				case '/':
					core.firstPriorityResult = core.firstPriorityResult /calculatorString.substring(1,calculatorString.length);
					break;
				case '%':
					core.firstPriorityResult = core.firstPriorityResult %calculatorString.substring(1,calculatorString.length);
					break;
				default :
					break;
			}
			if(core.testResult(core.firstPriorityResult)){
				core.showError(calculatorString,calculatorString[0] + ' error');
			}
			return calculatorString;
		});
		return this.firstPriorityResult;
	},
	getSecondPriorityCalculatedResult:function(str){
		this.secondPriorityResult = str.match(/^[-]?[0-9\\.]+(E[\\+\\-][0-9]+)?/)[0];

		str.replace(this.secondPrioritySingleOperator,function(calculatorString,minStr,index){
			if(index==0)
			    return calculatorString;
			switch(calculatorString[0]){
				case '+':
					core.secondPriorityResult = parseFloat(core.secondPriorityResult) +parseFloat(calculatorString.substring(1,calculatorString.length));
					break;
				case '-':
					core.secondPriorityResult = core.secondPriorityResult -calculatorString.substring(1,calculatorString.length);
					break;
				default :
					break;
			}
			if(core.testResult(core.secondPriorityResult)){
				core.showError(calculatorString,calculatorString[0] + ' error');
			}
			return calculatorString;
		});
		return this.secondPriorityResult;
	}
};


