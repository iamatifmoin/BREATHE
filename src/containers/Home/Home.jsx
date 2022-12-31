import React from "react";
import "./home.scss";
import Input from "../../components/input/Input";

const Home = () => {
  return (
    <div className="outer">
      <div className="inner-first">
        <div className="inner-second">
          <div className="inner-third">
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
