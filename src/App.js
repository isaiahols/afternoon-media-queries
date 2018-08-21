import React, { Component } from 'react';
import './reset.css';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)


class App extends Component {
  constructor() {
    super();

    this.state = {
      dropDown: false,
    }
  }

  toggleDropDown() {
    this.setState({
      dropDown: !this.state.dropDown,
    })
  }

  render() {
    const { dropDown } = this.state;


    return (
      <div className="App">
        <header>
          <section>
            <h2>Start Bootstrap</h2>
            <div className="menu" onClick={() => this.toggleDropDown()}>
              <div className='menuCenter' >
                <h3>MENU</h3>
                <div className='burgerMenu' >
                  <div className='burger'></div>
                  <div className='burger'></div>
                  <div className='burger'></div>
                </div>
              </div>
            </div>
            <nav>
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </nav>
          </section>
          <div className={(dropDown ? "dropDownOn" : "") + " dropDown"}  >
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </div>
        </header>
        <main>
          <section className='topSection' >
            <div className='topSectionContent' >
              <h2>Welcome To Our Studio</h2>
              <h1> IT'S NICE TO MEET YOU</h1>
              <button>TELL ME MORE</button>
            </div>
          </section>
          <section className="services">
            <div className='services-top'>
              <h2>SERVICES</h2>
              <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            </div>
            <div className="services-main">
              <div className="services-each">
                <div className='iconHolder'>

                  {/* <i className="fas fa-shopping-cart"></i> */}
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero delectus eligendi vitae molestias rem officiis qui deserunt optio commodi! Enim!</p>
              </div>
              <div className="services-each">
                <img src="" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero delectus eligendi vitae molestias rem officiis qui deserunt optio commodi! Enim!</p>
              </div>
              <div className="services-each">
                <img src="" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero delectus eligendi vitae molestias rem officiis qui deserunt optio commodi! Enim!</p>
              </div>
            </div>
          </section>


        </main>



      </div>
    );
  }
}

export default App;
