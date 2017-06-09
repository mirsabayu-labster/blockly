Blockly.defineBlocksWithJsonArray([
  {
    "type": "player",
    "message0": "Player Id :%1 First Name :%2 Last Name:%3 Email :%4 Xp :%5 %6",
    "args0": [
      {
        "type": "field_input",
        "name": "playerId0"
      },
      {
        "type": "field_input",
        "name": "playerfirstname0"
      },
      {
        "type": "field_input",
        "name": "playerlastname0"
      },
      {
        "type": "field_input",
        "name": "playeremail0"
      },
      {
        "type": "field_input",
        "name": "playerxp0"
      },
      {
        "type": "input_value",
        "name": "playervalue0"
      },
    ],
    "previousStatement":null,
    "nextStatement" : null,
    "colour": 10,
    "tooltip": "The <c>Player</c> class represents the user in the simulation."
  },
  {
    "type": "currentlookangle",
    "message0": "Current Look Angle X:%1 Y:%2 %3",
    "args0": [
      {
        "type": "field_number",
        "name": "currentlookangleX0"
      },
      {
        "type": "field_number",
        "name": "currentlookangleY0"
      },
      {
        "type": "input_value",
        "name": "currentlookanglevalue0"
      }
    ],
    "output":null,
    "colour": 11,
    "tooltip": "Returns the user's current position in the simulation."
  },
  {
    "type": "currentposition",
    "message0": "Current Position : X:%1 Y%2 Z:%3 %4",
    "args0": [
      {
        "type": "field_number",
        "name": "currentpositionX0"
      },
      {
        "type": "field_number",
        "name": "currentpositionY0"
      },
      {
        "type": "field_number",
        "name": "currentpositionZ0"
      },
      {
        "type": "input_value",
        "name": "currentpositionvalue0"
      }
    ],
    "output":null,
    "colour": 12,
    "tooltip": "Returns the user's current position in the simulation."
  },
  {
    "type": "defaultquizmaxpoint",
    "message0": "Default Quiz Max Point :%1 %2",
    "args0": [
      {
        "type": "field_number",
        "name": "defaultquizmaxpoint0"
      },
      {
        "type": "input_value",
        "name": "defaultquizmaxpointvalue0"
      }
    ],
    "output":null,
    "colour": 13,
    "tooltip": "Defines the default maximum amount of points for Quiz questions in the simulation."
  },
  {
    "type": "defaultquizminpoint",
    "message0": "Default Quiz Min Point :%1 %2",
    "args0": [
      {
        "type": "field_number",
        "name": "defaultquizminpoint0"
      },
      {
        "type": "input_value",
        "name": "defaultquizminpointvalue0"
      }
    ],
    "output":null,
    "colour": 14,
    "tooltip": "Defines the default minimum amount of points for Quiz questions in the simulation."
  },
  {
    "type": "defaultquizpointreduction",
    "message0": "Default Quiz Point Reduction :%1 %2",
    "args0": [
      {
        "type": "field_number",
        "name": "defaultquizpointreduction0"
      },
      {
        "type": "input_value",
        "name": "defaultquizpointreductionvalue0"
      }
    ],
    "output":null,
    "colour": 15,
    "tooltip": "Defines the default amount of points deducted for a wrong answer to a Quiz question in the simulation."
  },
  {
    "type": "externalhandspath",
    "message0": "External Hands Path :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "externalhandspath0"
      },
      {
        "type": "input_value",
        "name": "externalhandspathvalue0"
      }
    ],
    "output":null,
    "colour": 16,
    "tooltip": "Loads the user's from the specified path."
  },
  {
    "type": "isfreelook",
    "message0": "Is Free Look :%1 %2",
    "args0": [
      {
        "type": "field_checkbox",
        "name": "isfreelook0",
        "checked": false
      },
      {
        "type": "input_value",
        "name": "isfreelookvalue0"
      }
    ],
    "output":null,
    "colour": 17,
    "tooltip": "Determines whether we allow free look camera or not (globally)"
  },
    {
    "type": "labpadhandrotation",
    "message0": "LabPad Hand Rotation:%1 %2",
    "args0": [
      {
        "type": "field_number",
        "name": "labpadhandrotation0"
      },
      {
        "type": "input_value",
        "name": "labpadhandrotationvalue0"
      }
    ],
    "output":null,
    "colour": 18,
    "tooltip": "Determines whether we allow free look camera or not (globally)"
  },
   {
    "type": "labpaditemid",
    "message0": "LabPad Item Id:%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "labpaditemid0"
      },
      {
        "type": "input_value",
        "name": "labpaditemidvalue0"
      }
    ],
    "output":null,
    "colour": 19,
    "tooltip": "Defines the Id of the LabPad in the simulation."
  },
  {
    "type": "score",
    "message0": "Score Id:%1 %2",
    "args0": [
      {
        "type": "field_number",
        "name": "score0"
      },
      {
        "type": "input_value",
        "name": "scorevalue0"
      }
    ],
    "output":null,
    "colour": 20,
    "tooltip": "Returns the user's score."
  },
]);