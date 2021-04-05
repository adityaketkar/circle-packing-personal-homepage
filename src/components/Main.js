import PropTypes from 'prop-types'
import React from 'react'
import JSONData from '../content/mycontent.json'

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
          style={{
            display: 'none',
            height: '90vh',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <div>
              <img src={JSONData.AboutImage} alt="" />
            </div>
          </span>
          {/* <p> */}
          {JSONData.AboutContent.map(item => {
            return (
              <div
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontWeight: '400',
                  fontSize: 'medium',
                  lineHeight: '1.5',
                }}
              >
                <br />
                {item}
              </div>
            )
          })}
          {/* </p> */}
          {/* not visible in gatsby build */}
          {close}
          {/* <div style={closeStyle} onClick={() => this.props.onCloseArticle()}>
            ← Back
          </div> */}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{
            display: 'none',
            height: '90vh',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={JSONData.WorkImage} alt="" />
          </span>

          <div
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: '400',
              fontSize: 'medium',
              lineHeight: '1.5',
            }}
          >
            {JSONData.WorkContent}
          </div>
          <br />
          <div
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: '400',
              fontSize: 'medium',
              lineHeight: '1.5',
            }}
          >
            {JSONData.InternshipsStartLine}
          </div>
          <ul>
            {JSONData.InternShips.map(item => {
              return (
                <li
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontWeight: '400',
                    fontSize: 'medium',
                    lineHeight: '1.5',
                  }}
                >
                  <a target="_blank" href={item.link}>
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>
          <div
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: '400',
              fontSize: 'medium',
              lineHeight: '1.5',
            }}
          >
            {JSONData.ProjectsStartLine}
          </div>
          <ul>
            {JSONData.Projects.map(item => {
              return (
                <li
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontWeight: '400',
                    fontSize: 'medium',
                    lineHeight: '1.5',
                  }}
                >
                  <a target="_blank" href={item.link}>
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* not visible in gatsby build */}
          {close}
          {/* <div style={closeStyle} onClick={() => this.props.onCloseArticle()}>
            ← Back
          </div> */}
        </article>
        {JSONData.showTalksAndBlogTab && (
          <article
            id="talks"
            className={`${this.props.article === 'talks' ? 'active' : ''} ${
              this.props.articleTimeout ? 'timeout' : ''
            }`}
            style={{
              display: 'none',
              height: '90vh',
              overflow: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <h2
              style={{
                fontWeight: '700',
              }}
              className="major"
            >
              Talks
            </h2>
            <div
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: '400',
                fontSize: 'medium',
                lineHeight: '1.5',
              }}
            >
              {JSONData.TalksAndBlogsTopContent}
            </div>
            <br />
            <div
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: '400',
                fontSize: 'medium',
                lineHeight: '1.5',
              }}
            >
              {JSONData.TalkIntroLine}
            </div>
            <ul>
              {JSONData.Talks.map(item => {
                return (
                  <li style={{ marginBottom: '25px' }}>
                    <h3
                      style={{
                        fontWeight: '700',
                      }}
                    >
                      {item.talkTitle}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Fira Mono, monospace',
                        fontWeight: '100',
                        fontSize: 'small',
                        lineHeight: '1.5',
                        marginBottom: '15px',
                      }}
                    >
                      {item.talkDescription}
                    </p>
                    {item.links.map(linkItem => {
                      return (
                        <a
                          style={{
                            marginRight: '10px',
                            lineHeight: '1.5',
                          }}
                          target="_blank"
                          href={linkItem.url}
                        >
                          {linkItem.linkTitle}
                        </a>
                      )
                    })}
                  </li>
                )
              })}
            </ul>
            <hr />
            <h2 style={{ fontWeight: '700' }}>Blogs</h2>
            <div
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: '400',
                fontSize: 'medium',
                lineHeight: '1.5',
              }}
            >
              {JSONData.BlogsIntroLine}
            </div>
            <br />
            <ul>
              {JSONData.Blogs.map(item => {
                return (
                  <li
                    style={{
                      fontFamily: 'Fira Mono, monospace',
                      fontWeight: '400',
                      fontSize: 'medium',
                      lineHeight: '1.8',
                    }}
                  >
                    <a target="_blank" href={item.link}>
                      {item.blogTitle}
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* not visible in gatsby build */}
            {close}
            {/* <div style={closeStyle} onClick={() => this.props.onCloseArticle()}>
            ← Back
          </div> */}
          </article>
        )}
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major"> CV </h2>
          <div
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: '400',
              fontSize: 'large',
              lineHeight: '1.9',
            }}
          >
            {JSONData.CVStartLine}
          </div>
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <a
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: '400',
                fontSize: 'large',
                lineHeight: '1.5',
              }}
              target="_blank"
              href={JSONData.CV}
            >
              CV{' '}
            </a>
            <a
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: '400',
                fontSize: 'large',
                lineHeight: '1.5',
              }}
              target="_blank"
              href={JSONData.Resume}
            >
              Resume
            </a>
          </div>
          {/* </p> */}
          {/* not visible in gatsby build */}
          {close}
          {/* <div style={closeStyle} onClick={() => this.props.onCloseArticle()}>
            ← Back
          </div> */}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Connect</h2>
          {/* <form method="post" action={JSONData.emailid} type="text/plain">
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
          </form> */}
          <ul className="icons">
            <li>
              <a
                target="_blank"
                href={JSONData.twitter}
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={JSONData.facebook}
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={JSONData.medium}
                className="icon fa-medium"
              >
                <span className="label">Medium</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={JSONData.github}
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={JSONData.linkedin}
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={JSONData.wordpress}
                className="icon fa-wordpress"
              >
                <span className="label">Blog(deprecated)</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={JSONData.linktree}
                className="icon fa-link"
              >
                <span className="label">LinkTree</span>
              </a>
            </li>
          </ul>
          {/* not visible in gatsby build */}
          {close}
          {/* <div style={closeStyle} onClick={() => this.props.onCloseArticle()}>
            ← Back
          </div> */}
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
