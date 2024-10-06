import React from 'react';
import { Link } from 'react-router-dom'; // to handle internal navigation

const HeaderComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="https://google.com">EMS.</a>

        {/* Toggler for mobile view */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>

          {/* Right-aligned search bar */}
          <form className="form-inline ml-auto d-flex" id='search'>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-warning" type="submit" style={{marginRight:'10px'}}>Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default HeaderComponent;
