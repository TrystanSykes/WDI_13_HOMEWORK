import React from 'react'

export default class PasswordChecker extends React.Component {

  constructor(props) {
    super(props)
    this.OnInputChange = this.OnInputChange.bind(this)
    this.state = {
      password: '',
      strength: 'Very Weak'
    }
  }
    
  OnInputChange(event) {
    var password = event.target.value
    this.setState({password: password})
    this.checkStrength(password)
  }

  checkStrength(password) {
    var points = 0
    if (password.length >= 8) {
      points++
    }
    if (password.search(/[a-z]/) !== -1 ) {
      points++
    }
    if (password.search(/[A-Z]/) !== -1 ) {
      points++
    }
    if (password.search(/\d/) !== -1 ) {
      points++
    }
    if (password.search(/\W/) !== -1 ) {
      points++
    }
    this.showStrength(points)
  }

  showStrength(points) {
    if (points <= 1) {
      this.setState({strength: 'Very Weak'}) 
    }
    if (points === 2) {
      this.setState({strength: 'Weak'})
    }
    if (points === 3) {
      this.setState({strength: 'Moderate'})
    }
    if (points === 4) {
      this.setState({strength: 'Good'})
    }
    if (points === 5) {
      this.setState({strength: 'Great!'})
    }
  }

  render() {
    return <div> 
      <input
        onChange={this.OnInputChange}
        type='password'
        placeholder="Password" />
      <p>{this.state.strength}</p>
    </div>
  }
}