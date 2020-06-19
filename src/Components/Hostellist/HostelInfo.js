import React, { Component } from 'react';
import Cardarray from "./Cardarray";
import SearchBox from "./SearchBox";
import { listinfo } from './listinfo';

class HostelInfo extends Component {
    constructor(){
        super()
        this.state={
            names:[],
            searchfield:""
        }
        this.onsearchchange=this.onsearchchange.bind(this)
    }
    componentDidMount(){
        this.setState({
            names:listinfo
        })
    }
    onsearchchange(event){
        this.setState({
            searchfield:event.target.value
        })
    }
    render(){
    const filterrobots=this.state.names.filter(listinfo=>{
        return listinfo.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.names.length === 0){
            return <h2>loading....  please wait</h2>
        }
        else{
    return (
        <div className="total">
            <div className="tc">
                <h1 className="ma0" style={{fontFamily:"sega logo font",padding:"40px",fontSize:"50px"}}>HOSTEL SEARCH</h1>
                <SearchBox searchChange={this.onsearchchange} />  
                <hr></hr>
            </div>
            <Cardarray names={filterrobots} />
        </div>

    );
}}
}

export default HostelInfo;