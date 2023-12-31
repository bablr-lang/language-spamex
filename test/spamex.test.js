import { expect } from 'expect';
import { parse as miniparse, buildTag } from '@bablr/miniparser';
import * as spamex from '@bablr/miniparser-language-spamex';

const emptyRegex = {
  type: 'RegexMatcher',
  pattern: {
    type: 'Pattern',
    alternatives: [
      {
        type: 'Alternative',
        elements: [],
      },
    ],
  },
  flags: {
    type: 'Flags',
    dotAll: false,
    global: false,
    ignoreCase: false,
    multiline: false,
    sticky: true,
    unicode: false,
  },
};

const errorCases = [];

const validTestCases = {
  TokenMatcher: [
    {
      print: false,
      source: '<|ID|>',
      ast: {
        type: 'TokenMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        value: null,
        attrs: [],
        args: [],
      },
    },
    {
      source: '<| ID |>',
      ast: {
        type: 'TokenMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        value: null,
        attrs: [],
        args: [],
      },
    },
    {
      source: "<| ID '' |>",
      ast: {
        type: 'TokenMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        value: { type: 'StringMatcher', value: '' },
        attrs: [],
        args: [],
      },
    },
    {
      source: "<| ID 'foo' |>",
      ast: {
        type: 'TokenMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        value: { type: 'StringMatcher', value: 'foo' },
        attrs: [],
        args: [],
      },
    },
    {
      source: '<| ID // |>',
      ast: {
        type: 'TokenMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        value: emptyRegex,
        attrs: [],
        args: [],
      },
    },
    {
      source: '<| ID /of/ |>',
      ast: {
        type: 'TokenMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        value: {
          type: 'RegexMatcher',
          pattern: {
            type: 'Pattern',
            alternatives: [
              {
                type: 'Alternative',
                elements: [
                  {
                    type: 'Character',
                    value: 'o',
                  },
                  {
                    type: 'Character',
                    value: 'f',
                  },
                ],
              },
            ],
          },
          flags: {
            type: 'Flags',
            dotAll: false,
            global: false,
            ignoreCase: false,
            multiline: false,
            sticky: true,
            unicode: false,
          },
        },
        attrs: [],
        args: [],
      },
    },
    {
      source: "<| ID foo='bar' |>",
      ast: {
        type: 'TokenMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        value: null,
        attrs: [{ type: 'AttributeMatcher', key: 'foo', value: 'bar' }],
        args: [],
      },
    },
    {
      source: "<| ID foo='bar' baz='quux' |>",
      ast: {
        type: 'TokenMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        value: null,
        attrs: [
          { type: 'AttributeMatcher', key: 'foo', value: 'bar' },
          { type: 'AttributeMatcher', key: 'baz', value: 'quux' },
        ],
        args: [],
      },
    },
    {
      source: "<| ID 'moof' vroom='graarrr' |>",
      ast: {
        type: 'TokenMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        value: { type: 'StringMatcher', value: 'moof' },
        attrs: [{ type: 'AttributeMatcher', key: 'vroom', value: 'graarrr' }],
        args: [],
      },
    },
    {
      print: false,
      source: '<| ID {} |>',
      ast: {
        type: 'TokenMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        value: null,
        attrs: [],
        args: [],
      },
    },
    {
      print: false,
      source: "<| ID {foo:'bar'} |>",
      ast: {
        type: 'TokenMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        value: null,
        attrs: [],
        args: [{ type: 'Argument', key: 'foo', value: { type: 'StringMatcher', value: 'bar' } }],
      },
    },
    {
      source: "<| ID { foo: 'bar' } |>",
      ast: {
        type: 'TokenMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        value: null,
        attrs: [],
        args: [{ type: 'Argument', key: 'foo', value: { type: 'StringMatcher', value: 'bar' } }],
      },
    },
    {
      source: "<| ID 'ok' { foo: 'bar' } |>",
      ast: {
        type: 'TokenMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        value: { type: 'StringMatcher', value: 'ok' },
        attrs: [],
        args: [{ type: 'Argument', key: 'foo', value: { type: 'StringMatcher', value: 'bar' } }],
      },
    },
    {
      source: "<| ID foo='bar' { foo: 'bar' } |>",
      ast: {
        type: 'TokenMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        value: null,
        attrs: [{ type: 'AttributeMatcher', key: 'foo', value: 'bar' }],
        args: [{ type: 'Argument', key: 'foo', value: { type: 'StringMatcher', value: 'bar' } }],
      },
    },
    {
      source: '<| ID { kw: <| KW |>, re: // } |>',
      ast: {
        type: 'TokenMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        value: null,
        attrs: [],
        args: [
          {
            type: 'Argument',
            key: 'kw',
            value: {
              type: 'TokenMatcher',
              tagName: { type: 'Identifier', production: 'KW', language: 'Spamex' },
              value: null,
              attrs: [],
              args: [],
            },
          },
          { type: 'Argument', key: 're', value: emptyRegex },
        ],
      },
    },
  ],

  NodeMatcher: [
    {
      source: '<ID>',
      ast: {
        type: 'NodeMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        attrs: [],
        args: [],
      },
    },
    {
      source: "<ID foo='bar'>",
      ast: {
        type: 'NodeMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        attrs: [{ type: 'AttributeMatcher', key: 'foo', value: 'bar' }],
        args: [],
      },
    },
    {
      source: "<ID foo='bar' baz='quux'>",
      ast: {
        type: 'NodeMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        attrs: [
          { type: 'AttributeMatcher', key: 'foo', value: 'bar' },
          { type: 'AttributeMatcher', key: 'baz', value: 'quux' },
        ],
        args: [],
      },
    },
    {
      print: false,
      source: '<ID {}>',
      ast: {
        type: 'NodeMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        attrs: [],
        args: [],
      },
    },
    {
      print: false,
      source: "<ID {foo:'bar'}>",
      ast: {
        type: 'NodeMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        attrs: [],
        args: [{ type: 'Argument', key: 'foo', value: { type: 'StringMatcher', value: 'bar' } }],
      },
    },
    {
      source: "<ID { foo: 'bar' }>",
      ast: {
        type: 'NodeMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        attrs: [],
        args: [{ type: 'Argument', key: 'foo', value: { type: 'StringMatcher', value: 'bar' } }],
      },
    },
    {
      source: "<ID foo='bar' { foo: 'bar' }>",
      ast: {
        type: 'NodeMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        attrs: [{ type: 'AttributeMatcher', key: 'foo', value: 'bar' }],
        args: [{ type: 'Argument', key: 'foo', value: { type: 'StringMatcher', value: 'bar' } }],
      },
    },
    {
      source: '<ID { kw: <KW>, re: // }>',
      ast: {
        type: 'NodeMatcher',
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
        attrs: [],
        args: [
          {
            type: 'Argument',
            key: 'kw',
            value: {
              type: 'NodeMatcher',
              tagName: { type: 'Identifier', production: 'KW', language: 'Spamex' },
              attrs: [],
              args: [],
            },
          },
          { type: 'Argument', key: 're', value: emptyRegex },
        ],
      },
    },
  ],
};

