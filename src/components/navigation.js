import React from 'react';

const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='/'>
          <div className="nav-pic">
							<img alt="Company Logo" className="img" src="img/logo1.jpg" />
						</div>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/target-group' className='page-scroll'>
                Target Group
              </a>
            </li>
            <li>
              <a href='/about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='/events' className='page-scroll'>
                Events
              </a>
            </li>
            <li>
              <a href='/programs' className='page-scroll'>
                Programs
              </a>
            </li>
            <li>
              <a href='/partners' className='page-scroll'>
                Our Partners
              </a>
            </li>
            <li>
              <a href='/blogs' className='page-scroll'>
                Blog
              </a>
            </li>
            <li>
              <a href="/sponsor-us" className='page-scroll'>
                Sponsor Us
              </a>
            </li>
            <li>
              <a href='/#contact' className='page-scroll'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;