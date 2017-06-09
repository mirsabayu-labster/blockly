Blockly.Labster["Voice"] = function(block){

	var fieldIdCode = block.getFieldValue("VoiceId0");
	var valueCode = Blockly.Labster.valueToCode(block, "VoiceValue0", Blockly.Labster.ORDER_NONE)||'';
	var code = "<Voice Id="+'"'+fieldIdCode+'" '+valueCode+" />" ;
	return code;
}

Blockly.Labster["Gender"] = function(block){

	var fieldCode = block.getFieldValue("Gender0");
	var valueCode = Blockly.Labster.valueToCode(block, "GenderValue0", Blockly.Labster.ORDER_NONE)||'';
	var code = " Gender="+'"'+fieldCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["GameObjectId"] = function(block){

	var fieldCode = block.getFieldValue("GameObjectId0");
	var valueCode = Blockly.Labster.valueToCode(block, "GameObjectIdValue0", Blockly.Labster.ORDER_NONE)||'';

	var code = " GameObjectId="+'"'+fieldCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["Group"] = function(block){

	var fieldCode = block.getFieldValue("Group0");
	var valueCode = Blockly.Labster.valueToCode(block, "GroupValue0", Blockly.Labster.ORDER_NONE)||'';

	var code = " Group="+'"'+fieldCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}