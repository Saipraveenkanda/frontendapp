import { Component } from "react";
import Header from "../Header";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home-page-container">
        <Header />
        <div className="home">
          <div className="top-container">
            <h1 className="home-heading">Let's Make World Tour</h1>
            <button className="explore-btn">Explore</button>
          </div>
          <ul className="bottom-container">
            <li className="item">
              <img
                src="https://imageio.forbes.com/specials-images/dam/imageserve/1171238184/0x0.jpg?format=jpg&width=1200"
                alt="travel"
                className="item-image"
              />
            </li>
            <li className="item">
              <img
                src="https://img.jagranjosh.com/images/2021/October/19102021/pisa.png"
                alt="travel"
                className="item-image"
              />
            </li>
            <li className="item">
              <img
                src="https://www.planetware.com/wpimages/2021/10/world-tourist-attractions-eiffel-tower-flowers-spring.jpg"
                alt="travel"
                className="item-image"
              />
            </li>
            <li className="item">
              <img
                src="https://miro.medium.com/v2/resize:fit:1200/1*SpmlU9BU-qXgiYGNAJBBTA.jpeg"
                alt="travel"
                className="item-image"
              />
            </li>
            <li className="item">
              <img
                src="https://ihplb.b-cdn.net/wp-content/uploads/2021/06/Most-Beautiful-Places-in-the-World-750x430.jpg"
                alt="travel"
                className="item-image"
              />
            </li>
            <li className="item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKmwqzUWaey0nXAHNQHgQxRSGQc8zUR__6w&usqp=CAU"
                alt="travel"
                className="item-image"
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;
