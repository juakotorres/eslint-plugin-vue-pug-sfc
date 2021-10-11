import { RuleTester } from 'eslint';
import rule from '../../src/rules/no-unused-vars';

const ruleTester: RuleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: { ecmaVersion: 2015 }
});

ruleTester.run('no-unused-vars', rule, {
  valid: [
    {
      code: `<template lang="pug">
ol(v-for="i in 5")
  li {{i}}
</template>`
    },
    {
      code: `<template lang="pug">
ol(v-for="i in 5")
  li(:prop="i")
</template>`
    },
    {
      code: `<template lang="pug" v-for="i in 5">
comp(v-for="j in 10") {{i}}{{j}}
</template>`
    },
    {
      code: `<template lang="pug">
ol(v-for="i in data")
  li(v-for="f in i") {{ f.bar.baz }}
</template>`
    },
    {
      code: `<template lang="pug">
template(scope="props") {{props}}
</template>`
    },
    {
      code: `<template lang="pug">
template(scope="props")
  span(v-if="props")
</template>`
    },
    {
      code: `<template lang="pug">
div(v-for="(item, key) in items" :key="key") {{item.name}}
</template>`
    },
    {
      code: `<template lang="pug">
div(v-for="(v, i, c) in foo") {{c}}
</template>`
    },
    {
      code: `<template lang="pug">
div(v-for="x in foo") {{value | f(x)}}
</template>`
    },
    {
      code: `<template lang="pug">
div(v-for="x in foo" :[x])
</template>`
    },
    {
      code: `<template lang="pug">
div(v-for="_ in foo")
</template>`,
      options: [{ ignorePattern: '^_' }]
    },
    {
      code: `<template lang="pug">
div(v-for="ignorei in foo")
</template>`,
      options: [{ ignorePattern: '^ignore' }]
    },
    {
      code: `<template lang="pug">
div(v-for="thisisignore in foo")
</template>`,
      options: [{ ignorePattern: 'ignore$' }]
    }
  ],
  invalid: [
    {
      code: `<template lang="pug">
ol(v-for="i in 5")
  li
</template>`,
      errors: ["'i' is defined but never used."]
    },
    {
      code: `<template lang="pug">
template(scope="props")
</template>`,
      errors: ["'props' is defined but never used."]
    },
    {
      code: `<template lang="pug">
span(slot-scope="props")
</template>`,
      errors: ["'props' is defined but never used."]
    },
    {
      code: `<template lang="pug">
span
  template(scope="props")
</template>`,
      errors: ["'props' is defined but never used."]
    },
    {
      code: `<template lang="pug">
div(v-for="i in 5")
  comp(v-for="j in 10") {{i}}{{i}}
</template>`,
      errors: ["'j' is defined but never used."]
    },
    {
      code: `<template lang="pug">
ol(v-for="i in data")
  li(v-for="f in i")
</template>`,
      errors: ["'f' is defined but never used."]
    },
    {
      code: `<template lang="pug">
div(v-for="(a, b, c) in foo")
</template>`,
      errors: ["'a' is defined but never used.", "'b' is defined but never used.", "'c' is defined but never used."]
    },
    {
      code: `<template lang="pug">
div(v-for="(a, b, c) in foo") {{a}}
</template>`,
      errors: ["'b' is defined but never used.", "'c' is defined but never used."]
    },
    {
      code: `<template lang="pug">
div(v-for="(a, b, c) in foo") {{b}}
</template>`,
      errors: ["'c' is defined but never used."]
    },
    {
      code: `<template lang="pug">
div(v-for="(item, key) in items" :key="item.id") {{item.name}}
</template>`,
      errors: ["'key' is defined but never used."]
    },
    {
      code: `<template lang="pug">
div(v-for="x in items") {{value | x}}
</template>`,
      errors: [
        {
          message: "'x' is defined but never used.",
          suggestions: [
            {
              desc: 'Replace the x with _x',
              output: `<template lang="pug">
div(v-for="_x in items") {{value | x}}
</template>`
            }
          ]
        }
      ],
      options: [{ ignorePattern: '^_' }]
    },
    {
      code: `<template lang="pug">
div(v-for="x in items") {{value}}
</template>`,
      options: [{ ignorePattern: 'ignore$' }],
      errors: ["'x' is defined but never used."]
    },
    {
      code: `<template lang="pug">
span(slot-scope="props")
</template>`,
      errors: ["'props' is defined but never used."],
      options: [{ ignorePattern: '^ignore' }]
    },
    {
      code: `<template lang="pug">
span
  template(scope="props")
</template>`,
      errors: ["'props' is defined but never used."],
      options: [{ ignorePattern: '^ignore' }]
    },
    {
      code: `<template lang="pug">
div(v-for="_i in foo")
</template>`,
      errors: ["'_i' is defined but never used."]
    },
    {
      code: `<template lang="pug">
div(v-for="(a, _i) in foo")
</template>`,
      options: [{ ignorePattern: '^_' }],
      errors: ["'a' is defined but never used."]
    },
    {
      code: `<template lang="pug">
my-component(v-slot="a") {{d}}
</template>`,
      errors: ["'a' is defined but never used."]
    },
    {
      code: `<template lang="pug">
my-component(v-for="i in foo" v-slot="a") {{a}}
</template>`,
      errors: ["'i' is defined but never used."]
    },
    {
      code: `<template lang="pug">
my-component(v-for="i in foo" v-slot="a") {{i}}
</template>`,
      errors: ["'a' is defined but never used."]
    },
    {
      code: `<template lang="pug">
div(v-for="({a, b}, [c, d], e, f) in foo") {{f}}
</template>`,
      errors: [
        "'a' is defined but never used.",
        "'b' is defined but never used.",
        "'c' is defined but never used.",
        "'d' is defined but never used."
      ]
    },
    {
      code: `<template lang="pug">
div(v-for="({a, b}, c, [d], e, f) in foo") {{f}}
</template>`,
      errors: ["'a' is defined but never used.", "'b' is defined but never used.", "'d' is defined but never used."]
    },
    {
      code: `<template lang="pug">
my-component(v-slot="{a, b, c, d}") {{d}}
</template>`,
      errors: ["'a' is defined but never used.", "'b' is defined but never used.", "'c' is defined but never used."]
    },
    {
      code: `<template lang="pug">
div(v-for="({a, b: bar}, c = 1, [d], e, f) in foo") {{f}}
</template>`,
      errors: ["'a' is defined but never used.", "'bar' is defined but never used.", "'d' is defined but never used."]
    }
  ]
});
