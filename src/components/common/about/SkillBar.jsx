import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

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
    <Box sx={{ width: 250 }}>
      <Typography id="Languages" gutterBottom sx={{ width: 200 }}>
        Language: {valueLabelFormatLang(lang)}
      </Typography>
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
      <Typography id="Frameworks" gutterBottom sx={{ width: 200 }}>
        Framework: {valueLabelFormatFrame(frame)}
      </Typography>
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
    </Box>
  );
}