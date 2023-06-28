import React from "react";
import { Card, CardImg } from "react-bootstrap";
import belt from "../../assets/imgs/belt.jpg"
import members from "./members"
const Team = (props) =>{
return(

    <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "25px",
            margin: "40px",
            minWidth: "300px",
            width: "100%",
            maxWidth: "400px",
            minHeight: "550px",
            textAlign: "center",
            border: "1px solid rgb(171, 171, 171)"
          }}
        >
          <CardImg src={props.img} style={{ 
            minWidth: "300px", 
            width: "100%", 
            maxWidth: "400px",
            minHeight: "400",
            height: "100%",
            maxHeight: "600px"}} 
          />
          <Card.Title style={{margin: "20px"}}>{props.cardTitle}</Card.Title>
          <div style={{borderBottom: "1px solid white"}}></div>
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
          }} className="team-container">
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