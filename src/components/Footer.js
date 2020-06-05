import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        
        <p className="copyright">
         Built with <a href="http://gatsby-dimension.surge.sh">Gatsby.js</a> and ❤️ by <a href="http://www.adityaketkar.me"> Aditya Ketkar</a>  
        <br/>
        Get your own version of this webpage <a href="https://github.com/adityaketkar/circle-packing-personal-homepage"> here </a>
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
