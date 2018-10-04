import { 
  sum,
  capitalize,
} from '../utils'

it('sums two number', () => {
  const expected = 5;
  const actual = sum(2,3)
  expect(actual).toEqual(expected)
})

it('captializes a string', () => {
  const str = 'hello'
  const expected = 'Hello'
  const actual = capitalize(str)
  expect(actual).toEqual(expected)
})
