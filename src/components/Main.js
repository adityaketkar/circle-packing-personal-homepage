import PropTypes from 'prop-types'
import React from 'react'
import JSONData from "../content/mycontent.json"

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
            <div >
              <img src={JSONData.AboutImage} alt="" />
            </div>
          </span>
          <p>
          {JSONData.AboutContent.map((item) => {
            return (<div><br/>{item}</div>)
          })}
          {/* I’m a Computer Science major by day, a Table Tennis player by evening,
           a functional wantrepreneur by midnight and a hustler always. 
          <br/>If you can’t find me, it’s because I’m already cycling, off to a hike, or studying for an exam!
          </p>
          <p>
          I am passionate about Space Technology and Human Psychology (though, never studied them formally). A die-hard fan of Elon Musk.<br/><br/> I love the way the concept of "work" has evolved over the past decades, and hence would love to travel and work together whenever I can.<br/> */}
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
            <img src={JSONData.WorkImage} alt="" />
          </span>
          {/* <p> */}
            {JSONData.WorkContent}
            <br/><br/>
            {JSONData.InternshipsStartLine}
            <ul>
              {JSONData.InternShips.map((item) => {
              return (<li><a href={item.link}>{item.name}</a><br/></li>)
            })}
            </ul>
          {/* </p> */}
          {/* <ul>
            <li> Amazon India<br/></li>
            <li><a target="_blank" href="https://drive.google.com/file/d/1fMoF7gUfsow8BxTIK7I7jf9wmq9v7wfq/view" > North-Eastern Space Application Center (ISRO) </a><br/></li>
            <li><a target="_blank" href="https://drive.google.com/file/d/1H9H4ja9TgpxYf4QxSfQH2bCZWyAFYwlC/view?usp=sharing" > Computer Vision Center, Universitat Autonoma de Barcelona </a><br/></li>
            </ul> */}
          {/* <p> */}
            {/* Some of the side projects I did can be found here :  */}
          {/* </p> */}
            <br/><br/>
            {JSONData.ProjectsStartLine}
            <ul>
              {JSONData.Projects.map((item) => {
              return (<li><a href={item.link}>{item.name}</a><br/></li>)
            })}
            </ul>
          {/* <ul>
            <li><a target="_blank" href="https://github.com/adityaketkar/eisenlist" > EisenList </a><br/></li>
            <li><a target="_blank" href="https://bitsdelor.wixsite.com/delor" > DelOr </a><br/></li>
            <li><a target="_blank" href="https://medium.com/@ketkaraditya/hey-alexa-meet-music-1f7319750af7" > Alexa Music Companion </a><br/></li>
            <li><a target="_blank" href="https://medium.com/@ketkaraditya/hey-alexa-meet-music-1f7319750af7" > Gatsby Personal Webpage </a><br/></li>
            </ul> */}
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
          {/* <span className="image main">
            <img  />
          </span> */}
          <p>
            {JSONData.CVStartLine}
            <br/><br/>
            <div style={{"display":"flex", "justifyContent":"space-around"}}>
              <a href={JSONData.CV} >CV </a>
              <a href={JSONData.Resume} >Resume</a>
            </div>
             
             
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
          <form method="post" action={JSONData.emailid} type="text/plain">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
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
                href={JSONData.twitter}
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href={JSONData.facebook} className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href={JSONData.medium} className="icon fa-medium">
                <span className="label">Medium</span>
              </a>
            </li>
            <li>
              <a
                href={JSONData.github}
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href={JSONData.linkedin}
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href={JSONData.wordpress}
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
