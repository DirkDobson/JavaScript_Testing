import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import TodoList from '../TodoList'


describe('<TodoList />', () => {
  describe('render', () => {
  let tree

  beforeEach( () => {
    let component = shallow(<TodoList />)
    tree = toJson(component)
  })
  it('renders without crashing', () => {
  shallow(<TodoList />)
})

it('matches a snapshot', () => {
expect(tree).toMatchSnapshot()
})
})

describe('functionality', () => {
  let component 

  beforeEach( () => {
    component = shallow(<TodoList />)
  })

  it('updates state on change', () =>{
    const input = component.find('input')
    input.simulate('focus')
    input.simulate('change', { target: {name: 'name', value: 'Hello'}})
    expect(component.state('name')).toEqual('Hello')
  })
})
})
