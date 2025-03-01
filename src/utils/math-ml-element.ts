// Copy of https://github.com/wooorm/mathml-tag-names/blob/b38e8765636cfa55bc8293ec9911e6835c37473d/index.js

export const MATH_ML_ELEMENT_NAMES: string[] = [
  'abs',
  'and',
  'annotation',
  'annotation-xml',
  'apply',
  'approx',
  'arccos',
  'arccosh',
  'arccot',
  'arccoth',
  'arccsc',
  'arccsch',
  'arcsec',
  'arcsech',
  'arcsin',
  'arcsinh',
  'arctan',
  'arctanh',
  'arg',
  'bvar',
  'card',
  'cartesianproduct',
  'ceiling',
  'ci',
  'cn',
  'codomain',
  'complexes',
  'compose',
  'condition',
  'conjugate',
  'cos',
  'cosh',
  'cot',
  'coth',
  'csc',
  'csch',
  'csymbol',
  'curl',
  'declare',
  'degree',
  'determinant',
  'diff',
  'divergence',
  'divide',
  'domain',
  'domainofapplication',
  'emptyset',
  'encoding',
  'eq',
  'equivalent',
  'eulergamma',
  'exists',
  'exp',
  'exponentiale',
  'factorial',
  'factorof',
  'false',
  'floor',
  'fn',
  'forall',
  'function',
  'gcd',
  'geq',
  'grad',
  'gt',
  'ident',
  'image',
  'imaginary',
  'imaginaryi',
  'implies',
  'in',
  'infinity',
  'int',
  'integers',
  'intersect',
  'interval',
  'inverse',
  'lambda',
  'laplacian',
  'lcm',
  'leq',
  'limit',
  'list',
  'ln',
  'log',
  'logbase',
  'lowlimit',
  'lt',
  'maction',
  'malign',
  'maligngroup',
  'malignmark',
  'malignscope',
  'math',
  'matrix',
  'matrixrow',
  'max',
  'mean',
  'median',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mfraction',
  'mglyph',
  'mi',
  'min',
  'minus',
  'mlabeledtr',
  'mmultiscripts',
  'mn',
  'mo',
  'mode',
  'moment',
  'momentabout',
  'mover',
  'mpadded',
  'mphantom',
  'mprescripts',
  'mroot',
  'mrow',
  'ms',
  'mspace',
  'msqrt',
  'mstyle',
  'msub',
  'msubsup',
  'msup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'naturalnumbers',
  'neq',
  'none',
  'not',
  'notanumber',
  'notin',
  'notprsubset',
  'notsubset',
  'or',
  'otherwise',
  'outerproduct',
  'partialdiff',
  'pi',
  'piece',
  'piecewice',
  'piecewise',
  'plus',
  'power',
  'primes',
  'product',
  'prsubset',
  'quotient',
  'rationals',
  'real',
  'reals',
  'reln',
  'rem',
  'root',
  'scalarproduct',
  'sdev',
  'sec',
  'sech',
  'select',
  'selector',
  'semantics',
  'sep',
  'set',
  'setdiff',
  'sin',
  'sinh',
  'subset',
  'sum',
  'tan',
  'tanh',
  'tendsto',
  'times',
  'transpose',
  'true',
  'union',
  'uplimit',
  'var',
  'variance',
  'vector',
  'vectorproduct',
  'xor'
];

export function isMathMlWellKnownElementName(name: string): boolean {
  return MATH_ML_ELEMENT_NAMES.includes(name);
}
