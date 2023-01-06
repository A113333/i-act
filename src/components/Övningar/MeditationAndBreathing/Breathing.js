import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import VerktygContainer from "../../Verktyg/VerktygContainer";
import VerktygAppbar from "../../Navigation/VerktygAppBar";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { Box, width } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import { useSpring, animated, useTransition } from "@react-spring/web";

function Breathing({ timeIn, timeInHold, timeOut, timeOutHold }) {
  const INTERVAL_IN_MILISECONDS = 100;

  const [referenceTime, setReferenceTime] = useState();
  const [ispaused, setispaused] = useState(true);

  const [page, setpage] = useState(0);
  const [nrOfBreaths, setnrOfBreaths] = useState(2);
  const [grow, setGrow] = useState(true);
  const [shrink, setshrink] = useState(false);

  const [timeIns, settimeIns] = useState(4000);
  const [timeInHolds, settimeInHolds] = useState(2000);
  const [timeOuts, settimeOuts] = useState(4000);
  const [timeOutHolds, settimeOutHolds] = useState(2000);
  const [totalBreaths, settotalBreaths] = useState(10);

  let TIME_IN_MILISECONDS_TO_COUNTDOWN =
    (timeIns + timeInHolds + timeOuts + timeOutHolds) * totalBreaths;

  const updateTimer = () => {
    TIME_IN_MILISECONDS_TO_COUNTDOWN =
      (timeIns + timeInHolds + timeOuts + timeOutHolds) * totalBreaths;
    console.log(TIME_IN_MILISECONDS_TO_COUNTDOWN, "time");
  };

  const [time, setTime] = useState(TIME_IN_MILISECONDS_TO_COUNTDOWN);

  useEffect(() => {
    const countDownUntilZero = () => {
      setReferenceTime(Date.now());
      if (!ispaused) {
        setTime((prevTime) => {
          if (prevTime <= 0) return 0;
          const now = Date.now();
          const interval = now - referenceTime;
          setReferenceTime(now);
          return prevTime - interval;
        });
      }
    };
    setTimeout(countDownUntilZero, INTERVAL_IN_MILISECONDS);
  }, [time, ispaused]);

  const setTimeOutId1 = useRef(null);
  const setTimeOutId2 = useRef(null);
  const intervalId = useRef(null);

  // tar bort interval när man lämna sidan
  useEffect(() => {
    return () => {
      clearInterval(intervalId.current);
      clearTimeout(setTimeOutId1.current);
      clearTimeout(setTimeOutId2.current);
    };
  }, []);

  const setTimeOuts = () => {
    breathOutAnimation.start({
      from: { transform: "scale(1)" },
      to: { transform: "scale(3.5)" },
      config: {
        duration: timeIns,
      },
    });

    setTimeOutId1.current = setTimeout(() => {
      breathOutAnimation.start({
        from: { transform: "scale(3.5)" },
        to: { transform: "scale(1)" },
        config: {
          duration: timeOuts,
        },
      });
      console.log("breathOutAnimation.start shrink");
    }, timeIns + timeInHolds);

    setTimeOutId2.current = setTimeout(() => {
      breathOutAnimation.start({
        from: { transform: "scale(1)" },
        to: { transform: "scale(3.5)" },

        config: {
          duration: timeIns,
        },
      });
      console.log("breathOutAnimation.start grow");
    }, timeIns + timeInHolds + timeOuts + timeOutHolds);
  };

  const handelStart = () => {
    if (ispaused) {
      setReferenceTime(Date.now());
      setispaused(false);
      console.log(" start ");
      setTimeOuts();
      intervalId.current = setInterval(() => {
        console.log("intervall körs");
        setTimeOuts();
        setpage(page + 1);
        console.log(page);
      }, timeIns + timeInHolds + timeOuts + timeOutHolds);
    }
  };

  const [styleOut, breathOutAnimation] = useSpring(() => ({
    from: { transform: "scale(1)" },
  }));

  const handelPause = () => {
    clearInterval(intervalId.current);
    clearTimeout(setTimeOutId1.current);
    clearTimeout(setTimeOutId2.current);
    setispaused(true);
    console.log("trycker på paus");
    breathOutAnimation.start({
      to: { transform: "scale(1)" },

      config: {
        duration: 300,
      },
    });
  };

  const handelSelect = (event) => {
    setselectedBreath(event.target.value);
    if (event.target.value === "kvadrat") {
      console.log("kvadrat");
      settimeIns(4000);
      settimeInHolds(2000);
      settimeOuts(4000);
      settimeOutHolds(2000);
    } else if (event.target.value === "4-7-8") {
      console.log("lala478");
      settimeIns(4000);
      settimeInHolds(7000);
      settimeOuts(8000);
      settimeOutHolds(0);
    }
  };

  const [selectedBreath, setselectedBreath] = useState("");

  const getSeconds = (time) => {
    if (((time / 1000) % 60).toFixed() === "60") return 59;
    else
      return ((time / 1000) % 60).toFixed() <= 9
        ? "0" + ((time / 1000) % 60).toFixed()
        : ((time / 1000) % 60).toFixed();
  };

  /*  useEffect(() => {
    //  breathOutAnimation.pause();
    //  setTimeOuts();
    console.log("lala");

    return () => clearTimeout(setTimeOuts);

    //  return () => clearTimeout(timer);
  }, []); */

  return (
    <>
      <VerktygAppbar
        step={page + 1}
        numberOfSteps={totalBreaths}
        isResultsPage={page === nrOfBreaths}
      />
      <VerktygContainer>
        <Box
          sx={{
            width: "100%",
            maxWidth: "800px",
            mt: "40vw",
            mb: "40vw",
          }}
        >
          <animated.div
            style={{
              width: "25vw",
              height: "25vw",
              margin: "auto",
              // magrin på halva bredden för att få centerad
              //ml: "17.5vw",

              background: "#17191c",
              borderRadius: "50%",
              ...styleOut,
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton onClick={ispaused ? handelStart : handelPause}>
            {ispaused ? (
              <PlayArrowIcon
                sx={{ fontSize: "3.5rem", color: "primary.light" }}
              />
            ) : (
              <PauseIcon sx={{ fontSize: "3.5rem", color: "primary.light" }} />
            )}
          </IconButton>

          <Typography display="inline" sx={{ fontSize: "2rem" }}>
            {Math.floor(time / 1000 / 60) <= 9
              ? "0" + Math.floor(time / 1000 / 60)
              : Math.floor(time / 1000 / 60)}
            :
          </Typography>
          <Typography display="inline" sx={{ fontSize: "2rem" }}>
            {getSeconds(time)}
          </Typography>
        </Box>

        <Box sx={{ mt: 3 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Andningsmönster
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedBreath}
              label="Andningsmönster"
              onChange={handelSelect}
            >
              <MenuItem value={"kvadrat"}>Andas i kvadrat</MenuItem>
              <MenuItem value={"4-7-8"}>4-7-8 metoden</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ mt: 2 }}
            type="number"
            label="Tid för inandning"
            variant="outlined"
            onChange={(e) => settimeIns(Number(e.target.value) * 1000)}
            value={timeIns / 1000 === 0 ? "" : timeIns / 1000}
          />
          <TextField
            sx={{ mt: 2 }}
            type="number"
            label="Tid att hålla inandning"
            variant="outlined"
            onChange={(e) => settimeInHolds(Number(e.target.value) * 1000)}
            value={timeInHolds / 1000 === 0 ? "" : timeInHolds / 1000}
          />
          <TextField
            sx={{ mt: 2 }}
            type="number"
            label="Tid för utandning"
            variant="outlined"
            onChange={(e) => settimeOuts(Number(e.target.value) * 1000)}
            value={timeOuts / 1000 === 0 ? "" : timeOuts / 1000}
          />
          <TextField
            sx={{ mt: 2 }}
            type="number"
            label="Tid för utandning"
            variant="outlined"
            onChange={(e) => settimeOutHolds(Number(e.target.value) * 1000)}
            value={timeOutHolds / 1000 === 0 ? "0" : timeOutHolds / 1000}
          />
          <TextField
            sx={{ mt: 2 }}
            type="number"
            label="Antal andetag"
            variant="outlined"
            onChange={(e) =>
              settotalBreaths(Number(e.target.value), updateTimer())
            }
            value={totalBreaths === 0 ? "" : totalBreaths}
          />

          <Box sx={{ width: "100%", mt: 2 }}>
            <Typography display="inline" sx={{ opacity: "70%" }}>
              total tid:{" "}
            </Typography>{" "}
            <Typography display="inline">
              {" "}
              {Math.floor(time / 1000 / 60) <= 9
                ? "0" + Math.floor(TIME_IN_MILISECONDS_TO_COUNTDOWN / 1000 / 60)
                : Math.floor(TIME_IN_MILISECONDS_TO_COUNTDOWN / 1000 / 60)}
              :
              {((TIME_IN_MILISECONDS_TO_COUNTDOWN / 1000) % 60).toFixed() <= 9
                ? "0" +
                  ((TIME_IN_MILISECONDS_TO_COUNTDOWN / 1000) % 60).toFixed()
                : ((TIME_IN_MILISECONDS_TO_COUNTDOWN / 1000) % 60).toFixed()}
            </Typography>
          </Box>
        </Box>
      </VerktygContainer>
    </>
  );
}

export default Breathing;
