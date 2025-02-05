import React from "react";

const MyButton = ({
  name,
  isBeam = false,
  containerClass = "",
}: {
  name: string;
  isBeam?: boolean;
  containerClass?: string;
}) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className={"relative flex size-3"}>
          <span className={"btn-ping"} />
          <span className={"btn-ping_dot"} />
        </span>
      )}
      {name}
    </button>
  );
};
export default MyButton;
