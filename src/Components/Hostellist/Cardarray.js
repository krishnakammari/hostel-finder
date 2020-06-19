import React from "react";
import Card from './Card';


class Cardarray extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        const {names}=this.props
    const cardcomp=names.map((user,i)=>{
        return <Card key={i} id={names[i].id} name={names[i].name} place={names[i].place} rating={names[i].rating} images={names[i].images}/>
    })
    return (
        <div>
            {cardcomp}
        </div>
    );
}
}
export default Cardarray;