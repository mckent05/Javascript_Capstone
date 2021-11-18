/**
 * @jest-environment jsdom
 */

import { commentCounter } from '../modules/display.js';

describe('Comment Count', () => {
  const div = document.createElement('div');
  const comments = [
    {
      creationDate: '18/11/2021',
      username: 'Bob',
      comment: 'The movie is first of its kind',
    },
    {
      creationDate: '18/11/2021',
      username: 'Bob',
      comment: 'The movie is first of its kind',
    },
    {
      creationDate: '18/11/2021',
      username: 'Bob',
      comment: 'The movie is first of its kind',
    },
  ];

  test('Length of comment list', () => {
    expect(commentCounter(comments, div)).toBe('(3)');
  });
});
