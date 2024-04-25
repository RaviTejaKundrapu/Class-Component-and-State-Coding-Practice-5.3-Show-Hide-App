// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {FirstNameStatus: false, LastNameStatus: false}

  ShowHideFirstName = () => {
    this.setState(prevState => ({
      FirstNameStatus: !prevState.FirstNameStatus,
    }))
  }

  LastNameStatus = () => {
    this.setState(prevState => ({
      LastNameStatus: !prevState.LastNameStatus,
    }))
  }

  render() {
    const {FirstNameStatus, LastNameStatus} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="items-container">
          <div className="each-item-container">
            <button
              className="button"
              type="button"
              onClick={this.ShowHideFirstName}
            >
              Show/Hide Firstname
            </button>
            {FirstNameStatus && <p className="nameDescription">Joe</p>}
          </div>

          <div>
            <button
              className="button"
              type="button"
              onClick={this.LastNameStatus}
            >
              Show/Hide Lastname
            </button>
            {LastNameStatus && <p className="nameDescription">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
