import React from 'react';
//import ReactDOM from 'react-dom';
import "tachyons";
import './card.css';
//import DisplayHostel from './DisplayHostel'

class Card extends React.Component{
    constructor(){
        super()
        this.state={
            isopen:false,
            imgg:"",
            naming:"",
            placee:"",
            phonee:"",
        }
    }
    displaypage =()=>{
        this.setState({
            isopen:true
        })
        console.log(this.state.isopen)
    }
   
    render(){
        let styles={
            display:"inline", 
        }
       
    return(
        
        <React.Fragment>
            <div  style={styles} onClick={this.displaypage} >
            <div className='tc dib br4 pa3 ma3 grow bw3 shadow-4 w-11' div="cardsize" style={{backgroundColor:"#EA7773"}}>
                <img className="imgsize" alt='building' src={this.props.images}/>
                <div>
                <b><p style={{fontFamily:"cursive"}}>{this.props.name}</p></b>
                <b><p style={{fontFamily:"cursive"}}>{this.props.place}</p></b>
                <b><p style={{fontFamily:"cursive"}}>{this.props.phone}</p></b>
                <b><p style={{fontFamily:"cursive"}}>Rating:{this.props.rating}</p></b>
                </div>
            </div>
            </div>
        
        </React.Fragment>
    );
}
}
export default Card;
