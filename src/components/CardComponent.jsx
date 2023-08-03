import "./cardComponent.css";
import expImg from "../assets/profile.jpg";
import ChipsComponent from "./ChipsComponent";

const CardComponent = () => {
  return (
    <div className="cardContainer">
      <div>
        <img src={expImg} alt="Profile Image" />
        <div className="statusContainer">
          <h1>Khuram Shahzad</h1>
          <i className="bx bxs-check-circle"></i>
        </div>
        <p className="jobTitle">Software Engineer, Pakistan</p>
      </div>
      <br />
      <div className="skillsContainer">
        <h1>SKILLS</h1>
        <div className="chipsContainer">
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

      <div className="joiningContainer">
        <i className="bx bx-badge-check"></i>
        <p>Joined on 30 August, 2021</p>
      </div>
    </div>
  );
};

export default CardComponent;
