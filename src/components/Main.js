import PropTypes from 'prop-types'
import React from 'react'
import intro from '../images/intro.jpg'
import work from '../images/work.png'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={intro} alt="" />
          </span>
          <p>
          I’m a Computer Science major by day, a professional Table Tennis player by evening,
          <br/> a functional wantrepreneur brainstorming solutions to interesting problems with friends by midnight and a hustler always. 
          <br/>If you can’t find me, it’s because I’m already cycling or hiking, off to a tournament, or studying for an exam!
          </p>
          <p>
          I am passionate about Space Technology and Human Psychology (though, never studied them formally). A die-hard fan of Elon Musk.<br/><br/> I love the way the concept of "work" has evolved over the past decades, and hence would love to travel and work together whenever I can.<br/>
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={work} alt="" />
          </span>
          <p>
            I am currently full time Software Developer Engineer at Microsoft.
            <br/><br/>
            Previously, I have interned with :
            <ul>
            <li> Amazon India<br/></li>
            <li><a target="_blank" href="https://drive.google.com/file/d/1fMoF7gUfsow8BxTIK7I7jf9wmq9v7wfq/view" > North-Eastern Space Application Center (ISRO) </a><br/></li>
            <li><a target="_blank" href="https://drive.google.com/file/d/1H9H4ja9TgpxYf4QxSfQH2bCZWyAFYwlC/view?usp=sharing" > Computer Vision Center, Universitat Autonoma de Barcelona </a><br/></li>
            </ul>
          </p>
          <p>
            Some of the side projects I did can be found here : 
            <ul>
            <li><a target="_blank" href="https://github.com/adityaketkar/eisenlist" > EisenList </a><br/></li>
            <li><a target="_blank" href="https://bitsdelor.wixsite.com/delor" > DelOr </a><br/></li>
            <li><a target="_blank" href="https://medium.com/@ketkaraditya/hey-alexa-meet-music-1f7319750af7" > Alexa Music Companion </a><br/></li>
            <li><a target="_blank" href="https://medium.com/@ketkaraditya/hey-alexa-meet-music-1f7319750af7" > Gatsby Personal Webpage </a><br/></li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major"> CV </h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Online hosted CV : <a href="https://visualcv.com/adityaketkar" >CV </a>
            <br/>
            1-page Resume : <a href="https://drive.google.com/file/d/1yhfRELr2NYqAjbajnWGX0SfFmoK3r7d7/view?usp=sharing" >Resume</a>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="mailto:adityaketkar848@gmail.com" enctype="text/plain">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/ketkar_a"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/aditya.ketkar.520" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@ketkaraditya" className="icon fa-medium">
                <span className="label">Medium</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/adityaketkar"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/adityaketkar"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://technoshblog.wordpress.com/"
                className="icon fa-wordpress"
              >
                <span className="label">Blog(deprecated)</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
