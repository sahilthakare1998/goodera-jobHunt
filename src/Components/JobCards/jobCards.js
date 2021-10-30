import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./jobCards.css";
import { Card, Avatar } from "antd";
import { getJobCards } from "../../utils/api";

const { Meta } = Card;
const imageUrl =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80";

const JobCards = ({ filter }) => {
  const [jobDetails, setJobDetails] = useState([]);
  const [filterOutput, setfilterOutput] = useState([]);

  useEffect(() => {
    getJobCardsDetails();
  }, []);

  useEffect(() => {
    if (filter === "") {
      setfilterOutput([...jobDetails]);
    } else {
      setfilterOutput(
        [...jobDetails].filter((element) =>
          element.name.toLowerCase().includes(filter)
        )
      );
    }
  }, [filter]);
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
        <Card style={{ width: 300, marginTop: 5 }}>
          <Meta
            avatar={
              <Avatar src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80" />
            }
            title={item.name}
            description={item.short_name}
          />
        </Card>
      ))}
    </div>
  );
};

export default JobCards;
