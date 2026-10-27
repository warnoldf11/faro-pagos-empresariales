import test from 'node:test';
import assert from 'node:assert/strict';
import { comision } from './comision.js';

test('una comisión de 0,5 % sobre 35 USD da 0,18 USD y no 0,17', () => {
  assert.equal(comision(3500, 5), 18);
});
