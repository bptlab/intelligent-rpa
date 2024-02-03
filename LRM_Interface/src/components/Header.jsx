import React from "react";


function Header() {
  return (
    <div>
      <header id="header" className="header-one">
        <div className="bg-white">
          <div className="container">
            <div className="logo-area">
              <div className="row align-items-center">
                <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                  <a className="d-block" href="/">
                    <img
                      loading="lazy"
                      src="images/logo.jpg"
                      alt="Mughals"
                      style={{ height: 100, width: 160 }}
                    />
                  </a>
                </div>
                {/* logo end */}
                <div className="header-right">
                  <ul className="top-info-box">
                    <h1 style={{ fontWeight: "bold" , fontSize:47, marginTop:25, marginLeft:-50}}>
                      Chat with Intelligent RPA Tool
                    </h1>
                  </ul>
                  {/* Ul end */}
                </div>
                {/* header right end */}

                {/* logo end */}
              </div>
              {/* logo area end */}
            </div>
            {/* Row end */}
          </div>
          {/* Container end */}
        </div>
        <div className="site-navigation">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-dark p-0">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    aria-controls="navbar-collapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    id="navbar-collapse"
                    className="collapse navbar-collapse"
                  >
                    <ul
                      style={{ height: 80 }}
                      className="nav navbar-nav mr-auto"
                    >
                      <li className="nav-item">
                        <a className="nav-link" href="/"></a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/*/ Col end */}
            </div>
            {/*/ Row end */}
          </div>
          {/*/ Container end */}
        </div>
        {/*/ Navigation end */}
      </header>
    </div>
  );
}

export default Header;
