Blockly.Labster["assets"] = function(block){

	var blockCode = Blockly.Labster.statementToCode(block, "assetscontent0");
	var code = "<Assets >\n"+ blockCode+ "\n</Assets>";
	return code;
}

Blockly.Labster["asset"] = function(block){

	var fieldAssetsPathCode = block.getFieldValue("assetassetpath0");
	var code = "<Asset  AssetPath="+ fieldAssetsPathCode+" />\n";
	return code;
}
