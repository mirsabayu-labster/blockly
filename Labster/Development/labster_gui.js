Blockly.Labster["gui"] = function(block){

	var blockCode = Blockly.Labster.statementToCode(block, 'gui0');

	var code = "<GUI >\n" + blockCode +"</GUI>";

	return code;
}

Blockly.Labster["guiexternal"] = function(block){

	var inputTypeCode = block.getFieldValue('guiexternal_type0');
	var inputPathCode = block.getFieldValue('guiexternal_path0');
	var valueCode = Blockly.Labster.valueToCode(block, 'guiexternal_value0', Blockly.Labster.ORDER_NONE) ||'';

	var code = "<GUIExternal Type="+'"'+inputTypeCode+'" '+"Path="+'"'+inputPathCode+'"'+valueCode+" />\n" ;

	return code;
}

Blockly.Labster["guitooltip3d"] = function(block){

	var inputIdCode = block.getFieldValue('guitooltip3d_Id0');
	var valueCode = Blockly.Labster.valueToCode(block, 'guitooltip3d_value0', Blockly.Labster.ORDER_NONE) || '';
	var statementCode = Blockly.Labster.statementToCode(block, 'guitooltip3d_statement1');

	var code = "<GUITooltip3D Id="+'"'+inputIdCode+'" '+valueCode+" />\n"+ statementCode+"\n</GUITooltip3D>\n";

	return code;
}

Blockly.Labster["label"] = function(block){

	var inputIdCode = block.getFieldValue('label_Id0');
	var valueCode = Blockly.Labster.valueToCode(block, 'label_value0', Blockly.Labster.ORDER_NONE) || '';
	var statementCode = Blockly.Labster.statementToCode(block, 'guitooltip3d_statement1');

	var code = "<Label Name="+'"'+inputIdCode+'" '+valueCode+" />\n";

	return code;
}