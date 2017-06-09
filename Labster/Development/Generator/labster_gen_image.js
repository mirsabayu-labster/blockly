Blockly.Labster["Images"] = function(block){

	var blockCode = Blockly.Labster.statementToCode(block, "Images0");
	var code = "<Images >\n"+blockCode+"\n</Images>\n";

	return code;
}

Blockly.Labster["Image"] = function(block){

	var fieldIdCode = block.getFieldValue("ImageId0");
	var valueCode = Blockly.Labster.valueToCode(block, "ImageValue0", Blockly.Labster.ORDER_NONE)||'';
	var code = "<Image Id="+'"'+fieldIdCode+'" '+valueCode+" />" ;
	
	return code;
}

Blockly.Labster["Title"] = function(block){

	var fieldCode = block.getFieldValue("Title0");
	var valueCode = Blockly.Labster.valueToCode(block, "TitleValue0", Blockly.Labster.ORDER_NONE)||'';
	var code = " Title="+'"'+fieldCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["URL"] = function(block){

	var fieldCode = block.getFieldValue("URL0");
	var valueCode = Blockly.Labster.valueToCode(block, "URLValue0", Blockly.Labster.ORDER_NONE)||'';

	var code = " URL="+'"'+fieldCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["IsUnlocked"] = function(block){

	var fieldCode = block.getFieldValue("IsUnlocked0");
	var valueCode = Blockly.Labster.valueToCode(block, "IsUnlockedValue0", Blockly.Labster.ORDER_NONE)||'';

	var boolValue = "False";
	if(fieldCode == "True")
		boolValue = "True";

	var code = " IsUnlocked="+'"'+boolValue+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}