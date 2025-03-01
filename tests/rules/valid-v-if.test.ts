import { RuleTester } from 'eslint';
import rule from '../../src/rules/valid-v-if';

const ruleTester: RuleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: { ecmaVersion: 2015 }
});

ruleTester.run('valid-v-if', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: ''
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-if="foo")
</template>`
    },
    // parsing error
    {
      filename: 'parsing-error.vue',
      code: `<template lang="pug">
div(v-if=".")
</template>`
    },
    // comment value (parsing error)
    {
      filename: 'comment-value.vue',
      code: `<template lang="pug">
div(v-if="/**/")
</template>`
    }
  ],
  invalid: [
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-if="foo" v-else)
</template>`,
      errors: ["'v-if' and 'v-else' directives can't exist on the same element. You may want 'v-else-if' directives."]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-if="foo" v-else-if="bar")
</template>`,
      errors: ["'v-if' and 'v-else-if' directives can't exist on the same element."]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-if:aaa="foo")
</template>`,
      errors: ["'v-if' directives require no argument."]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-if.aaa="foo")
</template>`,
      errors: ["'v-if' directives require no modifier."]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-if)
</template>`,
      errors: ["'v-if' directives require that attribute value."]
    },
    // empty value
    {
      filename: 'empty-value.vue',
      code: `<template lang="pug">
div
  div(v-if="")
</template>`,
      errors: ["'v-if' directives require that attribute value."]
    }
  ]
});
