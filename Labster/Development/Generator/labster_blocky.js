
'use strict';

goog.provide('Blockly.Labster.labster_blocky');

goog.require('Blockly.Labster');

Blockly.Labster['missions'] =  function(block) {

	var blockCode = Blockly.Labster.statementToCode(block, 'mission0')

	var code = "<Missions >\n" + blockCode + "</Missions>\n"; 

	return code;
}

Blockly.Labster['mission'] =  function(block) {

	var fieldIdCode = block.getFieldValue('mission_Id0');
	var ValueCode = Blockly.Labster.valueToCode(block, 'mission_value0', Blockly.Labster.ORDER_NONE) ||'';
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
	var valueCode = Blockly.Labster.valueToCode(block, 'task_value0', Blockly.Labster.ORDER_NONE) || '';
	var blockCode = Blockly.Labster.statementToCode(block, 'task_content1');

	var code = "<Task Id=" + '"' + fieldIdCode + '"' + " " + valueCode + " " + ">\n" + blockCode +
				"</Task>\n";

	return code;
}

Blockly.Labster["actions"] = function(block){

	var blockCode = Blockly.Labster.statementToCode(block, 'actions0');

	var code = "<Actions >\n" + blockCode + "</Actions>\n";

	return code;
}

Blockly.Labster["completewhen"] = function(block){

	var blockCode = Blockly.Labster.statementToCode(block, 'completewhen0');

	var code = "<CompleteWhen >\n" + blockCode + "</CompleteWhen>\n";

	return code;
}

Blockly.Labster["completeactions"] = function(block){

	var blockCode = Blockly.Labster.statementToCode(block, 'completeactions0');

	var code = "<CompleteActions >\n" + blockCode + "</CompleteActions>\n";

	return code;
}

Blockly.Labster["skippedwhen"] = function(block){

	var blockCode = Blockly.Labster.statementToCode(block, 'skippedwhen0');

	var code = "<SkippedWhen >\n" + blockCode + "</SkippedWhen>\n";

	return code;
}

Blockly.Labster["skippedactions"] = function(block){

	var blockCode = Blockly.Labster.statementToCode(block, 'skippedactions0');

	var code = "<SkippedActions >\n" + blockCode + "</SkippedActions>\n";

	return code;
}

Blockly.Labster["setter"] =  function(block){

	var fieldIdCode = block.getFieldValue('setter_Id0');
	var propertyCode = block.getFieldValue('setter_property0');
	var valueCode = block.getFieldValue('setter_value0');

	var code = "<Setter Id="+'"' + fieldIdCode +'"'+" "+ "Property="+'"'+propertyCode+'"'+" "+"Value="+'"'+valueCode+'"'+"/>\n";
	return code;
}

Blockly.Labster["move_to"] = function(block){

	var fieldIdCode = block.getFieldValue('move_to_Id0');

	var code = "<MoveTo Element=" + '"' + fieldIdCode + '"' + "/>\n";

	return code;
}

Blockly.Labster["data_condition"] = function(block){

	var fieldIdCode = block.getFieldValue('data_condition_Id0');
	var fieldPropertyCode = block.getFieldValue('data_condition_property0');
	var fieldComparisonCode = block.getFieldValue('data_condition_comparison0');
	var fieldValueCode = block.getFieldValue('data_condition_value0');

	var code = "<DataCondition Target="+'"'+fieldIdCode+ '" '+"Property="+'"' + fieldPropertyCode + '" ' + "Comparison="+'"'+ fieldComparisonCode +'" ' + "Value="+'"'+fieldValueCode +'"'+ "/>\n";

	return code;
}

Blockly.Labster["title_input_value"] = function(block){

	var fieldTitleCode = block.getFieldValue('title_input_value_Id0');
	var ValueCode = Blockly.Labster.valueToCode(block, 'title_input_value_content0', Blockly.Labster.ORDER_NONE) ||'';

	var code = "Title="+'"'+fieldTitleCode+'" ' + ValueCode;

	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["custom_input_value"] = function(block){

	var fieldTitleCode = block.getFieldValue('custom_input_value_Id0');
	var ValueCode = Blockly.Labster.valueToCode(block, 'custom_input_value_content0', Blockly.Labster.ORDER_NONE) ||'';

	var code = '"'+fieldTitleCode+'" ' + ValueCode;

	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["instruction_input_value"] = function(block){

	var fieldTitleCode = block.getFieldValue('instruction_input_value_Id0');
	var ValueCode = Blockly.Labster.valueToCode(block, 'instruction_input_value_content0', Blockly.Labster.ORDER_NONE) ||'';

	var code = "Instructions="+'"'+fieldTitleCode+'" ' + ValueCode;

	return [code, Blockly.Labster.ORDER_NONE];
}


// GUI SECTION
