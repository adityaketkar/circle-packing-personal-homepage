import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        
        <p className="copyright">
        Built with <a href="https://www.gatsbyjs.org/">Gatsby.js</a> and ❤️ by <a href="http://www.adityaketkar.me"> Aditya Ketkar </a> <br/>
        Animations using <a href="https://www.p5js.org"> P5.js </a> <br/>
            &copy; Gatsby Starter - Dimension. Design inspired from <a href="https://html5up.net">HTML5 UP</a>.
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