describe('SPAM Expressions', () => {
  describe('parse', () => {
    const parse = (text) => miniparse(spamex, text, 'Expression', { monomorphic: false });
    it('[empty] throws', () => {
      expect(() => parse('')).toThrowError();
    });

    describe('TokenMatcher', () => {
      it(`<| ID'' |> throws`, () => {
        expect(() => parse(`<| ID'' |>`)).toThrowError();
      });

      it(`<| ID foo='bar'baz='quux' |> throws`, () => {
        expect(() => parse(`<| ID foo='bar'baz='quux' |>`)).toThrowError();
      });

      it(`<| ID 'moof'vroom='graarrr' |> throws`, () => {
        expect(() => parse(`<| ID 'moof'vroom='graarrr' |>`)).toThrowError();
      });

      it(`<| ID 'ok'{ foo: 'bar' } |> throws`, () => {
        expect(() => parse(`<| ID 'ok'{ foo: 'bar' } |>`)).toThrowError();
      });

      it(`<| ID foo='bar'{ foo: 'bar' } |> throws`, () => {
        expect(() => parse(`<| ID foo='bar'{ foo: 'bar' } |>`)).toThrowError();
      });

      for (const { source, ast } of validTestCases.TokenMatcher) {
        it(source, () => {
          expect(parse(source)).toEqual(ast);
        });
      }
    });

    describe('NodeMatcher', () => {
      it('< ID > throws', () => {
        expect(() => parse('< ID >')).toThrowError();
      });

      it(`<ID foo='bar'baz='quux'> throws`, () => {
        expect(() => parse(`<ID foo='bar'baz='quux'>`)).toThrowError();
      });

      it(`<ID foo='bar'{ foo: 'bar' }> throws`, () => {
        expect(() => parse(`<ID foo='bar'{ foo: 'bar' }>`)).toThrowError();
      });

      for (const { source, ast } of validTestCases.NodeMatcher) {
        it(source, () => {
          expect(parse(source)).toEqual(ast);
        });
      }
    });
  });

  describe('buildTag', () => {
    const spam = buildTag(spamex, 'Expression', { monomorphic: false });
    const str = (...args) => ({
      type: 'StringMatcher',
      value: { value: String.raw(...args) },
    });

    it.skip("spam`'${[]}'`", () => {
      expect(spam`'${''}'`).toEqual({});
    });

    it('spam`<| ID ${str`value`} |>`', () => {
      expect(spam`<| ID ${str`value`} |>`).toEqual({
        type: 'TokenMatcher',
        value: {
          type: 'StringMatcher',
          value: {
            value: 'value',
          },
        },
        attrs: [],
        args: [],
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
      });
    });

    it('spam`<| ID ${[...attrs]} |>`', () => {
      const attrs = [
        {
          type: 'AttributeMatcher',
          key: 'foo',
          value: 'bar',
        },
      ];
      expect(spam`<| ID ${attrs} |>`).toEqual({
        type: 'TokenMatcher',
        value: null,
        attrs,
        args: [],
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
      });
    });

    it('spam`<ID {${args}}>`', () => {
      const args = [
        {
          type: 'Argument',
          key: 'foo',
          value: { type: 'StringMatcher', value: 'bar' },
        },
      ];
      expect(spam`<ID {${args}}>`).toEqual({
        type: 'NodeMatcher',
        attrs: [],
        args,
        tagName: { type: 'Identifier', production: 'ID', language: 'Spamex' },
      });
    });
  });
});

describe('printing spamex', () => {});
