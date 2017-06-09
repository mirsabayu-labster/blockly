Blockly.Labster["VoiceManager"] = function(block){

	var fieldIdCode = block.getFieldValue("VoiceManagerId0");
	var valueCode = Blockly.Labster.valueToCode(block, "VoiceManagerValue0", Blockly.Labster.ORDER_NONE)||'';
	var code = "<VoiceManager Id="+'"'+fieldIdCode+'" '+valueCode+" />" ;
	return code;
}

Blockly.Labster["DefaultVoiceId"] = function(block){

	var fieldCode = block.getFieldValue("DefaultVoiceId0");
	var valueCode = Blockly.Labster.valueToCode(block, "DefaultVoiceIdValue0", Blockly.Labster.ORDER_NONE)||'';
	var code = " DefaultVoiceId="+'"'+fieldCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["IsLogEnabled"] = function(block){

	var fieldCode = block.getFieldValue("IsLogEnabled0");
	var valueCode = Blockly.Labster.valueToCode(block, "IsLogEnabledValue0", Blockly.Labster.ORDER_NONE)||'';

	var boolValue = "False";
	if(fieldCode == "TRUE")
		boolValue = "True";
	else
		boolValue = "False";

	var code = " IsLogEnabled="+'"'+boolValue+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["IsEnabled"] = function(block){

	var fieldCode = block.getFieldValue("IsEnabled0");
	var valueCode = Blockly.Labster.valueToCode(block, "IsEnabledValue0", Blockly.Labster.ORDER_NONE)||'';

	var boolValue = "False";
	if(fieldCode == "TRUE")
		boolValue = "True";
	else
		boolValue = "False";

	var code = " IsEnabled="+'"'+boolValue+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}