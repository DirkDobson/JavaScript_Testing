import React from 'react'

class TodoList extends React.Component {
  state = { items: [], name: '', color: ''}

  static getDerivedStateFromProps(props, state) {
    if ( props.color && props.color !== state.color)
    return {color: props.color}
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { items, name } = this.state
    this.setState({ items: [name, ...items], name: '' })
  }
  render() {
    const { name, items, color } = this.state
    return(
      <>
        <form onSubmit={this.handleSubmit}>
        <label style={ color ? { backgroundColor: color} : {} }
        >
        Add a Todo
        </label>
          <input
          name="name"
          value={name}
          required
          onChange={this.handleChange}
          />
          <ul>
            { items.map ( (item, i ) => <li key={i}>{item}</li> ) }
          </ul>
        </form>
      </>
    )
  }
}

export default TodoList