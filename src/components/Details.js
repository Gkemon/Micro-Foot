import React, { Component } from "react";
// this.props.match.params.teamID
class Details extends Component {
    state = {  }
    componentDidMount() {
        this.fetchLastMatchData();
    }

    fetchLastMatchData() {
        const Token = "b7d52e61c66f4a0194be725042ad4359",
            
            URL =
                "http://api.football-data.org/v2/teams/" + 
                this.props.match.params.teamID+"/matches?status=FINISHED";

        fetch(URL, { headers: { "X-Auth-Token": Token } })
            .then(response => response.json())
            .then(responseJson => {
                
                console.log(responseJson.matches[Object.keys(responseJson.matches).length-1].score.winner);
                
            })
            .catch(error => {
                console.error(error);
            });
    }
    render() { 
        return (<div class="centered">
            <h1></h1>
            </div>);
    }
}

export default Details;