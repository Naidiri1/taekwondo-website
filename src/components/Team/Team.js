import React from "react";
import "./style.css"
import { Card, CardImg } from "react-bootstrap";
import members from "./members"
const Team = (props) =>{
return(

    <div className="team--container">
        <div className="team-cards--flexchild">
          <CardImg src={props.img}  className="team--images" />
          <Card.Title style={{margin: "20px"}}>{props.cardTitle}</Card.Title>
          <Card.Body>
            <Card.Text style={{ margin: "10px", textAlign: "justify" }}>
              <div className="card--description">{props.cardDescription}</div>
            </Card.Text>
          </Card.Body>
        </div>
      </div>

)}

const TeamDisplay = () => {
    return(
        <div id="team"  style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent:"center"
          }} >
        {members.map((member, idx) => (
          <Team
            key={idx}
            img={member.img}
            cardTitle={member.cardTitle}
            cardDescription={member.cardDescription}
            />
            ))}
          </div>
        );
      };
      


export default TeamDisplay;