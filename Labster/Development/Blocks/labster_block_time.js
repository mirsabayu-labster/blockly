Blockly.defineBlocksWithJsonArray([
  {
    "type": "time",
    "message0": "Time id :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "timeId0"
      },
      {
        "type": "input_value",
        "name": "timevalue0"
      },
    ],
    "previousStatement":null,
    "nextStatement" : null,
    "colour": 160,
    "tooltip": "The <c>Time</c> class keeps track of the in-simulation time, and how it relates to real-world time."
  },
  {
    "type": "currenttime",
    "message0": "Current Time :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "currenttime0"
      },
      {
        "type": "input_value",
        "name": "currenttimevalue0"
      }
    ],
    "output":null,
    "colour": 160,
    "tooltip": "Returns the current date and time in the simulation."
  },
  {
    "type": "iterationspersecond",
    "message0": "Iterations Per Second :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "iterationspersecond0"
      },
      {
        "type": "input_value",
        "name": "iterationspersecondvalue0"
      }
    ],
    "output":null,
    "colour": 160,
    "tooltip": "Defines how often the Engine will update the simulation time per simulation second."
  },
  {
    "type": "starttime",
    "message0": "Start Time :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "starttime0"
      },
      {
        "type": "input_value",
        "name": "starttimevalue0"
      }
    ],
    "output":null,
    "colour": 160,
    "tooltip": "Defines the start of the simulation date and time."
  },
  {
    "type": "timelapseminutes",
    "message0": "Time Lapse Minutes :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "timelapseminutes0"
      },
      {
        "type": "input_value",
        "name": "timelapseminutesvalue0"
      }
    ],
    "output":null,
    "colour": 160,
    "tooltip": "Determines for how long the <c>TimeLapseMultiplier</c> will be speeding up time."
  },
  {
    "type": "timelapsemultiplier",
    "message0": "Time Lapse Multiplier :%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "timelapsemultiplier0"
      },
      {
        "type": "input_value",
        "name": "timelapsemultipliervalue0"
      }
    ],
    "output":null,
    "colour": 160,
    "tooltip": "Speeds up or slows down the time inside the simulation."
  }
]);