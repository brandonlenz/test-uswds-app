import React from 'react'
import './App.css'
import './assets/uswds-2.10.0/css/uswds.min.css'

function App() {
  return (
      <div className="App">
          <nav className="usa-breadcrumb usa-breadcrumb--wrap" aria-label="Breadcrumbs">
            <ol className="usa-breadcrumb__list">
              <li className="usa-breadcrumb__list-item">
                <a href="#" className="usa-breadcrumb__link">
                  <span>Home</span>
                </a>
              </li>
              <li className="usa-breadcrumb__list-item">
                <a href="#" className="usa-breadcrumb__link">
                  <span>Federal Contracting</span>
                </a>
              </li>
              <li className="usa-breadcrumb__list-item">
                <a href="#" className="usa-breadcrumb__link">
                  <span>Contracting assistance programs</span>
                </a>
              </li>
              <li className="usa-breadcrumb__list-item usa-current" aria-current="page">
                <span>Women-owned small business federal contracting program</span>
              </li>
            </ol>
          </nav>
      </div>
  );
}

export default App;
