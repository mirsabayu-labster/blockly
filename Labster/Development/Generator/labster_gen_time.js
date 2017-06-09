Blockly.Labster["time"] = function(block){

	var fieldIdCode = block.getFieldValue("timeId0");
	var valueCode = Blockly.Labster.valueToCode(block, "timevalue0", Blockly.Labster.ORDER_NONE) || '';

	var code = "<Time Id="+'"'+fieldIdCode+'" '+ valueCode + " />\n";
	return code;
}

Blockly.Labster["currenttime"] = function(block){

	var fieldCode = block.getFieldValue("currenttime0");
	var valueCode = Blockly.Labster.valueToCode(block, "currenttimevalue0", Blockly.Labster.ORDER_NONE) ||'';
	var code = " CurrentTime="+'"'+fieldCode+'"'+ valueCode; 

	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["iterationspersecond"] = function(block){

	var fieldCode = block.getFieldValue("iterationspersecond0");
	var valueCode = Blockly.Labster.valueToCode(block, "iterationspersecondvalue0", Blockly.Labster.ORDER_NONE) ||'';
	var code = " IterationsPerSecond="+'"'+fieldCode+'"'+ valueCode; 

	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["starttime"] = function(block){

	var fieldCode = block.getFieldValue("starttime0");
	var valueCode = Blockly.Labster.valueToCode(block, "starttimevalue0", Blockly.Labster.ORDER_NONE) ||'';
	var code = " StartTime="+'"'+fieldCode+'"'+ valueCode; 

	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["timelapseminutes"] = function(block){

	var fieldCode = block.getFieldValue("timelapseminutes0");
	var valueCode = Blockly.Labster.valueToCode(block, "timelapseminutesvalue0", Blockly.Labster.ORDER_NONE) ||'';
	var code = " TimeLapseMinutes="+'"'+fieldCode+'"'+ valueCode; 

	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["timelapsemultiplier"] = function(block){

	var fieldCode = block.getFieldValue("timelapsemultiplier0");
	var valueCode = Blockly.Labster.valueToCode(block, "timelapsemultipliervalue0", Blockly.Labster.ORDER_NONE) ||'';
	var code = " TimeLapseMultiplier="+'"'+fieldCode+'"'+ valueCode; 

	return [code, Blockly.Labster.ORDER_NONE];
}