Blockly.defineBlocksWithJsonArray([
  {
    "type": "missions",
    "message0": "Missions %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "mission0"
      }
    ],
    "previousStatement":null,
    "nextStatement" : null,
    "colour": 110,
    "tooltip": "MissionsTag"
  },

  {
    "type": "mission",
    "message0": "Mission id :%1 Value:%2",
    "args0": [
      {
        "type": "field_input",
        "name": "mission_Id0"
      },
      {
        "type": "input_value",
        "name": "mission_value0"
      }
    ],
    "message1": "Content : %1",
    "args1":[
      {
        "type": "input_statement",
        "name": "mission_content1"
      }
    ],
    "previousStatement":null,
    "nextStatement" : null,
    "colour": 160,
    "tooltip": "Mission Tag"
  },

  {
    "type": "tasks",
    "message0": "Tasks %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "tasks0"
      }
    ],
    "previousStatement":null,
    "nextStatement" : null,
    "colour": 60,
    "tooltip": "Tasks Tag"
  },

  //Task
  {
    "type": "task",
    "message0": "Task id :%1 Value:%2",
    "args0": [
      {
        "type": "field_input",
        "name": "task_Id0"
      },
      {
        "type": "input_value",
        "name": "task_value0"
      }
    ],
    "message1": "Actions : %1",
    "args1":[
      {
        "type": "input_statement",
        "name": "task_Actions1"
      }
    ],
    "message2": "CompleteWhen : %1",
    "args2":[
      {
        "type": "input_statement",
        "name": "task_CompleteWhen2"
      }
    ],
    "message3": "CompleteActions : %1",
    "args3":[
      {
        "type": "input_statement",
        "name": "task_CompleteActions3"
      }
    ],
    "previousStatement":null,
    "nextStatement" : null,
    "colour": 20,
    "tooltip": "task tag"
  },

  // <Setter Target="EGelMachine" Property="EmphasisDuration" Value="-1" />
  {
    "type": "setter",
    "message0": "Setter Target :%1 Property:%2 Value :%3",
    "args0": [
      {
        "type": "field_input",
        "name": "setter_Id0"
      },
      {
        "type": "field_dropdown",
        "name": "setter_property0",
        "options" :[
            ["IsClickable", "IsClickable"],
            ["IsFocusable", "IsFocusable"],
            ["EmphasisDuration", "EmphasisDuration"]
        ]
      },
      {
        "type": "field_input",
        "name": "setter_value0",
      }
    ],
    "previousStatement":null,
    "nextStatement" : null,
    "colour": 20,
    "tooltip": "setter tag"
  },

  // <MoveTo Element="Scene_002_ClassicMurder" />
  {
   "type": "move_to",
    "message0": "MoveTo Element :%1",
    "args0": [
      {
        "type": "field_input",
        "name": "move_to_Id0"
      }
    ],
    "previousStatement":null,
    "nextStatement" : null,
    "colour": 70,
    "tooltip": "moveTo Tag" 
  },

  // <DataCondition Target="PCR1" Property="ActiveStates" Comparison="Contains" Value="State_Running_4MixContent" />
  {
    "type": "data_condition",
    "message0": "DataCondition Target :%1 Property:%2 Comparison :%3 Value :%4",
    "args0": [
      {
        "type": "field_input",
        "name": "data_condition_Id0"
      },
      {
        "type": "field_dropdown",
        "name": "data_condition_property0",
        "options" :[
            ["IsClickable", "IsClickable"],
            ["IsFocusable", "IsFocusable"],
            ["EmphasisDuration", "EmphasisDuration"]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "data_condition_comparison0",
        "options" :[
            ["Null", "Null"],
            ["Contains", "Contains"],
            ["NotContains", "NotContains"]
        ]
      },
      {
        "type": "field_input",
        "name": "data_condition_value0",
      }
    ],
    "previousStatement":null,
    "nextStatement" : null,
    "colour": 160,
    "tooltip": "setter tag"
  },

  // <StartConversation Target="Conversation_LabPad" ConversationId="Conversation_StartTutorial" />
  {
    "type": "start_conversation",
    "message0": "StartConversation Target :%1 Content : %2",
    "args0": [
      {
        "type": "field_input",
        "name": "Id"
      },
      {
        "type": "input_value",
        "name": "Content"
      }
    ],
    "previousStatement":null,
    "nextStatement" : null,
    "colour": 85,
    "tooltip": "setter tag"
  },

    // ConversationId="Conversation_StartTutorial"
  {
    "type": "conversation_id",
    "message0": "ConversationId :%1 Content : %2",
    "args0": [
      {
        "type": "field_input",
        "name": "Id"
      },
      {
        "type": "input_value",
        "name": "Content"
      }
    ],
    "output":null,
    "colour": 85,
    "tooltip": "setter tag"
  },

  // ConversationSentence="Conversation_StartTutorial"
  {
    "type": "conversation_sentence",
    "message0": "Conversation Sentence :%1 Content : %2",
    "args0": [
      {
        "type": "field_input",
        "name": "Id"
      },
      {
        "type": "input_value",
        "name": "Content"
      }
    ],
    "output":null,
    "colour": 85,
    "tooltip": "Conversation Sentence"
  }

]);