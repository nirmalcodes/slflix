import React from "react";
import requests from "../../Requests";
import Main from "../../components/Main/Main";
import Row from "../../components/Row/Row";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId='1' title="Popular" fetchUrl={requests.requestPopular} />
      <Row rowId='2' title="Popular" fetchUrl={requests.requestPopular} />
      <Row rowId='3' title="Popular" fetchUrl={requests.requestPopular} />
      <Row rowId='4' title="Popular" fetchUrl={requests.requestPopular} />
    </>
  );
};

export default Home;
