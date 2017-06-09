Blockly.defineBlocksWithJsonArray([
  {
    "type": "IsShown",
    "message0": "IsShown :%1 %2",
    "args0": [
      {
        "type": "field_checkbox",
        "checked": false,
        "name": "IsShown0"
      },
      {
        "type": "input_value",
        "name": "IsShownValue0"
      }
    ],
    "output" : null,
    "colour": 100,
    "tooltip": ""
  },
  {
      "type": "IsVisible",
      "message0": "IsVisible :%1 %2",
      "args0": [
        {
          "type": "field_checkbox",
          "checked": false,
          "name": "IsVisible0"
        },
        {
          "type": "input_value",
          "name": "IsVisibleValue0"
        }
      ],
      "output" : null,
    "colour": 100,
      "tooltip": "Toggles the visibility of the object."
  },
  {
      "type": "Name",
      "message0": "Name :%1 %2",
      "args0": [
        {
          "type": "field_input",
          "text": "",
          "name": "Name0"
        },
        {
          "type": "input_value",
          "name": "NameValue0"
        }
      ],
      "output" : null,
      "colour": 100,
      "tooltip": "Gui Name"
  },
  {
      "type": "AtlasPath",
      "message0": "Atlas Path :%1 %2",
      "args0": [
        {
          "type": "field_input",
          "text": "",
          "name": "AtlasPath0"
        },
        {
          "type": "input_value",
          "name": "AtlasPathValue0"
        }
      ],
      "output" : null,
      "colour": 100,
      "tooltip": "Gui Atlas Path"
  },
   {
      "type": "ImageSource",
      "message0": "Image Source :%1 %2",
      "args0": [
        {
          "type": "field_input",
          "text": "",
          "name": "ImageSource0"
        },
        {
          "type": "input_value",
          "name": "ImageSourceValue0"
        }
      ],
      "output" : null,
      "colour": 100,
      "tooltip": "Gui Image Source"
  },
   {
      "type": "FontPath",
      "message0": "Font Path :%1 %2",
      "args0": [
        {
          "type": "field_input",
          "text": "",
          "name": "FontPath0"
        },
        {
          "type": "input_value",
          "name": "FontPathValue0"
        }
      ],
      "output" : null,
      "colour": 100,
      "tooltip": "Gui Font Path"
  },
  {
      "type": "ComparisonVisibility",
      "message0": "Comparison Visibility :%1 %2",
      "args0": [
        {
          "type": "field_input",
          "text": "",
          "name": "ComparisonVisibility0"
        },
        {
          "type": "input_value",
          "name": "ComparisonVisibilityValue0"
        }
      ],
      "output" : null,
      "colour": 100,
      "tooltip": "Gui Comparison Visibility"
  },
  {
      "type": "ComparisonValue",
      "message0": "Comparison Value :%1 %2",
      "args0": [
        {
          "type": "field_input",
          "text": "",
          "name": "ComparisonValue0"
        },
        {
          "type": "input_value",
          "name": "ComparisonValueValue0"
        }
      ],
      "output" : null,
      "colour": 100,
      "tooltip": "Gui  Comparison Value"
  },
  {
      "type": "Position",
      "message0": "Position X:%1 Y:%2 %3",
      "args0": [
        {
          "type": "field_number",
          "value": "",
          "name": "PositionX0"
        },
        {
          "type": "field_number",
          "value": "",
          "name": "PositionY0"
        },
        {
          "type": "input_value",
          "name": "PositionValue0"
        }
      ],
      "output" : null,
      "colour": 100,
      "tooltip": "Gui  Comparison Value"
  },
  {
      "type": "Pivot",
      "message0": "Pivot :%1 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "Pivot0",
          "options": [
          ["TopLeft", "TopLeft"],
          ["Top", "Top"],
          ["TopRight", "TopRight"],
          ["Left", "Left"],
          ["Center", "Center"],
          ["Right", "Right"],
          ["BottomLeft", "BottomLeft"],
          ["Bottom", "Bottom"],
          ["BottomRight", "BottomRight"]
          ]
        },
        {
          "type": "input_value",
          "name": "PivotValue0"
        }
      ],
      "output" : null,
      "colour": 100,
      "tooltip": "Gui  Pivot"
  },
  {
      "type": "Source",
      "message0": "Source :%1 %2",
      "args0": [
        {
          "type": "field_input",
          "text": "",
          "name": "Source0"
        },
        {
          "type": "input_value",
          "name": "SourceValue0"
        }
      ],
      "output" : null,
      "colour": 100,
      "tooltip": "Gui  Source"
  },
  {
      "type": "Depth",
      "message0": "Depth :%1 %2",
      "args0": [
        {
          "type": "field_number",
          "value": 0,
          "name": "Depth0"
        },
        {
          "type": "input_value",
          "name": "DepthValue0"
        }
      ],
      "output" : null,
      "colour": 100,
      "tooltip": "Defines the depth of the Widget."
  },
  {
      "type": "Align",
      "message0": "Align :%1 %2",
      "args0": [
         {
          "type": "field_dropdown",
          "name": "Align0",
          "options": [
          ["TopLeft", "TopLeft"],
          ["Top", "Top"],
          ["TopRight", "TopRight"],
          ["Left", "Left"],
          ["Center", "Center"],
          ["Right", "Right"],
          ["BottomLeft", "BottomLeft"],
          ["Bottom", "Bottom"],
          ["BottomRight", "BottomRight"]
          ]
        },
        {
          "type": "input_value",
          "name": "AlignValue0"
        }
      ],
      "output" : null,
      "colour": 100,
      "tooltip": "Aligns the Widget in the parent GUI."
  },
   {
      "type": "Size",
      "message0": "Size X:%1 Y:%2",
      "args0": [
        {
          "type": "field_number",
          "value": 0,
          "name": "SizeX0"
        },
        {
          "type": "field_number",
          "value": 0,
          "name": "SizeY0"
        },
        {
          "type": "input_value",
          "name": "SizeValue0"
        }
      ],
      "output" : null,
      "colour": 100,
      "tooltip": "Defines the size in pixels of the Widget."
  },
  {
      "type": "Color",
      "message0": "Color :%1 %2",
      "args0": [
        {
          "type": "field_colour",
          "colour": "#75b0eb",
          "name": "Color0"
        },
        {
          "type": "input_value",
          "name": "ColorValue0"
        }
      ],
      "output" : null,
      "colour": 100,
      "tooltip": "Defines the size in pixels of the Widget."
  } 

]);