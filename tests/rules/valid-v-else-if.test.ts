import { RuleTester } from 'eslint';
import rule from '../../src/rules/valid-v-else-if';

const ruleTester: RuleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: { ecmaVersion: 2015 }
});

ruleTester.run('valid-v-else-if', rule, {
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
  div(v-else-if="foo")
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-if="foo")
  div(v-else-if="foo")
  div(v-else-if="foo")
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
c1(v-if="1")
c2(v-else-if="1")
c3(v-else)
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-if="foo")
  slot
</template>`
    },
    // parsing error
    {
      filename: 'parsing-error.vue',
      code: `<template lang="pug">
div(v-if="foo")
div(v-else-if=".")
</template>`
    },
    // comment value (parsing error)
    {
      filename: 'comment-value.vue',
      code: `<template lang="pug">
div(v-if="foo")
div(v-else-if="/**/")
</template>`
    }
  ],
  invalid: [
    {
      filename: 'test.vue',
      code: `<template lang="pug">
template(v-else-if="foo")
  div
</template>`,
      errors: [
        "'v-else-if' directives require being preceded by the element which has a 'v-if' or 'v-else-if' directive."
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div(v-else-if="foo")
</template>`,
      errors: [
        "'v-else-if' directives require being preceded by the element which has a 'v-if' or 'v-else-if' directive."
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-else-if="foo")
</template>`,
      errors: [
        "'v-else-if' directives require being preceded by the element which has a 'v-if' or 'v-else-if' directive."
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div
  div(v-else-if="foo")
</template>`,
      errors: [
        "'v-else-if' directives require being preceded by the element which has a 'v-if' or 'v-else-if' directive."
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(if="foo")
  div(v-else-if="foo")
</template>`,
      errors: [
        "'v-else-if' directives require being preceded by the element which has a 'v-if' or 'v-else-if' directive."
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-if="foo")
  div
  div(v-else-if="foo")
</template>`,
      errors: [
        "'v-else-if' directives require being preceded by the element which has a 'v-if' or 'v-else-if' directive."
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-if="foo")
  div(v-else-if="foo" v-if="bar")
</template>`,
      errors: ["'v-else-if' and 'v-if' directives can't exist on the same element."]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-if="foo")
  div(v-else-if="foo" v-else)
</template>`,
      errors: ["'v-else-if' and 'v-else' directives can't exist on the same element."]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-if="foo")
  div(v-else-if:aaa="foo")
</template>`,
      errors: ["'v-else-if' directives require no argument."]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-if="foo")
  div(v-else-if.aaa="foo")
</template>`,
      errors: ["'v-else-if' directives require no modifier."]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
div
  div(v-if="foo")
  div(v-else-if)
</template>`,
      errors: ["'v-else-if' directives require that attribute value."]
    },
    // empty value
    {
      filename: 'empty-value.vue',
      code: `<template lang="pug">
div(v-if="foo")
div(v-else-if="")
</template>`,
      errors: ["'v-else-if' directives require that attribute value."]
    }
  ]
});
