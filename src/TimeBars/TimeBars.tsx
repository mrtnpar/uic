import * as React from "react";

import "./TimeBars.css";

interface TimeBarsProps {
  title: string;
}

export const TimeBars: React.FC<TimeBarsProps> = ({
  title = "TimeBars Title",
}) => {
  return (
    <section className="time-bars">
      <h1 className="title">{title}</h1>
      <div className="bars">
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    </section>
  );
};
