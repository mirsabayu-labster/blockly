Blockly.defineBlocksWithJsonArray([
  {
    "type": "VoiceManager",
    "message0": "VoiceManager Id :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "text": "",
        "name": "VoiceManagerId0"
      },
      {
        "type": "input_value",
        "name": "VoiceManagerValue0"
      }
    ],
    "previousStatement":null,
    "nextStatement" : null,
    "colour": 50,
    "tooltip": "The <c>VoiceManager</c> class defines voiceovers for the simulation."
  },
  {
    "type": "DefaultVoiceId",
    "message0": "Default Voice Id :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "DefaultVoiceId0",
        "text": ""
      },
      {
        "type": "input_value",
        "name": "DefaultVoiceIdValue0"
      }
    ],
    "output" : null,
    "colour": 50,
    "tooltip": "Defines the <c>Id</c> of the default voice for the simulation."
  },
  {
    "type": "IsLogEnabled",
    "message0": "Is Sound Enabled :%1 %2",
    "args0": [
      {
        "type": "field_checkbox",
        "checked": false,
        "name": "IsLogEnabled0"
      },
      {
        "type": "input_value",
        "name": "IsLogEnabledValue0"
      }
    ],
    "output" : null,
    "colour": 50,
    "tooltip": "Writes messages from the <c>VoiceManager</c> to the Engine log."
  },
  {
    "type": "IsEnabled",
    "message0": "Is Enabled:%1 %2",
    "args0": [
      {
        "type": "field_checkbox",
        "checked": false,
        "name": "IsEnabled0"
      },
      {
        "type": "input_value",
        "name": "IsEnabledValue0"
      }
    ],
    "output" : null,
    "colour": 50,
    "tooltip": "Enables voiceover in the simulation."
  }
]);