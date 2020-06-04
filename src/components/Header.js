import PropTypes from 'prop-types'
import React from 'react'
import main from "../images/main.jpg";
import JSONData from "../content/mycontent.json"


const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo backdrop-blur">
      {/* <span className="icon fa-diamond"></span> */}
      <img src={main} style={{"maxWidth": "100%",
        "maxHeight": "100%",
        "display": "block",
        "borderRadius": "50%"
}}></img>
    </div>
    <div className="content backdrop-blur">
      <div className="inner backdrop-blur">
        <h1>{JSONData.Name}</h1>
        <p>
          {JSONData.Description.map((item,index) => {
            return (<div><br/>{item}</div>)
          })}
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
