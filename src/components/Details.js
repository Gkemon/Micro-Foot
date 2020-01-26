import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Card } from "react-bootstrap";
import {
  EmailShareButton
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
class Details extends Component {
    constructor(props) {
        super(props);
    this.state = {  
      homeTeam : "",
      awayTeam : "",
      homeTeamGoal : "",
      awayTeamGoal : "",
      Performances : [],
      matches:[]
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

                const performance=[]; 
                const matches=[];  
                
              

                var matchID=1;
                responseJson.matches.map(function (match, index) {
                    matches.push(match);
                    var bound = Object.keys(responseJson.matches).
                        length;
                        
                    if (index <= (bound-1) && index >= (bound-5)){
                    
                        if (match.score.winner=="HOME_TEAM"){
                            performance.push("Match " + matchID + ": Winner ");
                        } 
                        else performance.push("Match " + matchID + ": Looser");
                        matchID++;
                    }
        
                }); 

            

                this.setState({
                    homeTeamGoal:responseJson.matches[Object.keys(responseJson.matches).
                        length - 1].score.fullTime.homeTeam ,
                    homeTeam : responseJson.matches[Object.keys(responseJson.matches).
                        length - 1].homeTeam.name ,
                    awayTeamGoal: responseJson.matches[Object.keys(responseJson.matches).
                        length - 1].score.fullTime.awayTeam,
                     awayTeam: responseJson.matches[Object.keys(responseJson.matches).
                        length - 1].awayTeam.name ,
                    Performances:performance,
                    matches:matches
                }) ; 
            
                
            })
            .catch(error => {
                console.error(error);
            });
    }
    render() { 
        return (
            <Jumbotron>

                <Card bg="light" className="text-center" style={{ margin: 10 }}>
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 'bold'  }}>Result of last match</Card.Title>
                        <Card.Text>
                            {this.state.homeTeam} - <b>{this.state.homeTeamGoal}</b> : 
             <b> {this.state.awayTeamGoal} </b>- {this.state.awayTeam} 
              </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg="light" className="text-center" style={{ margin: 10 }}>
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 'bold' }}>Result of last 5 matches performance</Card.Title>
                        
                            {this.state.Performances.map((performance) =>
                           {
                                if (performance.includes('Winner')) {
                                    return <Card.Text><span style={{ color: '#2e7d32' }} > {performance}
                                    </span> 
                                 </Card.Text>
                                }
                                else {
                                    return <Card.Text><span style={{ color: '#f44336' }} > {performance}
                                    </span>
                                    </Card.Text>
                                }

                           }
                               
                                
                    )}
                        
                    </Card.Body>
                </Card>
                <Card bg="light" className="text-center" style={{ margin: 10 }}>
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 'bold' }}>Result of all matches in this season</Card.Title>

                        {this.state.matches.map(match =>

                            <Card.Text> <span style={{ color: '#1a237e'}} >{match.homeTeam.name}</span> - <b>{match.score.fullTime.homeTeam}</b> :  
    {' '}<b>{match.score.fullTime.awayTeam}</b>{' '}
                                - <span style={{ color: '#1b5e20' }} >{match.awayTeam.name}</span></Card.Text>

                        )} 
                    <FacebookShareButton>Share</FacebookShareButton>
                    </Card.Body>
                </Card>
            </Jumbotron>
           );

              
    }
}

export default Details;