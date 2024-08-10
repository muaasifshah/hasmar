import React from "react";
import CountUp from "react-countup";

interface CountUpWrapperProps {
  value: string;
  isInView: boolean;
  duration?: number;
  suffix?: string;
}

const CountUpWrapper: React.FC<CountUpWrapperProps> = ({
  value,
  isInView,
  duration = 2,
  suffix = "",
}) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const extractedSuffix = value.replace(/[\d]/g, "").trim() || suffix;

  return (
    <div>
      {isInView ? (
        <CountUp
          end={numericValue}
          duration={duration}
          useEasing
          preserveValue={false}
          suffix={extractedSuffix}
        />
      ) : (
        <>
          {numericValue}
          {extractedSuffix}
        </>
      )}
    </div>
  );
};

export default CountUpWrapper;
