Blockly.defineBlocksWithJsonArray([
  {
    "type": "AudioCenter",
    "message0": "AudioCenter Id :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "text": "",
        "name": "AudioCenterId0"
      },
      {
        "type": "input_value",
        "name": "AudioCentervalue0"
      }
    ],
    "previousStatement":null,
    "nextStatement" : null,
    "colour": 40,
    "tooltip": "The <c>AudioCenter</c> class loads assets for sound effects in the simulation."
  },
  {
    "type": "ExternalPath",
    "message0": "External Path :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "ExternalPath"
      },
      {
        "type": "input_value",
        "name": "ExternalPathValue0"
      }
    ],
    "output" : null,
    "colour": 40,
    "tooltip": "Specifies the path for the sound effects to be loaded."
  },
  {
    "type": "IsSoundEnabled",
    "message0": "Is Sound Enabled :%1 %2",
    "args0": [
      {
        "type": "field_checkbox",
        "checked": false,
        "name": "IsSoundEnabled0"
      },
      {
        "type": "input_value",
        "name": "IsSoundEnabledValue0"
      }
    ],
    "output" : null,
    "colour": 40,
    "tooltip": "Locates the full-screen image to be displayed."
  },
  {
    "type": "IsMusicEnabled",
    "message0": "Is Music Enabled :%1 %2",
    "args0": [
      {
        "type": "field_checkbox",
        "checked": false,
        "name": "IsMusicEnabled0"
      },
      {
        "type": "input_value",
        "name": "IsMusicEnabledValue0"
      }
    ],
    "output" : null,
    "colour": 40,
    "tooltip": "Enables music in the scene."
  }
]);