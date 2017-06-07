
'use strict';

goog.provide('Blockly.Labster.labster_blocky');

goog.require('Blockly.Labster');

Blockly.Labster['missions'] =  function(block) {

	var blockCode = Blockly.Labster.statementToCode(block, 'mission0')

	var code = "<Missions >\n" + blockCode + "</Missions>"; 

	return code;
}

Blockly.Labster['mission'] =  function(block) {

	var fieldIdCode = block.getFieldValue('mission_Id0');
	var ValueCode = Blockly.Labster.valueToCode(block, 'FROM', Blockly.Labster.ORDER_NONE) ||'';
	var blockCode = Blockly.Labster.statementToCode(block, 'mission_content1')

	var code = "<Mission Id="+ '"'+ fieldIdCode + '" '+ ValueCode +" >\n" + blockCode + "</Missions>\n"; 

	return code;
}

Blockly.Labster["tasks"] = function(block) {

	var blockCode = Blockly.Labster.statementToCode(block, 'tasks0');

	var code = "<Tasks >\n" + blockCode + "</Tasks>\n";

	return code;
}

Blockly.Labster["task"] = function(block) {

	var fieldIdCode =  block.getFieldValue('task_Id0');
	var valueCode = Blockly.Labster.valueToCode(block, 'FROM', Blockly.Labster.ORDER_NONE) || '';
	var actionCode = Blockly.Labster.statementToCode(block, 'task_Actions1');
	var completeWhenCode = Blockly.Labster.statementToCode(block, 'task_CompleteWhen2');
	var completeActionsCode = Blockly.Labster.statementToCode(block, 'task_CompleteActions3');

	var actionWrap = "";
	if(actionCode != null && actionCode != ""){
		actionWrap = "\n<Actions>\n" + actionCode + "\n</Actions>\n";
	}

	var completeWhenWrap = "";
	if(completeWhenCode != null && completeWhenCode != ""){
		completeWhenWrap = "\n<CompleteWhen>\n" + completeWhenCode+"\n</CompleteWhen>\n";
	}

	var completeActionsWrap = "";
	if(completeActionsCode != null && completeActionsCode != ""){
		completeActionsWrap = "\n<CompleteActions>\n" + completeActionsCode + "\n</CompleteActions>\n";
	}

	var code = "<Task Id=" + '"' + fieldIdCode + '"' + " " + valueCode + " " + ">" + 
				actionWrap + completeWhenWrap + completeActionsWrap +
				"</Task>";

	return code;
}

Blockly.Labster["setter"] =  function(block){

	var fieldIdCode = block.getFieldValue('setter_Id0');
	var propertyCode = block.getFieldValue('setter_property0');
	var valueCode = block.getFieldValue('setter_value0');

	var code = "<Setter Id="+'"' + fieldIdCode +'"'+" "+ "Property="+'"'+propertyCode+'"'+" "+"Value="+'"'+valueCode+'"'+"/>";
	return code;
}

Blockly.Labster["move_to"] = function(block){

	var fieldIdCode = block.getFieldValue('move_to_Id0');

	var code = "<Element Element=" + '"' + fieldIdCode + '"' + "/>";

	return code;
}

Blockly.Labster["data_condition"] = function(block){

	var fieldIdCode = block.getFieldValue('data_condition_Id0');
	var fieldPropertyCode = block.getFieldValue('data_condition_property0');
	var fieldComparisonCode = block.getFieldValue('data_condition_comparison0');
	var fieldValueCode = block.getFieldValue('data_condition_value0');

	var code = "<DataCondition Target="+'"'+fieldIdCode+ '" '+"Property="+'"' + fieldPropertyCode + '" ' + "Comparison="+'"'+ fieldComparisonCode +'" ' + "Value="+'"'+fieldValueCode +'"'+ "/>";

	return code;
}
