import React, { Component } from "react";
class Details extends Component {
    state = {  }
    render() { 
        return (<div><p>{this.props.match.params.teamID}</p></div>);
    }
}
 
export default Details;