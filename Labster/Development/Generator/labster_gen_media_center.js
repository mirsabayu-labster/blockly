Blockly.Labster["MediaCenter"] = function(block){

	var fieldIdCode = block.getFieldValue("MediaCenterId0");
	var valueCode = Blockly.Labster.valueToCode(block, "MediaCentervalue0", Blockly.Labster.ORDER_NONE)||'';
	var code = "<MediaCenter Id="+'"'+fieldIdCode+'" '+valueCode+" />" ;
	return code;
}

Blockly.Labster["MediaList"] = function(block){

	var fieldCode = block.getFieldValue("MediaList0");
	var valueCode = Blockly.Labster.valueToCode(block, "MediaListValue0", Blockly.Labster.ORDER_NONE)||'';
	var code = " MediaList="+'"'+fieldCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["FullScreenImageURL"] = function(block){

	var fieldCode = block.getFieldValue("FullScreenImageURL0");
	var valueCode = Blockly.Labster.valueToCode(block, "FullScreenImageURLValue0", Blockly.Labster.ORDER_NONE)||'';
	var code = " FullScreenImageURL="+'"'+fieldCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}