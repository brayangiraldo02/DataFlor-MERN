import React, { Component } from 'react'
import './NavBar.css'

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <nav class="navbar">
          <div class="navbar-brand">
            <a class="navbar-logo" href="/"><img src='/img/dataflor.png' alt='DataFlor'></img></a>
          </div>
        </nav>
      </header>
    )
  }
}
