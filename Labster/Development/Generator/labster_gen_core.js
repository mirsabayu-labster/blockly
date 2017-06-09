Blockly.Labster["engine"] = function(block){

	var fieldIdCode = block.getInputField("engineId0");
	var fieldTitleCode = block.getInputField("enginetitle0");
	var fieldGameSpeedCode = block.getInputField("enginegamespeed0");
	var fieldDebugModeCode = block.getInputField("enginedebugmode0");
	var fieldAntiAliasingCode = block.getInputField("engineantialiasing0");
	var fieldTrackingCodeCode = block.getInputField("enginetrackingcode0");
	var fieldDomainCode = block.getInputField("enginedomain0");
	var fieldXMLVersionCode = block.getInputField("engineversion0");
	var blockCode = Blockly.Labster.statementToCode(block, "enginecontent1");

	var code = "<Engine Id="+'"'+fieldIdCode+'" '+"Title="+'"'+fieldTitleCode+'" '+"GameSpeed="+'" '+fieldGameSpeedCode+'" '+
				"DebugMode="+'"'+fieldDebugModeCode+'" '+"AntiAliasing="+'"'+fieldAntiAliasingCode+'" '+"TrackingCode="+'"'+fieldTrackingCodeCode+'" '
				 "Domain="+'"'+fieldDomainCode+'"'+">" + blockCode;

	return code;
}

Blockly.Labster[""] = function(block){

	


	var code =

	return code;

}

