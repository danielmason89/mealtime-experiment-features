import { useTheme } from "../../hooks/useTheme";
import { ThemeStyles } from "./ThemeSelectorStyles";
import modeIcon from "../../assets/light-dark.svg";

const themeColors = ["#047c74", "#248c6b", "#0296b7"];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <ThemeStyles>
      <div className="mode-toggle">
        <img
          src={modeIcon}
          alt="dark-light toggle icon"
          onClick={toggleMode}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </ThemeStyles>
  );
}
