import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="float-right d-none d-sm-block">
          <b>Version</b> 3.0.2-pre
        </div>
        <strong>
          Copyright © 2014-2020 <a href="http://BasicPOS.io">BasicPOS.io</a>.
        </strong>{" "}
        All rights reserved.
      </footer>
    );
  }
}

export default Footer;