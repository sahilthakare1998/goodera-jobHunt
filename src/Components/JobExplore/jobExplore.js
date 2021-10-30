import React, { useState } from "react";
import "antd/dist/antd.css";
import { withRouter } from "react-router-dom";
import "./jobExplore.css";
import { Layout, Menu } from "antd";
import JobCards from "../JobCards/jobCards";

const { Header, Content, Footer } = Layout;


const JobExplore = (props) => {
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchOption, setsearchOption] = useState("");
  const filterJobs = () => {
    setSearch(searchText);
    setsearchOption(searchLocation)
  };

  const handleClick = e => {
    console.log('e.key',e.key)

      if(e.key === '4'){
        props.history.push('/') 
      }
    
  };

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu onClick={handleClick} theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Job Hunt</Menu.Item>
          <Menu.Item key="2">Find Jobs</Menu.Item>
          <Menu.Item key="3">Post a job</Menu.Item>
          <Menu.Item className='signOut' key="4">SignOut</Menu.Item>
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
            <select name="location" id="location" onClick={e=>{setSearchLocation(e.target.value)}}>
            <option value="">Select Location</option>
              <option value="nashville">nashville</option>
              <option value="New York">New York</option>
              <option value="findlay">Findlay</option>
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
