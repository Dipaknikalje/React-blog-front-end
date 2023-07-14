import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Food() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://node-backend-blog-project-f5vv.onrender.com/api/data")
      .then((res) => {
        setData(res.data);
      });
  });
  return (
    <div>
      <h1 className="catagoryh1">Food</h1>
      <div className="Category_div">
        <div className="left_Side_Of_Category">
          {data
            .filter((val) => {
              return val.category === "Food";
            })
            .map((value, index) => (
              <div key={index}>
                <div className="child_data_left_Side_Of_Category">
                  <div>
                    <Link
                      to={`/article/${value.id}`}
                      className="link_bolly"
                    >
                      <img
                        src={value.Image}
                        width={300}
                        height={300}
                        alt={"img not found"}
                      />

                      <div className="description_div">
                        <p className="bolly_title">{value.title}</p>
                        <p>{value.description.slice(0, 150)}...</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <hr />
              </div>
            ))}
        </div>

        <div className="right_Side_Of_Category">
          <div>
            <h1 className="catagoryh1">Top News</h1>
            {data
              .filter((val) => {
                return val.category === "Food-Top";
              })
              .map((value, index) => (
                <div key={index}>
                  <div className="top_news_div">
                    <div>
                      <Link to={`/article/${value.id}`}>
                        <img
                          src={value.Image}
                          width={150}
                          height={150}
                          alt={"img not found"}
                        />
                      </Link>
                    </div>
                    <div>
                      <p>{value.title}</p>
                    </div>
                  </div>
                  <hr className="topnews_hr" />
                </div>
              ))}
          </div>
          <div className="Advertisement">Advertisement</div>
        </div>
      </div>
    </div>
  );
}

export default Food;
