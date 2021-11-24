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
      <h1>{title}</h1>
    </section>
  );
};
