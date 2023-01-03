import { Button, Typography } from "@mui/material";
import React from "react";
import VerktygContainer from "../../Verktyg/VerktygContainer";
import VerktygAppbar from "../../Navigation/VerktygAppBar";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { Box, width } from "@mui/system";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import { useSpring, animated, useTransition } from "@react-spring/web";

function Breathing({ timeIn, timeInHold, timeOut, timeOutHold }) {
  const TIME_IN_MILISECONDS_TO_COUNTDOWN = 67 * 1000;
  const INTERVAL_IN_MILISECONDS = 100;

  const [time, setTime] = useState(TIME_IN_MILISECONDS_TO_COUNTDOWN);
  const [referenceTime, setReferenceTime] = useState();
  const [ispaused, setispaused] = useState(true);

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

  const [page, setpage] = useState(0);
  const [nrOfBreaths, setnrOfBreaths] = useState(2);
  const [grow, setGrow] = useState(true);
  const [shrink, setshrink] = useState(false);

  let timeIns = 1000;
  let timeInHolds = 1000;
  let timeOuts = 2000;
  let timeOutHolds = 2000;

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
        numberOfSteps={nrOfBreaths.length}
        isResultsPage={page === nrOfBreaths}
      />
      <VerktygContainer>
        <Box
          sx={{
            width: "calc(15vw*3.5)",
            height: "calc(15vw*3.5)",
            position: "relative",
          }}
        >
          <animated.div
            style={{
              width: "10vw",
              height: "10vw",
              position: "absolute",
              top: "calc(10vw*3.5/2)",
              // magrin på halva bredden för att få centerad
              ml: "5vw",
              left: "50%",
              transform: "translate(-50%, 0)",
              msTransform: "translate(-50%, -50%)",

              background: "#17191c",
              borderRadius: "50%",
              ...styleOut,
            }}
          ></animated.div>
        </Box>
        <Box sx={{}}>
          <Typography display="inline">
            {" "}
            {Math.floor(time / 1000 / 60)} min{" "}
          </Typography>
          <Typography display="inline">
            {((time / 1000) % 60).toFixed()} sek{" "}
          </Typography>
        </Box>

        <Box sx={{ position: "absolute", bottom: 14 }}>
          <Button onClick={handelStart}>{"start"}</Button>
          <Button onClick={handelPause}>{"paus timer"}</Button>
        </Box>
      </VerktygContainer>
    </>
  );
}

export default Breathing;
