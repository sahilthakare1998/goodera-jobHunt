import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { withRouter } from "react-router-dom";
import "./jobExplore.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { Card, Avatar } from "antd";
import JobCards from "../JobCards/jobCards";

const { Header, Content, Footer } = Layout;

const { Meta } = Card;

const JobExplore = () => {
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchOption, setsearchOption] = useState("");
  const filterJobs = () => {
    setSearch(searchText);
    setsearchOption(searchLocation)
  };

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Job Hunt</Menu.Item>
          <Menu.Item key="2">Find Jobs</Menu.Item>
          <Menu.Item key="3">Post a job</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          style={{
            height: "40px",
            position: "fixed",
            zIndex: 1,
            width: "100%",
          }}
        >
          <div className="filter-box">
            <input onChange={(e) => setSearchText(e.target.value)} />
            <select name="location" id="location" onChange={e=>{setSearchLocation(e.target.value)}}>
              <option value="Barcelona">Barcelona</option>
              <option value="New York">New York</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Berlin">Berlin</option>
            </select>
            <button onClick={filterJobs}>Search</button>
          </div>
        </div>

        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <JobCards filter={search} filterLocation={searchOption}/>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default withRouter(JobExplore);
