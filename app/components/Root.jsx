import React, { Component } from 'react';

import Navbar from './Navbar';
import Campuses from './Campuses';

export default function Root() {

    return (
         <div>
                <Navbar />
         <div id="main" className="container-fluid">
            <Campuses />
          </div>
      </div>
    )

}