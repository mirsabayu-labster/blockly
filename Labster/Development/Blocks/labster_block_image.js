Blockly.defineBlocksWithJsonArray([
  {
    "type": "Images",
    "message0": "Images :%1",
    "args0": [
      {
        "type": "input_statement",
        "name": "Images0"
      }
    ],
    "previousStatement":null,
    "nextStatement" : null,
    "colour": 70,
    "tooltip": "Images Tag"
  },
  {
    "type": "Image",
    "message0": "Image Id :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "text": "",
        "name": "ImageId0"
      },
      {
        "type": "input_value",
        "name": "ImageValue0"
      }
    ],
    "previousStatement":null,
    "nextStatement" : null,
    "colour": 70,
    "tooltip": "The <c>Image</c> class defines an image to be displayed in the simulation."
  },
   {
    "type": "Title",
    "message0": "Title :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "text": "",
        "name": "Title0"
      },
      {
        "type": "input_value",
        "name": "TitleValue0"
      }
    ],
    "output" : null,
    "colour": 70,
    "tooltip": "Defines the title of the Image to be displayed."
  },
   {
    "type": "URL",
    "message0": "URL :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "text": "",
        "name": "URL0"
      },
      {
        "type": "input_value",
        "name": "URLValue0"
      }
    ],
    "output" : null,
    "colour": 70,
    "tooltip": "Specifies the source of the Image to be displayed."
  },
  {
    "type": "IsUnlocked",
    "message0": "IsUnlocked :%1 %2",
    "args0": [
      {
        "type": "field_checkbox",
        "checked": false,
        "name": "IsUnlocked0"
      },
      {
        "type": "input_value",
        "name": "IsUnlockedValue0"
      }
    ],
    "output" : null,
    "colour": 70,
    "tooltip": "Allows the Image to be viewed by the user once unlocked during the simulation."
  }
]);