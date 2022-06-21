/* eslint-disable no-irregular-whitespace */
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s
// such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

// eslint-disable-next-line max-len
const truncateSentence = (sentence: string, turncateCount: number): string => sentence.split(' ').slice(0, turncateCount).join(' ');

export default truncateSentence;
