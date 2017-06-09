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

Blockly.Labster["IsShown"] = function(block){

	var fieldCode = block.getFieldValue("IsShown0");
	var valueCode = Blockly.Labster.valueToCode(block, "IsShownValue0", Blockly.Labster.ORDER_NONE)||'';

	var boolValue = "False";
	if(fieldCode == "True")
		boolValue = "True";

	var code = " IsShown="+'"'+boolValue+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["IsVisible"] = function(block){

	var fieldCode = block.getFieldValue("IsVisible0");
	var valueCode = Blockly.Labster.valueToCode(block, "IsVisibleValue0", Blockly.Labster.ORDER_NONE)||'';

	var boolValue = "False";
	if(fieldCode == "True")
		boolValue = "True";

	var code = " IsVisible="+'"'+boolValue+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["Name"] = function(block){

	var fieldCode = block.getFieldValue("Name0");
	var valueCode = Blockly.Labster.valueToCode(block, "NameValue0", Blockly.Labster.ORDER_NONE)||'';

	var code = " Name="+'"'+fieldCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["AtlasPath"] = function(block){

	var fieldCode = block.getFieldValue("AtlasPath0");
	var valueCode = Blockly.Labster.valueToCode(block, "AtlasPathValue0", Blockly.Labster.ORDER_NONE)||'';

	var code = " AtlasPath="+'"'+fieldCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}


Blockly.Labster["ImageSource"] = function(block){

	var fieldCode = block.getFieldValue("ImageSource0");
	var valueCode = Blockly.Labster.valueToCode(block, "ImageSourceValue0", Blockly.Labster.ORDER_NONE)||'';

	var code = " ImageSource="+'"'+fieldCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}


Blockly.Labster["FontPath"] = function(block){

	var fieldCode = block.getFieldValue("FontPath0");
	var valueCode = Blockly.Labster.valueToCode(block, "FontPathValue0", Blockly.Labster.ORDER_NONE)||'';

	var code = " FontPath="+'"'+fieldCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["ComparisonVisibility"] = function(block){

	var fieldCode = block.getFieldValue("ComparisonVisibility0");
	var valueCode = Blockly.Labster.valueToCode(block, "ComparisonVisibilityValue0", Blockly.Labster.ORDER_NONE)||'';

	var code = " ComparisonVisibility="+'"'+fieldCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["ComparisonValue"] = function(block){

	var fieldCode = block.getFieldValue("ComparisonValue0");
	var valueCode = Blockly.Labster.valueToCode(block, "ComparisonValueValue0", Blockly.Labster.ORDER_NONE)||'';

	var code = " ComparisonValue="+'"'+fieldCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["Position"] = function(block){

	var fieldXCode = block.getFieldValue("PositionX0");
	var fieldYCode = block.getFieldValue("PositionY0");
	var fieldZCode = block.getFieldValue("PositionZ0");
	var valueCode = Blockly.Labster.valueToCode(block, "PositionValue0", Blockly.Labster.ORDER_NONE)||'';

	var code = " Position="+'"'+fieldXCode+","+fieldYCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["Pivot"] = function(block){

	var fieldXCode = block.getFieldValue("Pivot0");
	var valueCode = Blockly.Labster.valueToCode(block, "PivotValue0", Blockly.Labster.ORDER_NONE)||'';

	var code = " Pivot="+'"'+fieldXCode+","+fieldYCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["Source"] = function(block){

	var fieldXCode = block.getFieldValue("Depth0");
	var valueCode = Blockly.Labster.valueToCode(block, "DepthValue0", Blockly.Labster.ORDER_NONE)||'';

	var code = " Pivot="+'"'+fieldXCode+","+fieldYCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}


Blockly.Labster["Depth"] = function(block){

	var fieldXCode = block.getFieldValue("Source0");
	var valueCode = Blockly.Labster.valueToCode(block, "SourceValue0", Blockly.Labster.ORDER_NONE)||'';

	var code = " Pivot="+'"'+fieldXCode+","+fieldYCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}


Blockly.Labster["Align"] = function(block){

	var fieldXCode = block.getFieldValue("Align0");
	var valueCode = Blockly.Labster.valueToCode(block, "AlignValue0", Blockly.Labster.ORDER_NONE)||'';

	var code = " Pivot="+'"'+fieldXCode+","+fieldYCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["Size"] = function(block){

	var fieldXCode = block.getFieldValue("Size0");
	var valueCode = Blockly.Labster.valueToCode(block, "SizeValue0", Blockly.Labster.ORDER_NONE)||'';

	var code = " Pivot="+'"'+fieldXCode+","+fieldYCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}

Blockly.Labster["Color"] = function(block){

	var fieldXCode = block.getFieldValue("Color0");
	var valueCode = Blockly.Labster.valueToCode(block, "ColorValue0", Blockly.Labster.ORDER_NONE)||'';

	var code = " Pivot="+'"'+fieldXCode+","+fieldYCode+'" '+valueCode;
	return [code, Blockly.Labster.ORDER_NONE];
}