import React, { useContext } from "react";
import { store } from "../../Utility/Details";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [details, setDetails] = useContext(store);
  return (
    <div className="main_common">
      <div className="TopPoster__div">
        <div className="TopPoster__big">
          <img
            src={"home_img/tree.jpg"}
            width={500}
            height={450}
            alt={"img not found"}
          />
          <p>
            <span>Nature beauty... </span>
            
          </p>
        </div>
        <div className="TopPoster__small">
          <img
            src={
              "home_img/tree.jpg"
            }
            width={250}
            height={220}
            alt={"img not found"}
          />
          <p>
            <span>Nature...</span>
          </p>

          <img
            src={
              "home_img/sunshine.jpg"
            }
            width={250}
            height={220}
            alt={"img not found"}
          />
          <p>
            <span>Nature... </span>
            
          </p>
        </div>
      </div>
      <h2 className="home_h1">Latest Travel stories...</h2>

      <div className="common_latest">
        {details
          .filter((val) => {
            return val.category === "Nature";
          })
          .map((value,index) => (
            <div key={index}>
              <div >
              <Link to={`/article/${value.id}`}>
                <img src={value.Image} width={200} height={200} alt={"img not found"}/></Link>
                <p>{value.title}</p>
              </div>
            </div>
          ))}
      </div>

      <h2 className="home_h1">Latest Bollywood stories...</h2>

      <div className="common_latest">
        {details
          .filter((val) => {
            return val.subcat === "Bollywood";
          })
          .map((value,index) => (
            <div key={index}>
              <div >
              <Link to={`/article/${value.id}`}>
              <img src={value.Image} width={200} height={200} alt={"img not found"}/></Link>
                <p>{value.title}</p>    
                         </div>
            </div>
          ))}
      </div>

      <h2 className="home_h1">Latest Hollywood stories...</h2>

      <div className="Hollywood-div-latest-add">
        <div>
          console.log({setDetails});
          {details
            .filter((val) => {
              return val.subcat === "Hollywood";
            })
            .map((value,index) => (
              <div key={index}>
                <div className="Hollywood_latest" >
                <Link to={`/article/${value.id}`}>
                <img src={value.Image} width={200} height={200} alt={"img not found"}/></Link>
                <p className="Hollywood_latest_p"> <span>{value.title}:</span>
                  &nbsp; &nbsp;&nbsp;
                <span>{value.description.slice(0,60)}</span> </p> 
                </div>
              </div>
            ))}
        </div>

        <div>
          <div className="home_add">Add</div>
          <div className="home_add">Add</div>
        </div>
      </div>

      <h2 className="home_h1">Latest Fitness stories...</h2>

      <div className="common_latest">
        {details
          .filter((val) => {
            return val.subcat === "Fitness";
          })
          .map((value,index) => (
            <div key={index}>
              <div >
              <Link to={`/article/${value.id}`} >

              <img src={value.Image} width={200} height={200} alt={"img not found"}/></Link>
                <p>{value.title}</p>
              </div>
            </div>
          ))}
      </div >

      <h2 className="home_h1">Latest Food stories...</h2>

      <div className="common_latest">
        {details
          .filter((val) => {
            return val.subcat === "Food";
          })
          .map((value,index) => (
            <div key={index}>
              <div >
              <Link to={`/article/${value.id}`}>
              <img src={value.Image} width={200} height={200} alt={"img not found"} /></Link>

                <p>{value.title}</p>
              </div>
            </div>
          ))}
      </div>

      <h2 className="home_h1">Latest Technology stories...</h2>

      <div className="common_latest">
        {details
          .filter((val) => {
            return val.subcat === "Technology";
          })
          .map((value, index) => (
            <div  key={index}>
              <div>
                <Link to={`/article/${value.id}`}>
                <img src={value.Image} width={200} height={200} alt={"img not found"}/></Link>

                <p>{value.title}</p>
              </div>
            </div>
          ))}
      </div>

    </div>
  );
}

export default Home;