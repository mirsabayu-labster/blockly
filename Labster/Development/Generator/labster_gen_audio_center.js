Blockly.Labster["AudioCenter"] = function(block){

	var fieldIdCode = block.getFieldValue("AudioCenterId0");
	var valueCode = Blockly.Labster.valueToCode(block, "AudioCentervalue0", Blockly.Labster.ORDER_NONE)||'';
	var code = "<AudioCenter Id="+'"'+fieldIdCode+'" '+valueCode+" />" ;
	return code;
}

Blockly.Labster["ExternalPath"] = function(block){

	var fieldCode = block.getFieldValue("ExternalPath0");
	var valueCode = Blockly.Labster.valueToCode(block, "ExternalPathValue0", Blockly.Labster.ORDER_NONE)||'';
	var code = " ExternalPath="+'"'+fieldCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["IsSoundEnabled"] = function(block){

	var fieldCode = block.getFieldValue("IsSoundEnabled0");
	var valueCode = Blockly.Labster.valueToCode(block, "IsSoundEnabledValue0", Blockly.Labster.ORDER_NONE)||'';

	var boolValue = "False";
	if(fieldCode == "TRUE")
		boolValue = "True";
	else
		boolValue = "False";

	var code = " IsSoundEnabled="+'"'+boolValue+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["IsMusicEnabled"] = function(block){

	var fieldCode = block.getFieldValue("IsMusicEnabled0");
	var valueCode = Blockly.Labster.valueToCode(block, "IsMusicEnabledValue0", Blockly.Labster.ORDER_NONE)||'';

	var boolValue = "False";
	if(fieldCode == "TRUE")
		boolValue = "True";
	else
		boolValue = "False";

	var code = " IsMusicEnabled="+'"'+boolValue+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}