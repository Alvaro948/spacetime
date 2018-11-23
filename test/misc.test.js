'use strict';
const test = require('tape');
const spacetime = require('./lib');

test('isAwake', t => {
  let s = spacetime('March 26, 1999 13:42:00', 'Canada/Eastern');
  t.equal(s.isAwake(), true, 'awake')
  s = spacetime('March 26, 1999 23:42:00', 'Canada/Eastern');
  t.equal(s.isAwake(), false, 'sleeping')
  t.end();
});

test('asleep-test', t => {
  let s = spacetime.now();
  s = s.dayTime('night');
  t.equal(s.isAsleep(), true, 'sleeping at night');
  s = s.hour(2);
  t.equal(s.isAsleep(), true, 'sleeping at 2am');
  s = s.hour12(4);
  t.equal(s.isAsleep(), true, 'sleeping at 4am');
  s = s.dayTime('lunch');
  t.equal(s.isAsleep(), false, 'awake at lunch');
  s = s.hour24(14);
  t.equal(s.isAsleep(), false, 'awake at 2pm');
  s = s.dayTime('evening');
  t.equal(s.isAsleep(), false, 'awake at evening');
  t.end();
});

test('named-dates', t => {
  let christmas = spacetime('christmas', 'Canada/Eastern');
  let newYears = spacetime('new years', 'Canada/Eastern');
  t.equal(christmas.isBefore(newYears), true, 'christmas-is-before-new-years')
  t.end();
});

test('nearest', t => {
  let s = spacetime('Nov 2')
  s = s.nearest('month')
  t.equal(s.monthName(), 'november', 'nov')
  t.equal(s.date(), 1, 'nov 1')

  s = spacetime('Nov 23')
  s = s.nearest('month')
  t.equal(s.monthName(), 'december', 'dec')
  t.equal(s.date(), 1, 'dec 1')
  t.end();
});

test('offset', t => {
  let s = spacetime('Nov 2', 'America/New_York')
  t.equal(s.offset(), -240, '-240 offset')

  s = spacetime('march 2', 'America/New_York')
  t.equal(s.offset(), -300, '-240 offset')
  t.end();
});
