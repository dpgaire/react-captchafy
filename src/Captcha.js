// src/Captcha.js

import React, { useState, useRef, useEffect } from "react";
import { FaRedo } from "react-icons/fa";
import PropTypes from "prop-types";

const Captcha = ({
  onCaptchaValid,
  onCaptchaInvalid,
  errorMessage,
  isLoading,
  captchaLength = 6,
  canvasWidth = 375,
  canvasHeight = 40,
  fontStyle = "30px Brush Script MT, cursive",
  textColor = "black",
  backgroundColor = "#f5f5f5",
  buttonLabel = "PROCEED",
  customStyles = {},
}) => {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const canvasRef = useRef(null);

  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captchaString = "";
    for (let i = 0; i < captchaLength; i++) {
      captchaString += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setCaptcha(captchaString);
  };

  const drawCaptcha = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontStyle;
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(captcha, canvas.width / 2, canvas.height / 2);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    drawCaptcha();
  }, [captcha]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const validateCaptcha = () => {
    if (userInput === captcha) {
      onCaptchaValid();
    } else {
      onCaptchaInvalid();
    }
  };

  const handleReset = () => {
    generateCaptcha();
    setUserInput("");
  };

  return (
    <div style={{ textAlign: "center", ...customStyles.container }}>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ backgroundColor, ...customStyles.canvas }}
      />
      <FaRedo
        onClick={handleReset}
        style={{ cursor: "pointer", ...customStyles.resetIcon }}
      />
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter CAPTCHA"
        style={{ ...customStyles.input }}
      />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button
        onClick={validateCaptcha}
        disabled={isLoading}
        style={{ ...customStyles.button }}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

Captcha.propTypes = {
  onCaptchaValid: PropTypes.func.isRequired,
  onCaptchaInvalid: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  captchaLength: PropTypes.number,
  canvasWidth: PropTypes.number,
  canvasHeight: PropTypes.number,
  fontStyle: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttonLabel: PropTypes.string,
  customStyles: PropTypes.object,
};

export default Captcha;
