import React from "react";

const TeamData = () => {
    const [errordata] = React.useState({
        errorheading: "Our Creative Team",
        para:"labore dolore magnam aliquam quaerat voluptatem ad minima veniam, quis nostrum exercitationem",
      });
  return (
    <>
      <div className="conatiner-fluid">
        <div className="col-10 mx-auto">
          <div className="team_main">
            <h1>{errordata.errorheading}</h1>
            <p>{errordata.para}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamData;
