import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo backdrop-blur">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content backdrop-blur">
      <div className="inner backdrop-blur">
        <h1>Aditya Ketkar</h1>
        <p>
          Recent graduate from BITS Pilani. Passionate about Space Technology, Psychology and Open Source.<br/>{' '}
          <br/> I grab every chance I get to travel, learn and create.{' '}
        </p>
      </div>
    </div>
    <nav className="backdrop-blur">
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            CV
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
