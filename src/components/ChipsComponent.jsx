import PropTypes from "prop-types";

const chipsComponent = (props) => {
  const chipContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "20px",
    padding: "0px 20px",
    boxShadow: "0 0 5px #ccc",
    margin: "5px",
    fontSize: "14px",
  };

  return (
    <div style={chipContainer}>
      <p>{props.title}</p>
    </div>
  );
};

chipsComponent.propsTypes = {
  title: PropTypes.string.isRequired,
};

export default chipsComponent;
