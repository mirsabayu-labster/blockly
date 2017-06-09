Blockly.defineBlocksWithJsonArray([
  {
    "type": "Voice",
    "message0": "Voice Id :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "text": "",
        "name": "VoiceId0"
      },
      {
        "type": "input_value",
        "name": "VoiceValue0"
      }
    ],
    "previousStatement":null,
    "nextStatement" : null,
    "colour": 60,
    "tooltip": "The <c>Voice</c> class defines the attributes of the voice used in the simulation"
  },
  {
    "type": "Gender",
    "message0": "Gender :%1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "Gender0",
        "options":[
          ["Female","Female"],
          ["Male", "Male"],
          ["Undefined", "Undefined"]
        ]
      },
      {
        "type": "input_value",
        "name": "GenderValue0"
      }
    ],
    "output" : null,
    "colour": 60,
    "tooltip": "Defines the gender of the <c>Voice</c>."
  },
  {
    "type": "GameObjectId",
    "message0": "GameObjectId :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "text": "",
        "name": "GameObjectId0"
      },
      {
        "type": "input_value",
        "name": "GameObjectIdValue0"
      }
    ],
    "output" : null,
    "colour": 60,
    "tooltip": "Specifies an object that will lip-sync to the voice-over."
  },
  {
    "type": "Group",
    "message0": "Group :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "text": "",
        "name": "Group0"
      },
      {
        "type": "input_value",
        "name": "GroupValue0"
      }
    ],
    "output" : null,
    "colour": 60,
    "tooltip": "Includes this <c>Voice</c> in a group mapped to an external voice."
  }
]);