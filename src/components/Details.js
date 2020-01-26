import React, { Component } from "react";
// this.props.match.params.teamID
class Details extends Component {
    constructor(props) {
        super(props);
    this.state = {  
      homeTeam : "",
      awayTeam : "",
      homeTeamGoal : "",
      awayTeamGoal : ""
    }
}
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
                
        
                console.log(responseJson.matches[Object.keys(responseJson.matches).
                    length-1].score.winner);


                this.setState({
                    homeTeamGoal:responseJson.matches[Object.keys(responseJson.matches).
                        length - 1].score.fullTime.homeTeam ,
                    homeTeam : responseJson.matches[Object.keys(responseJson.matches).
                        length - 1].homeTeam.name ,
                    awayTeamGoal: responseJson.matches[Object.keys(responseJson.matches).
                        length - 1].score.fullTime.awayTeam,
                     awayTeam: responseJson.matches[Object.keys(responseJson.matches).
                        length - 1].awayTeam.name 
                }) ; 
            
                
            })
            .catch(error => {
                console.error(error);
            });
    }
    render() { 
        return (<div>
            <h1>Result of last match</h1>
            <h3>{this.state.homeTeam} - {this.state.homeTeamGoal}:
             {this.state.awayTeamGoal} - {this.state.awayTeam}  </h3>
            </div>);
    }
}

export default Details;