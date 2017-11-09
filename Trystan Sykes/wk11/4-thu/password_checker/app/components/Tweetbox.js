import React from 'react'
import './Tweetbox.css'

export default class Tweetbox extends React.Component {

  constructor(props) {
    super(props)
    this.OnTextAreaChange = this.OnTextAreaChange.bind(this)
    this.state = {
      content: ''

    }
  }

  OnTextAreaChange(event) {
    this.setState({content: event.target.value})
    console.log(this.state.content)
  }


  render() {
    const {content} = this.state
    const maxTweetLength = 50
    const isDisabled = content.length === 0 || content.length > maxTweetLength
    const charsLeft = maxTweetLength - content.length
    const spanClass = charsLeft < 20 ? 'warning' : ''
     
    return <div> 
      <textarea
        onChange={this.OnTextAreaChange} 
        placeholder="What's happening?" ></textarea>
      <span className={spanClass}>{maxTweetLength - content.length}</span>
      <button disabled={isDisabled}>Tweet</button>
    </div>
  }
}