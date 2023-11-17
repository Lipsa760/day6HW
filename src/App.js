import "./App.css";
import Card from "./Component/Card";

function App() {
  const style = {
    marginLeft: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    height: "80%",
    width: "80%",
  };
  const cards = [
    {
      name: "DarkRed",
      color: "DarkRed",
      code: "	#8B0000",
    },
    {
      name: "Indigo",
      color: "Indigo",
      code: "#4B0082",
    },
    {
      name: "Pink",
      color: "#E29587",
      code: "#E29587",
    },
    {
      name: "Orange",
      color: "orange",
      code: "#FF7F50",
    },
    {
      name: "DarkGreen",
      color: "DarkGreen",
      code: "#006400",
    },
    {
      name: "Cyan",
      color: "cyan",
      code: "#40E0D0",
    },
    {
      name: "Navy",
      color: "navy",
      code: "#000080",
    },
    {
      name: "Gray",
      color: "gray",
      code: "#CCCCFF",
    },
    {
      name: "Yellow",
      color: "yellow",
      code: "#DFFF00",
    },
    {
      name: "LightSeaGreen",
      color: "#20B2AA",
      code: "#20B2AA",
    },
    {
      name: "Purple",
      color: "purple",
      code: "#800080",
    },
    {
      name: "Teal",
      color: "teal",
      code: "#FF00FF	",
    },
    {
      name: "AntiqueWhite",
      color: "#FAEBD7",
      code: "#FAEBD7",
    },

    {
      name: "Goldenrod",
      color: "#DAA520",
      code: "#DAA520",
    },
    {
      name: "Fuchsia",
      color: "fuchsia",
      code: "#008080",
    },
    {
      name: "Aqua",
      color: "aqua",
      code: "#00FFFF",
    },
    {
      name: "Green",
      color: "green",
      code: "#008000",
    },
  ];

  return (
    <div className="App" style={style}>
      {cards.map((card) => (
        <Card {...card} />
      ))}
    </div>
  );
}

export default App;
