import ColorName from "./color-name"; // Importing the ColorName component
import HexToCMYK from "./to-cmyk"; // Importing the HexToCMYK component
import HexToHSL from "./to-hsl"; // Importing the HexToHSL component
import HexToHSV from "./to-hsv"; // Importing the HexToHSV component
import HexToRGB from "./to-rgb"; // Importing the HexToRGB component

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "1rem",
};

type SetColorsProps = {
  hexColor: string;
};

const SetColors = ({ hexColor }: SetColorsProps) => {
  return (
    <div style={containerStyle}>
      {/* Display the title */}
      <h3>Set Colors</h3>
      {/* Display the HexToRGB component */}
      <HexToRGB hexColor={hexColor} />
      {/* Display the HexToHSL component */}
      <HexToHSL hexColor={hexColor} />
      {/* Display the HexToHSV component */}
      <HexToHSV hexColor={hexColor} />
      {/* Display the HexToCMYK component */}
      <HexToCMYK hexColor={hexColor} />
      {/* Display the ColorName component */}
      <ColorName hexColor={hexColor} />
    </div>
  );
};

export default SetColors;
