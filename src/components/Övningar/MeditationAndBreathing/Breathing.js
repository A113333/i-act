import { Button, IconButton, TextField, Typography } from "@mui/material";
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

  const intervalId = useRef(null);
  const handelStart = () => {
    if (ispaused) {
      setReferenceTime(Date.now());
      setispaused(false);
      console.log(" start ");
      setTimeOuts();
      intervalId.current = setInterval(() => {
        console.log("intervall körs");
        setTimeOuts();
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
        <Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",

              maxHeight: "80vh",
              mt: "40vw",
            }}
          >
            <animated.div
              style={{
                width: "20vw",
                height: "20vw",
                margin: "auto",
                // magrin på halva bredden för att få centerad
                //ml: "17.5vw",

                background: "#17191c",
                borderRadius: "50%",
                ...styleOut,
              }}
            ></animated.div>
          </Box>
          <Box sx={{ textAlign: "center", mt: 12 }}>
            <Typography display="inline" sx={{ fontSize: "2rem" }}>
              {Math.floor(time / 1000 / 60)} :{" "}
            </Typography>
            <Typography display="inline" sx={{ fontSize: "2rem" }}>
              {((time / 1000) % 60).toFixed()}
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <IconButton onClick={ispaused ? handelStart : handelPause}>
              {ispaused ? (
                <PlayArrowIcon
                  sx={{ fontSize: "5rem", color: "primary.light" }}
                />
              ) : (
                <PauseIcon sx={{ fontSize: "5rem", color: "primary.light" }} />
              )}
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          <TextField
            type="number"
            id="outlined-basic"
            label="Tid för inadning"
            variant="outlined"
            onChange={(e) => settimeIns(Number(e.target.value) * 1000)}
            value={timeIns / 1000 === 0 ? "" : timeIns / 1000}
          />

          <TextField
            sx={{ mt: 2 }}
            type="number"
            id="outlined-basic"
            label="Tid att hålla inadning"
            variant="outlined"
            onChange={(e) => settimeInHolds(Number(e.target.value) * 1000)}
            value={timeInHolds / 1000 === 0 ? "" : timeInHolds / 1000}
          />

          <TextField
            sx={{ mt: 2 }}
            type="number"
            id="outlined-basic"
            label="Tid för utadning"
            variant="outlined"
            onChange={(e) => settimeOuts(Number(e.target.value) * 1000)}
            value={timeOuts / 1000 === 0 ? "" : timeOuts / 1000}
          />

          <TextField
            sx={{ mt: 2 }}
            type="number"
            id="outlined-basic"
            label="Tid för utadning"
            variant="outlined"
            onChange={(e) => settimeOutHolds(Number(e.target.value) * 1000)}
            value={timeOutHolds / 1000 === 0 ? "" : timeOutHolds / 1000}
          />

          <TextField
            sx={{ mt: 2 }}
            type="number"
            id="outlined-basic"
            label="Antal andetag"
            variant="outlined"
            onChange={(e) =>
              settotalBreaths(Number(e.target.value), updateTimer())
            }
            value={totalBreaths === 0 ? "" : totalBreaths}
          />
        </Box>
      </VerktygContainer>
    </>
  );
}

export default Breathing;
