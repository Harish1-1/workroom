import {Component} from 'react'

import Popup from 'reactjs-popup'

class Feedback extends Component {
  closes = () => {
    const hi = 5
    return (
      <form title="New Sheet Details">
        <label>
          Sheet Name
          <input type="text" />
        </label>
        <label>
          Sheet Description
          <input type="text" />
        </label>
        <select value="Select asset">
          <option>Heavy Duty LIne</option>
          <option>Light DUty LIne</option>
        </select>
        <select value="Select subasset">
          <option>Press Up Station</option>
          <option>Knockdown Station</option>
        </select>
        <button type="submit">Start Authoring</button>
      </form>
    )
  }

  render() {
    return (
      <form>
        <select value="Select asset">
          <option>Heavy Duty LIne</option>
          <option>Light DUty LIne</option>
        </select>
        <select value="Select subasset">
          <option>Press Up Station</option>
          <option>Knockdown Station</option>
        </select>
        <Popup trigger={<button>Author New Sheet</button>} modal nested> {
          close = () => (
            <div className="model">
              <div className="content">
                <p1>How do you want to start</p1>
              </div>
              <div>
                <button onClick={() => this.closes()}>
                  <img src="" />
                </button>
                <h1>Author from scratch</h1>
                <p>
                  Build a sheet by dragging and dropping using the authoring model
                  from scratch
                </p>
              </div>
              <div>
                <button onClick={() => this.closes()}>
                  <img src="" />
                </button>
                <h1>Choose from templates</h1>
                <p>
                  Choose an already build sheet from our extensive sheets library
                  and edit on top of it.
                </p>
              </div>
            </div>
          )
        }
        </Popup>
      </form>
    )
  }
}

export default Feedback
