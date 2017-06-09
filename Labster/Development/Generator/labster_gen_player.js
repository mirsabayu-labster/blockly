Blockly.Labster["player"] = function(block){

	var fieldIdCode = block.getFieldValue("playerId0");
	var fieldFirstNameCode = block.getFieldValue("playerfirstname0");
	var fieldLastNameCode = block.getFieldValue("playerlastname0");
	var fieldEmailCode = block.getFieldValue("playeremail0");
	var fieldXPCode = block.getFieldValue("playerxp0");
	var valueCode = Blockly.Labster.valueToCode(block, "playervalue0", Blockly.Labster.ORDER_NONE) || '';

	var code = "<Player Id="+'"'+fieldIdCode+'" '+" FirstName="+'"'+fieldFirstNameCode+'" '+"LastName="+'"'+fieldLastNameCode+'"'
				+" Email="+'"'+fieldEmailCode+'"'+" Xp="+'"'+fieldXPCode+'" '+ valueCode + " />\n";
	return code;
}

Blockly.Labster["currentlookangle"] = function(block){

	var fieldXCode = block.getFieldValue("currentlookangleX0");
	var fieldYCode = block.getFieldValue("currentlookangleY0");
	var valueCode = Blockly.Labster.valueToCode(block, "currentlookanglevalue0", Blockly.Labster.ORDER_NONE) ||'';
	var code = " CurrentLookAngle="+'"'+fieldXCode+","+fieldYCode+'"'+ valueCode; 

	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["currentposition"] = function(block){

	var fieldXCode = block.getFieldValue("currentpositionX0");
	var fieldYCode = block.getFieldValue("currentpositionY0");
	var fieldZCode = block.getFieldValue("currentpositionZ0");
	var valueCode = Blockly.Labster.valueToCode(block, "currentpositionvalue0", Blockly.Labster.ORDER_NONE) ||'';
	var code = " CurrentPosition="+'"'+fieldXCode+","+fieldYCode+","+fieldZCode+'"'+ valueCode; 

	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["defaultquizmaxpoint"] = function(block){

	var fieldCode = block.getFieldValue("defaultquizmaxpoint0");
	var valueCode = Blockly.Labster.valueToCode(block, "defaultquizmaxpointvalue0", Blockly.Labster.ORDER_NONE) ||'';
	var code = " DefaultQuizMaxPoint="+'"'+fieldCode+'"'+ valueCode; 

	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["defaultquizminpoint"] = function(block){

	var fieldCode = block.getFieldValue("defaultquizminpoint0");
	var valueCode = Blockly.Labster.valueToCode(block, "defaultquizminpointvalue0", Blockly.Labster.ORDER_NONE) ||'';
	var code = " DefaultQuizMinPoint="+'"'+fieldCode+'"'+ valueCode; 

	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["defaultquizpointreduction"] = function(block){

	var fieldCode = block.getFieldValue("defaultquizpointreduction0");
	var valueCode = Blockly.Labster.valueToCode(block, "defaultquizpointreductionvalue0", Blockly.Labster.ORDER_NONE) ||'';
	var code = " DefaultQuizPointReduction="+'"'+fieldCode+'"'+ valueCode; 

	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["externalhandspath"] = function(block){

	var fieldCode = block.getFieldValue("externalhandspath0");
	var valueCode = Blockly.Labster.valueToCode(block, "externalhandspathvalue0", Blockly.Labster.ORDER_NONE) ||'';
	var code = " ExternalHandsPath="+'"'+fieldCode+'"'+ valueCode; 

	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["isfreelook"] = function(block){

	var fieldCode = block.getFieldValue("isfreelook0");
	var valueCode = Blockly.Labster.valueToCode(block, "isfreelookvalue0", Blockly.Labster.ORDER_NONE) ||'';

	var valueField = "False";
	if(fieldCode == "TRUE")
		valueField = "True"
	else
		valueField = "False";

	var code = " IsFreeLook="+'"'+valueField+'"'+ valueCode; 

	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["labpadhandrotation"] = function(block){

	var fieldCode = block.getFieldValue("labpadhandrotation0");
	var valueCode = Blockly.Labster.valueToCode(block, "labpadhandrotationvalue0", Blockly.Labster.ORDER_NONE) ||'';
	var code = " LabPadHandRotation="+'"'+fieldCode+'"'+ valueCode; 

	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["labpaditemid"] = function(block){

	var fieldCode = block.getFieldValue("labpaditemid0");
	var valueCode = Blockly.Labster.valueToCode(block, "labpaditemidvalue0", Blockly.Labster.ORDER_NONE) ||'';
	var code = " LabPadItemId="+'"'+fieldCode+'"'+ valueCode; 

	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["score"] = function(block){

	var fieldCode = block.getFieldValue("score0");
	var valueCode = Blockly.Labster.valueToCode(block, "scorevalue0", Blockly.Labster.ORDER_NONE) ||'';
	var code = " Score="+'"'+fieldCode+'"'+ valueCode; 

	return [code, Blockly.Labster.ORDER_NONE];
}