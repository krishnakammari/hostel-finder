import React, { Component } from 'react';
import HostelInfo from './HostelInfo';
import './HostelList.css';

class HostelList extends Component {
    
    render() {
        return (
            <div>
              <div className="hostellist">
                <div className="hostel">
                <h1 className="hh">Hostels</h1>
                <hr></hr><hr></hr>
                <h1 className="caption">A Home Away From Home</h1>
                <button className="button-main">
                    Search Hostels Below
                </button>
            </div>
                </div>
             <div className="pimg1">
                <HostelInfo />

            </div>
            </div>
        );
    }
}

export default HostelList;