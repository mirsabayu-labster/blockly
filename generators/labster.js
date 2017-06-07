'use strict';

goog.provide('Blockly.Labster');

goog.require('Blockly.Generator');

Blockly.Labster = new Blockly.Generator("Labster");

Blockly.Labster.addReservedWords(
	'Missions, Mission, Tasks, Task, Actions, Setter, Element, CompleteWhen, CompleteActions'
	);

Blockly.Labster.ORDER_ATOMIC = 0;         // 0 "" ...
Blockly.Labster.ORDER_MEMBER = 1;         // . []
Blockly.Labster.ORDER_NEW = 1;            // new
Blockly.Labster.ORDER_FUNCTION_CALL = 2;  // ()
Blockly.Labster.ORDER_INCREMENT = 3;      // ++
Blockly.Labster.ORDER_DECREMENT = 3;      // --
Blockly.Labster.ORDER_LOGICAL_NOT = 4;    // !
Blockly.Labster.ORDER_BITWISE_NOT = 4;    // ~
Blockly.Labster.ORDER_UNARY_PLUS = 4;     // +
Blockly.Labster.ORDER_UNARY_NEGATION = 4; // -
Blockly.Labster.ORDER_TYPEOF = 4;         // typeof
Blockly.Labster.ORDER_VOID = 4;           // void
Blockly.Labster.ORDER_DELETE = 4;         // delete
Blockly.Labster.ORDER_MULTIPLICATION = 5; // \*
Blockly.Labster.ORDER_DIVISION = 5;       // /
Blockly.Labster.ORDER_MODULUS = 5;        // %
Blockly.Labster.ORDER_ADDITION = 6;       // +
Blockly.Labster.ORDER_SUBTRACTION = 6;    // -
Blockly.Labster.ORDER_BITWISE_SHIFT = 7;  // << >> >>>
Blockly.Labster.ORDER_RELATIONAL = 8;     // < <= > >=
Blockly.Labster.ORDER_IN = 8;             // in
Blockly.Labster.ORDER_INSTANCEOF = 8;     // instanceof
Blockly.Labster.ORDER_EQUALITY = 9;       // == != === !==
Blockly.Labster.ORDER_BITWISE_AND = 10;   // &
Blockly.Labster.ORDER_BITWISE_XOR = 11;   // ^
Blockly.Labster.ORDER_BITWISE_OR = 12;    // |
Blockly.Labster.ORDER_LOGICAL_AND = 13;   // &&
Blockly.Labster.ORDER_LOGICAL_OR = 14;    // ||
Blockly.Labster.ORDER_CONDITIONAL = 15;   // ?:
Blockly.Labster.ORDER_ASSIGNMENT = 16;    // = += -= \*= /= %= <<= >>= ...
Blockly.Labster.ORDER_COMMA = 17;         // ,
Blockly.Labster.ORDER_NONE = 99;          // (...)

Blockly.Labster.init = function(workspace){

	Blockly.Labster.definitions_ = Object.create(null);

	Blockly.Labster.functionNames_ = Object.create(null);

	if(!Blockly.Labster.variableDB_){
		Blockly.Labster.variableDB_ = new Blockly.Names(Blockly.Labster.RESERVED_WORDS_, '$');
	} else {
		Blockly.Labster.variableDB_.reset();
	}
};

Blockly.Labster.finish = function(code){

	var definitions = [];
	for(var name in Blockly.Labster.definitions_) {
		definitions.push(Blockly.Labster.definitions_[name]);
	}

	delete Blockly.Labster.definitions_;
	delete Blockly.Labster.functionNames_;
	Blockly.Labster.variableDB_.reset();
	return definitions.join('\n\n') + '\n\n\n' + code;
}

Blockly.Labster.scrubNakedValue = function(line) {
	return line + ';\n';
}

Blockly.Labster.quote_ = function(string){
	string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/'/g, '\\\'');
  return '\'' + string + '\'';
}

Blockly.Labster.scrub_ = function(block, code) {

	var commentCode = "";

	

	var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
	var nextCode = Blockly.Labster.blockToCode(nextBlock);

	return commentCode + code + nextCode;
}


Blockly.Labster.getAdjusted = function(block, atId, opt_delta, opt_negate, opt_order) {

	return "";
}

function LabsterSaveBlock(workspace)
{
	 var xml = Blockly.Xml.workspaceToDom(workspace);
	 var xml_text = Blockly.Xml.domToText(xml);

	 return xml_text;
}

function LabsterLoadBlock(xmlWorkspace)
{
	var xml = Blockly.Xml.textToDom(xmlString);

	return xml;
}

