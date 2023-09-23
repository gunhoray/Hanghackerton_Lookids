import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Define the animation
const fall = keyframes`
  0% { transform: translateY(-800%); }
  100% { transform: translateY(3000%); }
`;

type SymbolProps = {
  duration: number;
  left: number;
};

// Define a styled component for the symbols
const Symbol = styled.div<{ $duration: number; $left: number }>`
  position: absolute;
  animation-name: ${fall};
  animation-duration: ${(props) => props.$duration}s;
  animation-timing-function: linear;
  // Set to infinite if you want the symbols to keep falling
  // Set to a specific number if you want them to stop after some time
  // Here we set it to once so they disappear after falling once
  animation-iteration-count: 1;

  left: ${(props) => props.$left}%;
`;

type ShowerProps = {
  symbol: React.ReactNode;
};

const Shower: React.FC<ShowerProps> = ({ symbol }) => {
  const [showSymbols, setShowSymbols] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => setShowSymbols(false), 5000);
    return () => clearTimeout(timerId);
  }, []);

  // Generate an array of symbols with random properties
  // The maximum left position is now 90% to ensure that the symbols stay within the parent's width
  const symbols = Array.from({ length: 10 }).map((_, i) => ({
    key: i,
    $left: Math.random() * 90,
    $duration: Math.random() * (10 - 3) + 5,
  }));

  return (
    <div style={{ position: "relative", width: "200px", marginTop: "-10%" }}>
      {showSymbols &&
        symbols.map((symbolProps) => (
          <Symbol {...symbolProps}>{symbol}</Symbol>
        ))}
    </div>
  );
};

export default Shower;
