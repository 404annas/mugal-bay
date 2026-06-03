"use client";

import React, { useState, useEffect, CSSProperties } from "react";
import Marquee from "react-fast-marquee";

interface TimeState {
  hours: number;
  minutes: number;
  seconds: number;
}

const FocusSlider: React.FC = () => {
  const INITIAL_HOURS = 12;
  const INITIAL_MINUTES = 45;
  const INITIAL_SECONDS = 52;

  const [mounted, setMounted] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [time, setTime] = useState<TimeState>({
    hours: INITIAL_HOURS,
    minutes: INITIAL_MINUTES,
    seconds: INITIAL_SECONDS,
  });

  // Handle client-side mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(() => {
      setTime((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          return {
            hours: INITIAL_HOURS,
            minutes: INITIAL_MINUTES,
            seconds: INITIAL_SECONDS,
          };
        }

        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mounted]);

  const formatNumber = (num: number): string => {
    return String(num).padStart(2, "0");
  };

  // Type-safe CSS Styles
  const containerStyle: CSSProperties = {
    backgroundColor: isHovered ? "#271D46" : "#090325",
    padding: "9px 0",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  };

  const itemStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "40px",
    padding: "0 14px",
    whiteSpace: "nowrap",
    fontFamily: "var(--font-roboto)",
  };

  const promoTextStyle: CSSProperties = {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: "14px",
    letterSpacing: "0.03em",
  };

  const timerLabelStyle: CSSProperties = {
    color: "#EDECF0",
    fontSize: "14px",
    fontWeight: "500",
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
  };

  const timeValueStyle: CSSProperties = {
    color: "#EDECF0",
    fontWeight: "700",
    fontSize: "14px",
    display: "inline-flex",
    gap: "12px",
    fontFamily: "var(--font-roboto-mono)",
  };

  const claimLinkStyle: CSSProperties = {
    color: "#8380a4",
    fontSize: "14px",
    fontWeight: "400",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
  };

  const sliderItems = Array(6)
    .fill(null)
    .map((_, index) => (
      <div key={index} style={itemStyle}>
        <span style={promoTextStyle}>15% OFF ON ANY PLAN</span>

        <span style={timerLabelStyle}>
          Ends in{" "}
          <span style={timeValueStyle} className="font-roboto-mono">
            <span>{mounted ? formatNumber(time.hours) : "12"}</span>
            <span>{mounted ? formatNumber(time.minutes) : "45"}</span>
            <span>{mounted ? formatNumber(time.seconds) : "52"}</span>
          </span>
        </span>

        <p style={claimLinkStyle}>Claim now &rarr;</p>
      </div>
    ));

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Marquee speed={45} gradient={false} play={true}>
        {sliderItems}
      </Marquee>
    </div>
  );
};

export default FocusSlider;
