import expImg from "../assets/profile.jpg";
import ChipsComponent from "./ChipsComponent";

const cardContainer = {
  border: "10px solid transparent",
  boxShadow: "0 0 20px #333",
  padding: "3rem",
  width: "75%",
  height: "auto",
  margin: "25% 25%",
};

const imgStyles = {
  width: "200px",
  height: "auto",
  border: "#333 5px solid",
  boxShadow: "0 0 10px #333",
  borderRadius: "10%",
  margin: "0",
  padding: "0",
};

const iconStyle = {
  transform: "translateY(0.2rem)",
  color: "rgb(0, 168, 197)",
};

const nameStyle = {
  margin: "10px 10px",
};

const jobTitle = {
  margin: "5px 10px",
};

const skillsContainer = {
  margin: "0px 0px 0px 10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
};

const chipsContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "start",
  margin: "0px 10px 0px 0px",
};

const statusContainer = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};

const joiningContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  marginTop: "2rem",
};

const paraStyles = {
  margin: "10px 0px",
};

const CardComponent = () => {
  return (
    <div style={cardContainer}>
      <div>
        <img src={expImg} alt="Profile Image" style={imgStyles} />
        <div style={statusContainer}>
          <h1 style={nameStyle}>Khuram Shahzad</h1>
          <i className="bx bxs-check-circle" style={iconStyle}></i>
        </div>
        <p style={jobTitle}>Software Engineer, Pakistan</p>
      </div>
      <br />
      <div style={skillsContainer}>
        <h1>SKILLS</h1>
        <div style={chipsContainer}>
          <ChipsComponent title="HTML" />
          <ChipsComponent title="CSS" />
          <ChipsComponent title="JavaScript" />
          <ChipsComponent title="Sass" />
          <ChipsComponent title="BootStrap" />
          <ChipsComponent title="NodeJS" />
          <ChipsComponent title="ExpressJS" />
          <ChipsComponent title="MongoDB" />
          <ChipsComponent title="ReactJS" />
          <ChipsComponent title="NextJS" />
        </div>
      </div>

      <div style={statusContainer}>
        <i className="bx bx-badge-check" style={iconStyle}></i>
        <p style={paraStyles}>Joined on 30 August, 2021</p>
      </div>
    </div>
  );
};

export default CardComponent;
