'use strict';

var Calculator = {

  display: document.querySelector('#display textarea'),
  displayResult:document.querySelector('#display div'),
  significantDigits: 11,
  result: '',
  currentInputOperator:'',
  currentInput: '',
  lastOperator:'',
  inputDigits: 0,
  decimalMark: false,
  isNegative: false,
  canAppendOperate:function(){
	  return this.currentInputOperator==')'||this.currentInputOperator == '^2'||this.currentInputOperator == '!';
  },
  scrollDisplay:function scrollDisplay(){
	  this.display.scrollTop = this.display.scrollHeight;
  },
  updateDisplay: function updateDisplay() {
    var value = this.currentInput || this.result.toString();

    var infinite = new RegExp((1 / 0) + '', 'g');
    var outval = value.replace(infinite, '∞').replace(NaN, 'Error');
    this.displayResult.textContent = outval;

    var screenWidth = this.displayResult.parentNode.offsetWidth - 60;
    var valWidth = this.displayResult.offsetWidth;
    var scaleFactor = Math.min(1, screenWidth / valWidth);
    //this.display.style.MozTransform = 'scale(' + scaleFactor + ')';
    // Work around for bug #989403
    this.displayResult.style.fontSize = 5.5 * scaleFactor + 'rem';
  },

  appendDigit: function appendDigit(value) {
    if (this.inputDigits + 1 > this.significantDigits ||
	    (this.currentInput === '0' && value === '0')) {
      return;
    }
    if (value === '.') {
      if (this.decimalMark) {
        return;
      } else {
        this.decimalMark = true;
      }
      if (!this.currentInput) {
        this.currentInput += '0';
	    this.display.value += '0';
      }
    } else {
      if (this.currentInput === '0' && value !== '0') {
        this.currentInput = '';
	    this.display.value = this.display.value.substring(0,this.display.value.length-1);
      }
      ++this.inputDigits;
    }
    this.currentInput += value;
	this.display.value += value;
    this.updateDisplay();
  },

  clearInput: function clearInput() {
    this.currentInput = '';
	this.currentInputOperator = '';
    this.result = 0;
    this.inputDigits = 0;
    this.decimalMark = false;
    this.isNegative = false;
    this.updateDisplay();
	this.display.value = '';
  },
  init: function init() {
    document.addEventListener('mousedown', this);
    document.addEventListener('touchstart', function(evt){
      var target = evt.target;
      if ((target.dataset.type == "value") || (target.value == "C") || (target.value == "=")) {
        target.classList.add("active");
      }
    });
    document.addEventListener('touchend', function(evt){
      var target = evt.target;
      if ((target.dataset.type == "value") || (target.value == "C") || (target.value == "=")) {
        target.classList.remove("active");
      }
    });
    this.updateDisplay();
	this.display.value = '';
  },
  handleOperator:function(value){
	  switch (value){
		  case '+':
		  case '-':
		  case '÷':
		  case '!':
		  case '%':
		  case '^':
		  case 'x':
			  if (value === this.currentInputOperator||this.currentInputOperator=='u') {
				  return;
			  }else if(!this.currentInputOperator&&!this.currentInput){
				  if(!this.result)
					  return;
				  this.display.value = this.result+value;
				  this.result = '';
			  }else if(this.currentInputOperator&&this.currentInputOperator!='u'&&!this.canAppendOperate()) {
				  this.display.value = this.display.value.replace(/.$/, value);
			  }else{
				  this.display.value += value;
			  }
			  this.currentInputOperator= value;
			  break;
		  case '^2':
			  if(!this.currentInputOperator&&!this.currentInput&&this.result){
				  this.display.value = this.result+value;
			  }else if(this.currentInput||this.currentInputOperator==')'){
				  this.display.value += value;
			  }
			  this.currentInputOperator = value;
			  break;
		  default :
			  if(!this.currentInputOperator&&!this.currentInput){
				  this.display.value = (this.result?this.result+'x':'') +value;
			  }else if(this.currentInputOperator=='!'||this.currentInputOperator==')'){
				  this.display.value += 'x'+value;
			  }else if(this.currentInputOperator){
				  this.display.value += value;
			  }else{
				  this.display.value += 'x'+value;
			  }
			  this.currentInputOperator = 'u';
			  break;
	  }
	  this.currentInput = '';
	  this.inputDigits = 0;
	  this.decimalMark = false;
	  this.lastOperator = value;
	  this.result = '';
  },
  toFixed:function(val){
	  val += '';
	  if(val.indexOf('e')>0){
		  val = val.replace(/([0-9\.]+)e/,function(str,num){
			  return parseFloat(num).toFixed(2)+'E';
		  })
		  return val;
	  }
	  var pos = val.indexOf('.');
	  if(pos > 0){
		if(val.length-pos-1>6){
			val = parseFloat(val).toFixed(6);
			val += '';
			pos = val.indexOf('.');
			if(val[pos+1]=='0'&&val[pos+2]=='0'&&val[pos+3]=='0'&&val[pos+4]=='0'){
				val = parseFloat(val).toFixed(0);
			}
		}

	  }else{
		  pos = val.length;
	  }
	  if(pos>10){
		  val = parseFloat(val).toFixed(pos-3);
		  val += '';
		  val = val[0]+'.'+val[1]+val[2]+'E+'+(pos-1);
	  }

	  return val;
  },
  handleCommand:function handleCommand(value){
	  switch (value) {
		  case '=':
			  if (this.display.value&&(this.currentInput||this.currentInputOperator.match(/[0-9\)!]$/))) {
				  this.result = core.calculate(this.display.value);
				  this.display.value += '=';
				  this.currentInput = '';
				  this.currentInputOperator = '';
				  this.inputDigits = 0;
				  this.decimalMark = false;
				  this.isNegative = false;

				  if(core.isError){
					  this.updateDisplay();
					  this.result = '';
				  }else{
					  this.result = this.toFixed(this.result);
					  this.updateDisplay();
				  }
				  core.clear();

			  }
			  break;
		  case '(':
			  if(this.currentInput||this.canAppendOperate()){
				  return;
			  }else if(!this.currentInput&&!this.currentInputOperator){
				  this.clearInput();
			  }
			  this.display.value += '(';
			  this.currentInputOperator = 'u';
			  this.currentInput = "";
			  break;
		  case ')':
			  if(!this.currentInputOperator&&!this.currentInput){
				  return;
			  }
			  this.display.value += ')';
			  this.currentInputOperator = ')';
			  this.currentInput ='';
			  break;
		  case 'C':
			  this.clearInput();
			  break;
		  case '<': /* backspace */
			  if(this.currentInput === '') {
				  return;
			  } else {
				  if(this.currentInput.slice(-1) === '.') {
					  this.currentInput = this.currentInput.substring(0, this.currentInput.length-1);
					  this.decimalMark = false;
					  this.updateDisplay();
					  return;
				  }else if(this.isNegative&&this.currentInput.slice(-1) === '-') {
					  this.display.value = this.display.value.substring(0, this.display.value.length-3);
					  this.currentInput = '';
					  this.isNegative = false;
					  this.updateDisplay();
					  return;
				  }else if(this.isNegative&&this.display.value.slice(-1) === ')'){
					  this.display.value = this.display.value.substring(0, this.display.value.length-2)+')';
					  this.currentInput = this.currentInput.substring(0, this.currentInput.length-1);
					  --this.inputDigits;
					  this.updateDisplay();
					  return;
				  }

				  this.display.value = this.display.value.substring(0, this.display.value.length-1);
				  this.currentInput = this.currentInput.substring(0, this.currentInput.length-1);
				  --this.inputDigits;
				  if(this.inputDigits==0){
					  this.currentInputOperator = this.lastOperator;
				  }
			  }
			  this.updateDisplay();
			  break;
		  case '+/-':
			  if(!this.inputDigits)
			    return;
			  if(this.isNegative) {
				  this.currentInput = this.currentInput.slice(1);
				  this.display.value = this.display.value.replace(new RegExp('\\(\\-[0-9.]+\\)$','g'),this.currentInput);
			  } else {
				  this.currentInput = '-' + this.currentInput+'';
				  this.display.value = this.display.value.replace(new RegExp('[0-9.]+$','g'),'('+this.currentInput+')');
			  }
			  this.isNegative = !this.isNegative;
			  this.updateDisplay();
			  break;
	  }
  },
  handleEvent: function handleEvent(evt) {
    var target = evt.target;
	var targetName = target.nodeName.toLowerCase();
	 if(targetName == 'p'){
		target = target.parentNode;
	 }else if(targetName == 'sup'){
		 target = target.parentNode.parentNode;
	 }
    var value = target.getAttribute('value');
    switch (target.dataset.type) {
      case 'value':
	    if(this.result){
		    this.result = '';
	    }
	    if(!this.currentInputOperator&&!this.currentInput)
		    this.display.value="";
	    else if(this.currentInput=='s'||this.canAppendOperate()){
			return;
	    }
        this.appendDigit(value);
	    this.currentInputOperator = '';
        break;
	    case 'specialValue':
		    if(this.currentInput||this.canAppendOperate()){ return;}
		    else if(!this.currentInputOperator&&!this.currentInput) {this.clearInput();}
		    this.display.value += value;
		    this.currentInput = 's';
		    break;
      case 'operator':
		this.handleOperator(value);
        break;
      case 'command':
        this.handleCommand(value);
        break;
    }
	this.scrollDisplay();
  }
};

// String concatenation then number subtraction
Calculator.maxDisplayableValue = '1e' + Calculator.significantDigits - 1;

window.addEventListener('load', function load(evt) {
  window.removeEventListener('load', load);
  Calculator.init();
});

