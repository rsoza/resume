import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import "./About.css";

function valueLabelFormatLang(lang) {
  const units = [
    "Please Slide",
    "Haskell/Prolog",
    "C++",
    "Bash",
    "Python",
    "JavaScript",
  ];
  let index = lang / 20;

  return `${units[index]}`;
}
function valueLabelPercentageLang(lang) {
  if (lang === 100) lang = 90;

  return `${lang}%`;
}
function valueLabelFormatFrame(frame) {
  const units = ["Please Slide", "FastAPI", "Docker", "Django", "React"];
  let index = frame / 25;
  return `${units[index]}`;
}
function valueLabelPercentageFrame(frame) {
  if (frame === 100) frame = 90;
  return `${frame}%`;
}

export default function NonLinearSlider() {
  const [lang, setLang] = React.useState(0);
  const [frame, setFrame] = React.useState(0);

  const handleChangeLang = (event, newLang) => {
    if (typeof newLang === "number") {
      setLang(newLang);
    }
  };
  const handleChangeFrame = (event, newFrame) => {
    if (typeof newFrame === "number") {
      setFrame(newFrame);
    }
  };

  return (
    <Box>
      <Typography id="Languages" gutterBottom>
        Language: {valueLabelFormatLang(lang)}
      </Typography>
      <div className="slide">
        <Slider
          sx={{
            "&:hover": { color: "#a2a997" },
            color: "black",
            fontSize: 40,
          }}
          lang={lang}
          min={0}
          step={20}
          max={100}
          getAriaValueText={valueLabelFormatLang}
          valueLabelFormat={valueLabelPercentageLang}
          onChange={handleChangeLang}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
          marks
        />
      </div>
      <Typography id="Frameworks" gutterBottom>
        Framework: {valueLabelFormatFrame(frame)}
      </Typography>
      <div className="slide">
        <Slider
          sx={{
            "&:hover": { color: "#a2a997" },
            color: "black",
            fontSize: 40,
          }}
          value={frame}
          min={0}
          step={25}
          max={100}
          getAriaValueText={valueLabelFormatFrame}
          valueLabelFormat={valueLabelPercentageFrame}
          onChange={handleChangeFrame}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
          marks
        />
      </div>
    </Box>
  );
}
