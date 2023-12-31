import _applyDecs from "@babel/runtime/helpers/applyDecs2305";
import * as _t from "@bablr/boot-helpers/types";
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _initProto;
import { Node, Cover, CoveredBy, InjectFrom } from '@bablr/boot-helpers/decorators';
import * as productions from '@bablr/boot-helpers/productions';
import * as Regex from '@bablr/language-regex-vm-pattern';
import * as String from '@bablr/language-cstml-string';
export const name = 'Spamex';
export const dependencies = {
  Regex,
  String
};
export const grammar = (_dec = InjectFrom(productions), _dec2 = InjectFrom(productions), _dec3 = CoveredBy('Expression'), _dec4 = CoveredBy('Matcher'), _dec5 = CoveredBy('Expression'), _dec6 = CoveredBy('Matcher'), _dec7 = CoveredBy('Expression'), _dec8 = CoveredBy('Matcher'), _dec9 = CoveredBy('Expression'), _dec10 = CoveredBy('Attribute'), _dec11 = CoveredBy('Attribute'), _dec12 = CoveredBy('Props'), _dec13 = CoveredBy('Props'), _dec14 = CoveredBy('TagType'), _dec15 = CoveredBy('TagType'), _dec16 = CoveredBy('Expression'), _dec17 = CoveredBy('Matcher'), _dec18 = CoveredBy('Expression'), _dec19 = CoveredBy('StringMatcher'), _dec20 = CoveredBy('Matcher'), _dec21 = CoveredBy('Expression'), _dec22 = CoveredBy('StringMatcher'), _dec23 = CoveredBy('Matcher'), _dec24 = CoveredBy('Expression'), class SpamexGrammar {
  static {
    [_initProto] = _applyDecs(this, [[_dec, 2, "All"], [_dec2, 2, "List"], [[_dec3, Cover], 2, "Matcher"], [Cover, 2, "Expression"], [[_dec4, _dec5, Node], 2, "TriviaTokenMatcher"], [[_dec6, _dec7, Node], 2, "NodeMatcher"], [[_dec8, _dec9, Node], 2, "TokenMatcher"], [Cover, 2, "Attribute"], [[_dec10, Node], 2, "BooleanAttribute"], [[_dec11, Node], 2, "StringAttribute"], [Cover, 2, "Props"], [[_dec12, Node], 2, "MatchablesArrayProps"], [[_dec13, Node], 2, "ObjectProps"], [Node, 2, "Argument"], [Cover, 2, "TagType"], [[_dec14, Node], 2, "GlobalIdentifier"], [[_dec15, Node], 2, "Identifier"], [[_dec16, Node], 2, "Boolean"], [[_dec17, _dec18, Cover], 2, "StringMatcher"], [[_dec19, _dec20, _dec21, Node], 2, "String"], [[_dec22, _dec23, _dec24, Node], 2, "Regex"]], []).e;
  }
  constructor(...args) {
    _initProto(this);
  }
  All() {}
  List() {}
  *Matcher() {}
  *Expression() {}
  *TriviaTokenMatcher() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`<|`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`open`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`open`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`open`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Keyword`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str` `], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`value`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`|>`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`close`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`close`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`close`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
  }
  *NodeMatcher() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`<`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`open`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`open`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`open`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attributes]`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`TagType`], {}),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`type`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`All`], {}),
        props: _t.node("Spamex", "MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`{[`], {}),
          values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
            value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
          }), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
            value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
          })],
          close: _t.node("Spamex", "Punctuator", [_t.str`]}`], {})
        }),
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`All`], {}),
        props: _t.node("Spamex", "MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`{[`], {}),
          values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
            value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
          }), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
            value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
          })],
          close: _t.node("Spamex", "Punctuator", [_t.str`]}`], {})
        }),
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`>`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`close`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`close`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`close`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
  }
  *TokenMatcher() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`<|`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`open`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`open`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`open`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attributes]`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`TagType`], {}),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`type`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`All`], {}),
        props: _t.node("Spamex", "MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`{[`], {}),
          values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
            value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
          }), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
            value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
          })],
          close: _t.node("Spamex", "Punctuator", [_t.str`]}`], {})
        }),
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`All`], {}),
        props: _t.node("Spamex", "MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`{[`], {}),
          values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
            value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
          }), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
            value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
          })],
          close: _t.node("Spamex", "Punctuator", [_t.str`]}`], {})
        }),
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`All`], {}),
        props: _t.node("Spamex", "MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`{[`], {}),
          values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
            value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
          }), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
            value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
          })],
          close: _t.node("Spamex", "Punctuator", [_t.str`]}`], {})
        }),
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`|>`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`close`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`close`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`close`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
  }
  *Attributes() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`List`], {}),
        props: _t.node("Spamex", "ObjectProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.ref`[separators]`, _t.trivia` `, _t.ref`[values]`, _t.ref`[separators]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`{`], {}),
          values: [_t.node("Spamex", "Argument", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Spamex", "Literal", [_t.str`separator`], {}),
            mapOperator: _t.node("Spamex", "Punctuator", [_t.str`:`], {}),
            value: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
              open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
              value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
              close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
            })
          }), _t.node("Spamex", "Argument", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Spamex", "Literal", [_t.str`separator`], {}),
            mapOperator: _t.node("Spamex", "Punctuator", [_t.str`:`], {}),
            value: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
              open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
              value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
              close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
            })
          }), _t.node("Spamex", "Argument", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Spamex", "Literal", [_t.str`separator`], {}),
            mapOperator: _t.node("Spamex", "Punctuator", [_t.str`:`], {}),
            value: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
              open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
              value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
              close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
            })
          })],
          separators: [_t.node("Spamex", "Punctuator", [_t.str`,`], {}), _t.node("Spamex", "Punctuator", [_t.str`,`], {})],
          close: _t.node("Spamex", "Punctuator", [_t.str`}`], {})
        }),
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
  }
  *Attribute() {}
  *BooleanAttribute() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Identifier`], {}),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`key`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
  }
  *StringAttribute() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Identifier`], {}),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`key`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`=`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`mapOperator`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attributes]`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`String`], {}),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`value`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
  }
  *Props() {}
  *MatchablesArrayProps() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`{[`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`open`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`open`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`List`], {}),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`[values]`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        props: _t.node("Spamex", "ObjectProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.ref`[separators]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`{`], {}),
          values: [_t.node("Spamex", "Argument", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Spamex", "Literal", [_t.str`separator`], {}),
            mapOperator: _t.node("Spamex", "Punctuator", [_t.str`:`], {}),
            value: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
              open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
              value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
              close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
            })
          }), _t.node("Spamex", "Argument", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Spamex", "Literal", [_t.str`separator`], {}),
            mapOperator: _t.node("Spamex", "Punctuator", [_t.str`:`], {}),
            value: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
              open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
              value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
              close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
            })
          })],
          separators: [_t.node("Spamex", "Punctuator", [_t.str`,`], {})],
          close: _t.node("Spamex", "Punctuator", [_t.str`}`], {})
        }),
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`]}`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`close`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`close`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
  }
  *ObjectProps() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`{`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`open`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`open`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`List`], {}),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`[values]`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        props: _t.node("Spamex", "ObjectProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.ref`[separators]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`{`], {}),
          values: [_t.node("Spamex", "Argument", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Spamex", "Literal", [_t.str`separator`], {}),
            mapOperator: _t.node("Spamex", "Punctuator", [_t.str`:`], {}),
            value: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
              open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
              type: _t.node("Spamex", "Identifier", [_t.str`All`], {}),
              props: _t.node("Spamex", "MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
                open: _t.node("Spamex", "Punctuator", [_t.str`{[`], {}),
                values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                  open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
                  value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
                  close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
                }), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                  open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
                  value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
                  close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
                }), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                  open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
                  value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
                  close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
                })],
                close: _t.node("Spamex", "Punctuator", [_t.str`]}`], {})
              }),
              close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
            })
          }), _t.node("Spamex", "Argument", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
            key: _t.node("Spamex", "Literal", [_t.str`separator`], {}),
            mapOperator: _t.node("Spamex", "Punctuator", [_t.str`:`], {}),
            value: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
              open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
              type: _t.node("Spamex", "Identifier", [_t.str`All`], {}),
              props: _t.node("Spamex", "MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
                open: _t.node("Spamex", "Punctuator", [_t.str`{[`], {}),
                values: [_t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                  open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
                  value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
                  close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
                }), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                  open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
                  value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
                  close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
                }), _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                  open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
                  value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
                  close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
                })],
                close: _t.node("Spamex", "Punctuator", [_t.str`]}`], {})
              }),
              close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
            })
          })],
          separators: [_t.node("Spamex", "Punctuator", [_t.str`,`], {})],
          close: _t.node("Spamex", "Punctuator", [_t.str`}`], {})
        }),
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`}`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`close`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`close`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
  }
  *Argument() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Identifier`], {}),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`key`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`:`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`mapOperator`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TriviaTokenMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        value: _t.node("Spamex", "Keyword", [_t.str` `], {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attributes]`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Expression`], {}),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`value`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
  }
  *TagType() {}
  *GlobalIdentifier() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attributes]`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Identifier`], {}),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`language`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`:`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`namespaceOperator`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attributes]`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Identifier`], {}),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`type`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
  }
  *Identifier() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "Regex", [_t.ref`open`, _t.ref`[alternatives]`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`/`], {}),
        alternatives: [_t.node("Regex", "Alternative", [_t.ref`[elements]`], {
          elements: [_t.node("Regex", "Quantifier", [_t.ref`element`, _t.ref`value`], {
            element: _t.node("Regex", "CharacterSet", [_t.ref`escape`, _t.ref`value`], {
              escape: _t.node("Regex", "Punctuator", [_t.str`\\`], {}),
              value: _t.node("Regex", "Keyword", [_t.str`w`], {})
            }),
            value: _t.node("Regex", "Keyword", [_t.str`+`], {})
          })]
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`/`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
  }
  *Boolean() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Keyword`], {}),
        value: _t.node("Spamex", "Regex", [_t.ref`open`, _t.ref`[alternatives]`, _t.ref`[separators]`, _t.ref`[alternatives]`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`/`], {}),
          alternatives: [_t.node("Regex", "Alternative", [_t.ref`[elements]`, _t.ref`[elements]`, _t.ref`[elements]`, _t.ref`[elements]`], {
            elements: [_t.node("Regex", "Character", [_t.str`t`], {}), _t.node("Regex", "Character", [_t.str`t`], {}), _t.node("Regex", "Character", [_t.str`t`], {}), _t.node("Regex", "Character", [_t.str`t`], {})]
          }), _t.node("Regex", "Alternative", [_t.ref`[elements]`, _t.ref`[elements]`, _t.ref`[elements]`, _t.ref`[elements]`], {
            elements: [_t.node("Regex", "Character", [_t.str`t`], {}), _t.node("Regex", "Character", [_t.str`t`], {}), _t.node("Regex", "Character", [_t.str`t`], {}), _t.node("Regex", "Character", [_t.str`t`], {})]
          })],
          separators: [_t.node("Regex", "Punctuator", [_t.str`|`], {})],
          close: _t.node("Spamex", "Punctuator", [_t.str`/`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`value`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
  }
  StringMatcher() {}
  *String() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        language: _t.node("Spamex", "Identifier", [_t.str`String`], {}),
        namespaceOperator: _t.node("Spamex", "Punctuator", [_t.str`:`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`String`], {}),
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
  }
  *Regex() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`/`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`open`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`open`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.trivia` `, _t.ref`[attributes]`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        language: _t.node("Spamex", "Identifier", [_t.str`Regex`], {}),
        namespaceOperator: _t.node("Spamex", "Punctuator", [_t.str`:`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Alternatives`], {}),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`[alternatives]`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.ref`[attributes]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<|`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
          value: _t.node("Spamex", "Literal", [_t.str`/`], {}),
          close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
        }),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`close`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        }), _t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`close`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Instruction", "Identifier", [_t.str`eat`], {}),
      open: _t.node("Instruction", "Punctuator", [_t.str`(`], {}),
      argument: _t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.trivia` `, _t.ref`[attributes]`, _t.ref`close`], {
        open: _t.node("Spamex", "Punctuator", [_t.str`<`], {}),
        language: _t.node("Spamex", "Identifier", [_t.str`Regex`], {}),
        namespaceOperator: _t.node("Spamex", "Punctuator", [_t.str`:`], {}),
        type: _t.node("Spamex", "Identifier", [_t.str`Flags`], {}),
        attributes: [_t.node("Spamex", "StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Spamex", "Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Spamex", "Punctuator", [_t.str`=`], {}),
          value: _t.node("Spamex", "String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Spamex", "Punctuator", [_t.str`'`], {}),
            value: _t.node("Spamex", "Literal", [_t.str`flags`], {}),
            close: _t.node("Spamex", "Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Spamex", "Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Instruction", "Punctuator", [_t.str`)`], {})
    });
  }
});
