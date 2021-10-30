import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./jobCards.css";
import { Card, Avatar } from "antd";
import { getJobCards } from "../../utils/api";

const { Meta } = Card;

const JobCards = ({ filter,filterLocation }) => {
  const [jobDetails, setJobDetails] = useState([]);
  const [filterOutput, setfilterOutput] = useState([]);

  useEffect(() => {
    getJobCardsDetails();
  }, []);

  useEffect(() => {

    if (filter || filterLocation) {
      setfilterOutput(
        [...jobDetails].filter((element) => {

         return  element.name.toLowerCase().includes(filter) && element.locations[0]['name'].split(',')[0].toLowerCase().includes(filterLocation)
        } 
        ))
    }
    else {
      setfilterOutput([...jobDetails]);
    }
  }, [filter,filterLocation,jobDetails]);


  const getJobCardsDetails = () => {
    getJobCards()
      .then((response) => {
        if (response["status"] === 200) {
          setJobDetails([...response["data"].results]);
          setfilterOutput([...response["data"].results]);
        } else if (response["status"] === 400) {
          // show a error toast msg here
        }
      })
      .catch((err) => {
        // show a error toast msg here
      });
  };

  return (
    <div className="cards-container">
      {filterOutput.map((item, index) => (
        <Card key={item.id} style={{ width: 300, marginTop: 5 }}>
          <Meta
            avatar={
              <Avatar src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80" />
            }
            title={item.name}
            description={item.locations[0]['name'].split(',')[0]}
          />
        </Card>
      ))}
    </div>
  );
};

export default JobCards;
