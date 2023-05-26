import { useContext } from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import useFetchData from "../../Hooks/useFetchData";
import { ExampleContext } from "../../context/exampleContext/Index";
import "../../App.css";
import { useNavigate } from "react-router-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

const Index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { value, setValue } = useContext(ExampleContext);
  const { newGames } = useFetchData();
  const mutedGames = ["tetris", "RoadFighter"];
  const [count, setCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const checkMuted = (name) => {
    if (mutedGames.includes(name)) {
      return true;
    } else {
      return false;
    }
  };

  const playGame = (name) => {
    navigate(`/About/${name}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * 5);
      setActiveIndex(newIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // console.log("in", activeIndex);
  // const div = Array.from({ length: 5 }, (_, index) => (
  //   <div key={index} className={activeIndex === index ? "active" : ""}></div>
  // ));

  /////////////////////////////////Javascript////////////////////////////////////////////////////////////////////
  let x = 10 + 5; //15
  x += 10; // x=x+15 , 25
  // console.log(x);

  //
  let markWeight = 78;
  let markHeight = 1.69;
  let JohnWeight = 92;
  let JohnHeight = 1.95;

  let marks = markWeight / markHeight ** 2;
  let Johns = JohnWeight / JohnHeight ** 2;

  if (marks > Johns) {
    //console.log(`Marks BMI ${marks} is higher than Johns `);
  } else {
    //console.log(`Johns BMI ${Johns} is higher than Marks `);
  }

  //Type Conversion
  let b = "25";
  let c = Number(b);
  // console.log(10 + Number(b));

  //type coersion ----- automatically converts strings to numbers when it sees operators
  // console.log("I am " + 25 + " years old");
  // console.log("23" - "10" - 3); //10 ---------- means it converted strings to number
  // console.log("23" + "10" + 3); //10 ---------- Plus sign is used to concatenate
  let n = "1" + 1;
  n = n - 1;
  // console.log(n);

  //== and === && and ||

  const dolphins = (97 + 112 + 101) / 3;
  const koalas = (109 + 95 + 123) / 3;
  if (dolphins > koalas && dolphins >= 100) {
    // console.log("Dolphin wins");
  } else if (koalas > dolphins && koalas >= 100) {
    //console.log("Koala wins");
  } else if (koalas == dolphins) {
    // console.log("Its draw");
  }

  // const str = "this is expression";
  // the above line is statement. (returns some result means this is a expression)

  let tip = 15;
  let bill = 275;
  let tipCalc = bill * (tip / 100);
  // {`${bill >= 300 || bill <= 50 } ? The bill was ${bill}, the tip was ${tipCalc} the total value is: ${bill+tipCalc} : "" `}

  const result =
    bill <= 300 || bill >= 50
      ? ` The bill was ${bill} and tip is ${tipCalc} and your bill is ${
          tipCalc + bill
        } `
      : bill + 0.2;
  //console.log(result);
  //

  // 'use strict';

  let driversLicence = false;
  let pass = true;
  if (pass) driversLicence = true;

  // Functions
  function juiceProducer(apple, orange) {
    const juice = `Juice of ${apple} apples and ${orange} oranges.`;
    return juice;
  }

  console.log(juiceProducer(4, 5));

  function age(ageYear) {
    return 2023 - ageYear;
  }
  console.log(age(1997));

  //Arrow function
  const ageCalc = (ageYear) => 2023 - ageYear;
  console.log(ageCalc(1997));

  function cutPieces(fruit) {
    return fruit * 4;
  }
  function juiceProducer(apple, orange) {
    const applePiece = cutPieces(apple);
    const orangePiece = cutPieces(orange);
    return `Juice of ${applePiece} Pieces of apple and ${orangePiece} pieces of orange`;
  }
  console.log(juiceProducer(4, 2));

  //func challenge
  const calcAverage = (score1, score2, score3) =>
    (score1 + score2 + score3) / 3;
  const averageDolphin = calcAverage(85, 54, 41);
  const averageKoala = calcAverage(23, 34, 27);

  console.log("Average Score", averageDolphin, averageKoala);

  function checkWinner(averageDolphin, averageKoala) {
    if (averageDolphin >= averageKoala * 2) {
      console.log(`Dolphin wins ${averageDolphin} vs. ${averageKoala} `);
    } else if (averageKoala >= averageDolphin * 2) {
      console.log(`Koala wins ${averageDolphin} vs. ${averageKoala} `);
    } else {
      console.log("No Team Wins :(");
    }
  }

  checkWinner(averageDolphin, averageKoala);
  checkWinner(576, 111);

  // Array

  const friends = ["Sara", "Anum", "Zara"];
  friends[2] = "Sanum";
  console.log(friends);

  /////////////////////////////////Javascript////////////////////////////////////////////////////////////////////

  return (
    <>
      <Container>
        <h1>Home</h1>
        <h2>{value}</h2>
        <Button onClick={() => setValue("Hi! \n I'm from Context")}>
          Click me to see the Magic!
        </Button>

        <div className="d-flex ">
          {newGames?.data?.map((item, index) => {
            // Array.from({ length: index }, (_, index) => (
            // console.log(activeIndex, index);
            return (
              <div
                key={index}
                className={`${activeIndex === index ? "active" : ""}`}
              >
                <Card
                  key={index}
                  style={{ width: "15rem" }}
                  onClick={() => {
                    playGame(item?.name);
                  }}
                >
                  {checkMuted(item?.name) ? (
                    <div className="comingSoon"></div>
                  ) : (
                    ""
                  )}
                  <Card.Img
                    variant="top"
                    src={item.thumbnail}
                    alt={item.thumbnailAlt}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    {item?.stages[index]?.price ? (
                      <Card.Text>
                        Price of Games: {item?.stages[index]?.price}
                      </Card.Text>
                    ) : (
                      <Card.Text>No Prices alloted</Card.Text>
                    )}
                    <Button variant="primary">
                      Total Played: {item.totalPlayed}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
            // ));
          })}
        </div>

        {/* 
    <div className="tabsBlog">
        <nav>
          <div className="nav nav-tabs websiteTabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="inner1-tab" data-bs-toggle="tab" data-bs-target="#Maininner1" type="button" role="tab" aria-controls="inner1" aria-selected="true">Website</button>
            <button className="nav-link" id="inner2-tab" data-bs-toggle="tab" data-bs-target="#Maininner2" type="button" role="tab" aria-controls="inner2" aria-selected="false">Logo</button>
          </div>
        </nav>

        <div className="tab-content parent-tab" id="nav-tabContent">
                <div className="tab-pane fade active show" id="Maininner1" role="tabpanel" aria-labelledby="innertab1">
                    <div className="card ">
                      <nav>
                        <div className="nav nav-tabs secondTabs" id="nav-tab" role="tablist">
                          <button className="nav-link active" id="innertab1" data-bs-toggle="tab" data-bs-target="#inner1" type="button" role="tab" aria-controls="inner1" aria-selected="true">Ecommerce</button>
                          <button className="nav-link" id="innertab2" data-bs-toggle="tab" data-bs-target="#inner2" type="button" role="tab" aria-controls="inner2" aria-selected="false">Corporate</button>
                        </div>
                      </nav>
                    </div>
                </div>
                <div className="tab-pane fade " id="Maininner2" role="tabpanel" aria-labelledby="innertab2">
                    <div className="card listBtns">
                    <nav>
                      <div className="nav nav-tabs secondTabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="innertab1" data-bs-toggle="tab" data-bs-target="#inner1" type="button" role="tab" aria-controls="inner1" aria-selected="true">Ecommerce</button>
                        <button className="nav-link" id="innertab2" data-bs-toggle="tab" data-bs-target="#inner2" type="button" role="tab" aria-controls="inner2" aria-selected="false">Corporate</button>
                      </div>
                    </nav>
                </div>
              </div>
            <div className="tab-content child-tab" id="nav-tabContent">
                <div className="tab-pane fade active show" id="inner1" role="tabpanel" aria-labelledby="inner1">
                    <div className="grid">
                        <article className="article">
                          <figure className="article__figure"><img className="article__cover" src="https://picsum.photos/id/60/600/300"/>
                            <figcaption className="article__caption">
                              <h2 className="article__title">Card Title</h2>
                              <p className="article__info">Princes Victoria</p>
                            </figcaption>
                          </figure>
                        </article>
                        <article className="article">
                          <figure className="article__figure"><img className="article__cover" src="https://picsum.photos/id/80/600/300"/>
                            <figcaption className="article__caption">
                              <h2 className="article__title">Card Title</h2>
                              <p className="article__info">Princes Victoria</p>
                            </figcaption>
                          </figure>
                        </article>
                        <article className="article">
                          <figure className="article__figure"><img className="article__cover" src="https://picsum.photos/id/100/600/300"/>
                            <figcaption className="article__caption">
                              <h2 className="article__title">Card Title</h2>
                              <p className="article__info">Princes Victoria</p>
                            </figcaption>
                          </figure>
                        </article>
                        <article className="article">
                          <figure className="article__figure"><img className="article__cover" src="https://picsum.photos/id/120/600/300"/>
                            <figcaption className="article__caption">
                              <h2 className="article__title">Card Title</h2>
                              <p className="article__info">Victoria Princes</p>
                            </figcaption>
                          </figure>
                        </article>
                    </div>
                </div>
                <div className="tab-pane fade" id="inner2" role="tabpanel" aria-labelledby="inner2">
                    <div className="grid">
                        <article className="article">
                          <figure className="article__figure"><img className="article__cover" src="https://picsum.photos/id/80/600/300"/>
                            <figcaption className="article__caption">
                              <h2 className="article__title">Card Title</h2>
                              <p className="article__info">Princes Victoria</p>
                            </figcaption>
                          </figure>
                        </article>
                        <article className="article">
                          <figure className="article__figure"><img className="article__cover" src="https://picsum.photos/id/100/600/300"/>
                            <figcaption className="article__caption">
                              <h2 className="article__title">Card Title</h2>
                              <p className="article__info">Princes Victoria</p>
                            </figcaption>
                          </figure>
                        </article>
                        <article className="article">
                          <figure className="article__figure"><img className="article__cover" src="https://picsum.photos/id/120/600/300"/>
                            <figcaption className="article__caption">
                              <h2 className="article__title">Card Title</h2>
                              <p className="article__info">Victoria Princes</p>
                            </figcaption>
                          </figure>
                        </article>
                        <article className="article">
                          <figure className="article__figure"><img className="article__cover" src="https://picsum.photos/id/60/600/300"/>
                            <figcaption className="article__caption">
                              <h2 className="article__title">Card Title</h2>
                              <p className="article__info">Princes Victoria</p>
                            </figcaption>
                          </figure>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

        <div className="   tabsBlog ">
          <nav>
            <div
              className="nav nav-tabs websiteTabs"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="inner1-tab"
                data-bs-toggle="tab"
                data-bs-target="#Maininner1"
                type="button"
                role="tab"
                aria-controls="inner1"
                aria-selected="true"
              >
                Website
              </button>
              <button
                className="nav-link"
                id="inner2-tab"
                data-bs-toggle="tab"
                data-bs-target="#Maininner2"
                type="button"
                role="tab"
                aria-controls="inner2"
                aria-selected="false"
              >
                Logo
              </button>
              <button
                className="nav-link"
                id="inner3-tab"
                data-bs-toggle="tab"
                data-bs-target="#Maininner3"
                type="button"
                role="tab"
                aria-controls="inner3"
                aria-selected="false"
              >
                Social Media
              </button>
              <button
                className="nav-link"
                id="inner4-tab"
                data-bs-toggle="tab"
                data-bs-target="#Maininner4"
                type="button"
                role="tab"
                aria-controls="inner4"
                aria-selected="false"
              >
                Print Work
              </button>
              <button
                className="nav-link"
                id="inner5-tab"
                data-bs-toggle="tab"
                data-bs-target="#Maininner5"
                type="button"
                role="tab"
                aria-controls="inner5"
                aria-selected="false"
              >
                Package designing
              </button>
            </div>
          </nav>

          <div className="tab-content parent-tab" id="nav-tabContent">
            <div
              className="tab-pane fade active show"
              id="Maininner1"
              role="tabpanel"
              aria-labelledby="innertab1"
            >
              <div className="card ">
                <nav>
                  <div
                    className="nav nav-tabs secondTabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="innertab1"
                      data-bs-toggle="tab"
                      data-bs-target="#inner1"
                      type="button"
                      role="tab"
                      aria-controls="inner1"
                      aria-selected="true"
                    >
                      Ecommerce
                    </button>
                    <button
                      className="nav-link"
                      id="innertab2"
                      data-bs-toggle="tab"
                      data-bs-target="#inner2"
                      type="button"
                      role="tab"
                      aria-controls="inner2"
                      aria-selected="false"
                    >
                      Corporate
                    </button>
                    <button
                      className="nav-link"
                      id="innertab3"
                      data-bs-toggle="tab"
                      data-bs-target="#inner3"
                      type="button"
                      role="tab"
                      aria-controls="inner3"
                      aria-selected="false"
                    >
                      Educational
                    </button>
                    <button
                      className="nav-link"
                      id="innertab4"
                      data-bs-toggle="tab"
                      data-bs-target="#inner4"
                      type="button"
                      role="tab"
                      aria-controls="inner4"
                      aria-selected="false"
                    >
                      Religious
                    </button>
                    <button
                      className="nav-link"
                      id="innertab5"
                      data-bs-toggle="tab"
                      data-bs-target="#inner5"
                      type="button"
                      role="tab"
                      aria-controls="inner5"
                      aria-selected="false"
                    >
                      Tech
                    </button>
                    <button
                      className="nav-link"
                      id="innertab6"
                      data-bs-toggle="tab"
                      data-bs-target="#inner6"
                      type="button"
                      role="tab"
                      aria-controls="inner6"
                      aria-selected="false"
                    >
                      Real estate
                    </button>
                    <button
                      className="nav-link"
                      id="innertab7"
                      data-bs-toggle="tab"
                      data-bs-target="#inner7"
                      type="button"
                      role="tab"
                      aria-controls="inner7"
                      aria-selected="false"
                    >
                      Fashion
                    </button>
                    <button
                      className="nav-link"
                      id="innertab8"
                      data-bs-toggle="tab"
                      data-bs-target="#inner8"
                      type="button"
                      role="tab"
                      aria-controls="inner8"
                      aria-selected="false"
                    >
                      sport
                    </button>
                    <button
                      className="nav-link"
                      id="innertab9"
                      data-bs-toggle="tab"
                      data-bs-target="#inner9"
                      type="button"
                      role="tab"
                      aria-controls="inner9"
                      aria-selected="false"
                    >
                      portal
                    </button>
                    <button
                      className="nav-link"
                      id="innertab10"
                      data-bs-toggle="tab"
                      data-bs-target="#inner10"
                      type="button"
                      role="tab"
                      aria-controls="inner10"
                      aria-selected="false"
                    >
                      law
                    </button>
                    <button
                      className="nav-link"
                      id="innertab11"
                      data-bs-toggle="tab"
                      data-bs-target="#inner11"
                      type="button"
                      role="tab"
                      aria-controls="inner11"
                      aria-selected="false"
                    >
                      Health
                    </button>
                    <button
                      className="nav-link"
                      id="innertab12"
                      data-bs-toggle="tab"
                      data-bs-target="#inner12"
                      type="button"
                      role="tab"
                      aria-controls="inner12"
                      aria-selected="false"
                    >
                      Hotel / Travel
                    </button>
                  </div>
                </nav>
                <div className="tab-content child-tab" id="nav-tabContent">
                  <div
                    className="tab-pane fade active show"
                    id="inner1"
                    role="tabpanel"
                    aria-labelledby="inner1"
                  >
                    <div className="grid">
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/60/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/80/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/100/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/120/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Victoria Princes</p>
                          </figcaption>
                        </figure>
                      </article>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade  "
                    id="inner2"
                    role="tabpanel"
                    aria-labelledby="inner2"
                  >
                    <div className="grid">
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/80/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/100/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/120/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Victoria Princes</p>
                          </figcaption>
                        </figure>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade "
              id="Maininner2"
              role="tabpanel"
              aria-labelledby="innertab2"
            >
              <div className="card listBtns">
                <nav>
                  <div
                    className="nav nav-tabs secondTabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="innertab11"
                      data-bs-toggle="tab"
                      data-bs-target="#inner11"
                      type="button"
                      role="tab"
                      aria-controls="inner11"
                      aria-selected="true"
                    >
                      Ecommerce
                    </button>
                    <button
                      className="nav-link"
                      id="innertab22"
                      data-bs-toggle="tab"
                      data-bs-target="#inner22"
                      type="button"
                      role="tab"
                      aria-controls="inner22"
                      aria-selected="false"
                    >
                      Corporate
                    </button>
                    <button
                      className="nav-link"
                      id="innertab3"
                      data-bs-toggle="tab"
                      data-bs-target="#inner3"
                      type="button"
                      role="tab"
                      aria-controls="inner3"
                      aria-selected="false"
                    >
                      Educational
                    </button>
                    <button
                      className="nav-link"
                      id="innertab4"
                      data-bs-toggle="tab"
                      data-bs-target="#inner4"
                      type="button"
                      role="tab"
                      aria-controls="inner4"
                      aria-selected="false"
                    >
                      Religious
                    </button>
                    <button
                      className="nav-link"
                      id="innertab5"
                      data-bs-toggle="tab"
                      data-bs-target="#inner5"
                      type="button"
                      role="tab"
                      aria-controls="inner5"
                      aria-selected="false"
                    >
                      Tech
                    </button>
                    <button
                      className="nav-link"
                      id="innertab6"
                      data-bs-toggle="tab"
                      data-bs-target="#inner6"
                      type="button"
                      role="tab"
                      aria-controls="inner6"
                      aria-selected="false"
                    >
                      Real estate
                    </button>
                    <button
                      className="nav-link"
                      id="innertab7"
                      data-bs-toggle="tab"
                      data-bs-target="#inner7"
                      type="button"
                      role="tab"
                      aria-controls="inner7"
                      aria-selected="false"
                    >
                      Fashion
                    </button>
                    <button
                      className="nav-link"
                      id="innertab8"
                      data-bs-toggle="tab"
                      data-bs-target="#inner8"
                      type="button"
                      role="tab"
                      aria-controls="inner8"
                      aria-selected="false"
                    >
                      sport
                    </button>
                    <button
                      className="nav-link"
                      id="innertab9"
                      data-bs-toggle="tab"
                      data-bs-target="#inner9"
                      type="button"
                      role="tab"
                      aria-controls="inner9"
                      aria-selected="false"
                    >
                      portal
                    </button>
                    <button
                      className="nav-link"
                      id="innertab10"
                      data-bs-toggle="tab"
                      data-bs-target="#inner10"
                      type="button"
                      role="tab"
                      aria-controls="inner10"
                      aria-selected="false"
                    >
                      law
                    </button>
                    <button
                      className="nav-link"
                      id="innertab11"
                      data-bs-toggle="tab"
                      data-bs-target="#inner11"
                      type="button"
                      role="tab"
                      aria-controls="inner11"
                      aria-selected="false"
                    >
                      Health
                    </button>
                    <button
                      className="nav-link"
                      id="innertab12"
                      data-bs-toggle="tab"
                      data-bs-target="#inner12"
                      type="button"
                      role="tab"
                      aria-controls="inner12"
                      aria-selected="false"
                    >
                      Hotel / Travel
                    </button>
                  </div>
                </nav>
                <div className="tab-content child-tab" id="nav-tabContent">
                  <div
                    className="tab-pane fade active show"
                    id="inner11"
                    role="tabpanel"
                    aria-labelledby="inner11"
                  >
                    <div className="grid">
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/60/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/80/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/100/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/120/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Victoria Princes</p>
                          </figcaption>
                        </figure>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade  "
              id="Maininner2"
              role="tabpanel"
              aria-labelledby="innertab2"
            >
              <div className="">
                <nav>
                  <div
                    className="nav nav-tabs websiteTabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="innertab1"
                      data-bs-toggle="tab"
                      data-bs-target="#inner22"
                      type="button"
                      role="tab"
                      aria-controls="inner22"
                      aria-selected="true"
                    >
                      Ecommerce
                    </button>
                    <button
                      className="nav-link"
                      id="innertab2"
                      data-bs-toggle="tab"
                      data-bs-target="#inner2"
                      type="button"
                      role="tab"
                      aria-controls="inner2"
                      aria-selected="false"
                    >
                      Corporate
                    </button>
                    <button
                      className="nav-link"
                      id="innertab3"
                      data-bs-toggle="tab"
                      data-bs-target="#inner3"
                      type="button"
                      role="tab"
                      aria-controls="inner3"
                      aria-selected="false"
                    >
                      Educational
                    </button>
                  </div>
                </nav>
                <div className="tab-content child-tab" id="nav-tabContent">
                  <div
                    className="tab-pane fade active show"
                    id="inner22"
                    role="tabpanel"
                    aria-labelledby="inner22"
                  >
                    <div className="grid">
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/60/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/80/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/100/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/120/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Victoria Princes</p>
                          </figcaption>
                        </figure>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade  "
              id="Maininner3"
              role="tabpanel"
              aria-labelledby="innertab3"
            >
              <div className="card ">
                <nav>
                  <div
                    className="nav nav-tabs secondTabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="innertab1"
                      data-bs-toggle="tab"
                      data-bs-target="#inner1"
                      type="button"
                      role="tab"
                      aria-controls="inner1"
                      aria-selected="true"
                    >
                      Ecommerce
                    </button>
                    <button
                      className="nav-link"
                      id="innertab2"
                      data-bs-toggle="tab"
                      data-bs-target="#inner2"
                      type="button"
                      role="tab"
                      aria-controls="inner2"
                      aria-selected="false"
                    >
                      Corporate
                    </button>
                    <button
                      className="nav-link"
                      id="innertab3"
                      data-bs-toggle="tab"
                      data-bs-target="#inner3"
                      type="button"
                      role="tab"
                      aria-controls="inner3"
                      aria-selected="false"
                    >
                      Educational
                    </button>
                    <button
                      className="nav-link"
                      id="innertab4"
                      data-bs-toggle="tab"
                      data-bs-target="#inner4"
                      type="button"
                      role="tab"
                      aria-controls="inner4"
                      aria-selected="false"
                    >
                      Religious
                    </button>
                    <button
                      className="nav-link"
                      id="innertab5"
                      data-bs-toggle="tab"
                      data-bs-target="#inner5"
                      type="button"
                      role="tab"
                      aria-controls="inner5"
                      aria-selected="false"
                    >
                      Tech
                    </button>
                    <button
                      className="nav-link"
                      id="innertab6"
                      data-bs-toggle="tab"
                      data-bs-target="#inner6"
                      type="button"
                      role="tab"
                      aria-controls="inner6"
                      aria-selected="false"
                    >
                      Real estate
                    </button>
                    <button
                      className="nav-link"
                      id="innertab7"
                      data-bs-toggle="tab"
                      data-bs-target="#inner7"
                      type="button"
                      role="tab"
                      aria-controls="inner7"
                      aria-selected="false"
                    >
                      Fashion
                    </button>
                    <button
                      className="nav-link"
                      id="innertab8"
                      data-bs-toggle="tab"
                      data-bs-target="#inner8"
                      type="button"
                      role="tab"
                      aria-controls="inner8"
                      aria-selected="false"
                    >
                      sport
                    </button>
                    <button
                      className="nav-link"
                      id="innertab9"
                      data-bs-toggle="tab"
                      data-bs-target="#inner9"
                      type="button"
                      role="tab"
                      aria-controls="inner9"
                      aria-selected="false"
                    >
                      portal
                    </button>
                    <button
                      className="nav-link"
                      id="innertab10"
                      data-bs-toggle="tab"
                      data-bs-target="#inner10"
                      type="button"
                      role="tab"
                      aria-controls="inner10"
                      aria-selected="false"
                    >
                      law
                    </button>
                    <button
                      className="nav-link"
                      id="innertab11"
                      data-bs-toggle="tab"
                      data-bs-target="#inner11"
                      type="button"
                      role="tab"
                      aria-controls="inner11"
                      aria-selected="false"
                    >
                      Health
                    </button>
                    <button
                      className="nav-link"
                      id="innertab12"
                      data-bs-toggle="tab"
                      data-bs-target="#inner12"
                      type="button"
                      role="tab"
                      aria-controls="inner12"
                      aria-selected="false"
                    >
                      Hotel / Travel
                    </button>
                  </div>
                </nav>

                <div className="tab-content child-tab" id="nav-tabContent">
                  <div
                    className="tab-pane fade active show"
                    id="inner11"
                    role="tabpanel"
                    aria-labelledby="inner11"
                  >
                    <div className="grid">
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/60/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/80/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/100/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/120/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Victoria Princes</p>
                          </figcaption>
                        </figure>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade  "
              id="Maininner4"
              role="tabpanel"
              aria-labelledby="innertab4"
            >
              <div className="card ">
                <nav>
                  <div
                    className="nav nav-tabs websiteTabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="innertab4"
                      data-bs-toggle="tab"
                      data-bs-target="#inner1"
                      type="button"
                      role="tab"
                      aria-controls="inner1"
                      aria-selected="true"
                    >
                      Ecommerce
                    </button>
                    <button
                      className="nav-link"
                      id="innertab2"
                      data-bs-toggle="tab"
                      data-bs-target="#inner2"
                      type="button"
                      role="tab"
                      aria-controls="inner2"
                      aria-selected="false"
                    >
                      Corporate
                    </button>
                    <button
                      className="nav-link"
                      id="innertab3"
                      data-bs-toggle="tab"
                      data-bs-target="#inner3"
                      type="button"
                      role="tab"
                      aria-controls="inner3"
                      aria-selected="false"
                    >
                      Educational
                    </button>
                  </div>
                </nav>
                <div className="tab-content child-tab" id="nav-tabContent">
                  <div
                    className="tab-pane fade active show"
                    id="inner11"
                    role="tabpanel"
                    aria-labelledby="inner11"
                  >
                    <div className="grid">
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/60/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/80/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/100/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/120/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Victoria Princes</p>
                          </figcaption>
                        </figure>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade  "
              id="Maininner5"
              role="tabpanel"
              aria-labelledby="innertab5"
            >
              <div className="card ">
                <nav>
                  <div
                    className="nav nav-tabs websiteTabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="innertab5"
                      data-bs-toggle="tab"
                      data-bs-target="#inner1"
                      type="button"
                      role="tab"
                      aria-controls="inner1"
                      aria-selected="true"
                    >
                      Ecommerce
                    </button>
                    <button
                      className="nav-link"
                      id="innertab2"
                      data-bs-toggle="tab"
                      data-bs-target="#inner2"
                      type="button"
                      role="tab"
                      aria-controls="inner2"
                      aria-selected="false"
                    >
                      Corporate
                    </button>
                    <button
                      className="nav-link"
                      id="innertab3"
                      data-bs-toggle="tab"
                      data-bs-target="#inner3"
                      type="button"
                      role="tab"
                      aria-controls="inner3"
                      aria-selected="false"
                    >
                      Educational
                    </button>
                  </div>
                </nav>
                <div className="tab-content child-tab" id="nav-tabContent">
                  <div
                    className="tab-pane fade active show"
                    id="inner11"
                    role="tabpanel"
                    aria-labelledby="inner11"
                  >
                    <div className="grid">
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/60/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/80/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/100/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Princes Victoria</p>
                          </figcaption>
                        </figure>
                      </article>
                      <article className="article">
                        <figure className="article__figure">
                          <img
                            className="article__cover"
                            src="https://picsum.photos/id/120/600/300"
                          />
                          <figcaption className="article__caption">
                            <h2 className="article__title">Card Title</h2>
                            <p className="article__info">Victoria Princes</p>
                          </figcaption>
                        </figure>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* marqueeeee */}

        {/* $(function() {
    $('marquee').mouseover(function() {
        $(this).attr('scrollamount',0);
    }).mouseout(function() {
         $(this).attr('scrollamount',5);
    });
}); */}

        <div className="row">
          <div className="col-md-6">
            <div className="vertical-carousel">
              {/* <Carousel
                axis="vertical"
                infiniteLoop="true"
                verticalSwipe="standard"
                dots="true"
                showArrows="false"
                showIndicators="false"
                labels="false"
              >
                <div className="carousel-card">
                  <h3>This is heading</h3>
                  <h4>
                    this is a large heading hvaing bold text heading hvaing bold
                    text
                  </h4>
                  <button>Book Appoinment</button>
                </div>
                <div className="carousel-card">
                  <h3>This is heading</h3>
                  <h4>
                    this is a large heading hvaing bold text heading hvaing bold
                    text
                  </h4>
                  <button>Book Appoinment</button>
                </div>
                <div className="carousel-card">
                  <h3>This is heading</h3>
                  <h4>
                    this is a large heading hvaing bold text heading hvaing bold
                    text
                  </h4>
                  <button>Book Appoinment</button>
                </div>
                <div className="carousel-card">
                  <h3>This is heading</h3>
                  <h4>
                    this is a large heading hvaing bold text heading hvaing bold
                    text
                  </h4>
                  <button>Book Appoinment</button>
                </div>
              </Carousel> */}
            </div>
          </div>
          <div className="col-md-6">
            <marquee
              behavior="scroll"
              direction="up"
              scrollamount="10"
              loop="1"
            >
              <div className="marqueeMain">
                <h3>This is heading</h3>
                <h4>Sohail Ghafor</h4>
                <p>
                  This text will scroll from bottom to up scroll from bottom to
                  up scroll from bottom to up
                </p>
              </div>

              <div className="marqueeMain">
                <h3>This is heading</h3>
                <h4>Sohail Ghafor</h4>
                <p>
                  This text will scroll from bottom to up scroll from bottom to
                  up scroll from bottom to up
                </p>
              </div>

              <div className="marqueeMain">
                <h3>This is heading</h3>
                <h4>Sohail Ghafor</h4>
                <p>
                  This text will scroll from bottom to up scroll from bottom to
                  up scroll from bottom to up
                </p>
              </div>

              <div className="marqueeMain">
                <h3>This is heading</h3>
                <h4>Sohail Ghafor</h4>
                <p>
                  This text will scroll from bottom to up scroll from bottom to
                  up scroll from bottom to up
                </p>
              </div>
            </marquee>
          </div>
        </div>
        {/* marqueeeee */}
      </Container>

      {/* card with bg */}
      <div className="cardBgMain">
        <div className="cardbg text-center">
          <h3>This is heading</h3>
          <h4>this is a large heading hvaing bold text</h4>
          <button>Book Appoinment</button>
        </div>
      </div>

      {/* card with bg  end */}

      <div className="cardbg text-left">
        <h3>This is heading</h3>
        <h4>this is a large heading hvaing bold text</h4>
        <button>Book Appoinment</button>
      </div>

      {/* card with bg  left endddddd */}

      <section className="colorCards-sec pink">
        <Container>
          <div className="row ">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 p-0 m-0">
                  <div className="colorfullCard">
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                    <h6>This is heading</h6>
                    <p>this is a large heading hvaing bold text</p>
                  </div>
                  <div className="colorfullCard">
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                    <h6>This is heading</h6>
                    <p>this is a large heading hvaing bold text</p>
                  </div>
                </div>
                <div className="col-md-6 p-0 m-0">
                  <div className="colorfullCard">
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                    <h6>This is heading</h6>
                    <p>this is a large heading hvaing bold text</p>
                  </div>
                  <h2 className="absoluteHeading">Packages</h2>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <h2 className="mt-100">
                {" "}
                Lorem ipsum is a placeholder dummy text.{" "}
              </h2>
            </div>
          </div>
        </Container>
      </section>

      <div className="odd-even">
        <section className="gray-sec-img sec-border">
          <Container>
            <div className="text-center">
              <p>This is heading</p>
              <h4>this is a large heading hvaing bold text</h4>
            </div>
            <div className="row ">
              <div className="col-md-8">
                <h3>This is heading</h3>
                <h4>this is a large heading hvaing bold text</h4>
                <p>
                  This text will scroll from bottom to up scroll from bottom to
                  up scroll from bottom to up This text will scroll from bottom
                  to up scroll from bottom to up scroll from bottom to up
                </p>
                <button>Book Appoinment</button>
              </div>

              <div className="col-md-4">
                <img
                  className="little-top"
                  src="https://picsum.photos/id/80/400/300"
                />
              </div>
            </div>
            <div className="row ">
              <div className="col-md-4">
                <img
                  className="little-top"
                  src="https://picsum.photos/id/80/400/300"
                />
              </div>
              <div className="col-md-8">
                <h3>This is heading</h3>
                <h4>this is a large heading hvaing bold text</h4>
                <p>
                  This text will scroll from bottom to up scroll from bottom to
                  up scroll from bottom to up This text will scroll from bottom
                  to up scroll from bottom to up scroll from bottom to up
                </p>
                <button>Book Appoinment</button>
              </div>
            </div>
          </Container>
        </section>

        <section className="gray-sec-img sec-border">
          <Container>
            <div className="text-center">
              <p>This is heading</p>
              <h4>this is a large heading hvaing bold text</h4>
              <div className="row ">
                <div className="col-md-8">
                  <h3>This is heading</h3>
                  <h4>this is a large heading hvaing bold text</h4>
                  <p>
                    This text will scroll from bottom to up scroll from bottom
                    to up scroll from bottom to up This text will scroll from
                    bottom to up scroll from bottom to up scroll from bottom to
                    up
                  </p>
                </div>

                <div className="col-md-4">
                  <img
                    className="little-top"
                    src="https://picsum.photos/id/80/400/300"
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col-md-4">
                  <img
                    className="little-top"
                    src="https://picsum.photos/id/80/400/300"
                  />
                </div>
                <div className="col-md-8">
                  <h3>This is heading</h3>
                  <h4>this is a large heading hvaing bold text</h4>
                  <p>
                    This text will scroll from bottom to up scroll from bottom
                    to up scroll from bottom to up This text will scroll from
                    bottom to up scroll from bottom to up scroll from bottom to
                    up
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>

      {/* Blogs starts */}

      <section className="sec-border">
        <Container>
          <div className="row ">
            <div className="col-md-4">
              <div className="blogs-main">
                <img
                  alt=""
                  className="img-fluid"
                  src="https://picsum.photos/id/80/400/300"
                />
                <h5 className="buttonStyle purple">Ecommerce</h5>
                <h4>this is a large heading hvaing bold text</h4>
                <p>
                  This text will scroll from bottom to up scroll from bottom to
                  up scroll from bottom to up This text will scroll from bottom
                  to up scroll from bottom to up scroll from bottom to up
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blogs-main">
                <img
                  alt=""
                  className="img-fluid"
                  src="https://picsum.photos/id/80/400/300"
                />
                <h5 className="buttonStyle purple">Ecommerce</h5>
                <h4>this is a large heading hvaing bold text</h4>
                <p>
                  This text will scroll from bottom to up scroll from bottom to
                  up scroll from bottom to up This text will scroll from bottom
                  to up scroll from bottom to up scroll from bottom to up
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blogs-main">
                <img
                  alt=""
                  className="img-fluid"
                  src="https://picsum.photos/id/80/400/300"
                />
                <h5 className="buttonStyle purple">Ecommerce</h5>
                <h4>this is a large heading hvaing bold text</h4>
                <p>
                  This text will scroll from bottom to up scroll from bottom to
                  up scroll from bottom to up This text will scroll from bottom
                  to up scroll from bottom to up scroll from bottom to up
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blogs-main">
                <img
                  alt=""
                  className="img-fluid"
                  src="https://picsum.photos/id/80/400/300"
                />
                <h5 className="buttonStyle purple">Ecommerce</h5>
                <h4>this is a large heading hvaing bold text</h4>
                <p>
                  This text will scroll from bottom to up scroll from bottom to
                  up scroll from bottom to up This text will scroll from bottom
                  to up scroll from bottom to up scroll from bottom to up
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blogs-main">
                <img
                  alt=""
                  className="img-fluid"
                  src="https://picsum.photos/id/80/400/300"
                />
                <h5 className="buttonStyle purple">Ecommerce</h5>
                <h4>this is a large heading hvaing bold text</h4>
                <p>
                  This text will scroll from bottom to up scroll from bottom to
                  up scroll from bottom to up This text will scroll from bottom
                  to up scroll from bottom to up scroll from bottom to up
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="sec-border">
        <Container>
          <div className="row ">
            <h2>You might also like</h2>
            <div className="col-md-4">
              <div className="blogs-main">
                <img
                  alt=""
                  className="img-fluid"
                  src="https://picsum.photos/id/80/400/300"
                />
                <h5 className="buttonStyle purple">Ecommerce</h5>
                <h4>this is a large heading hvaing bold text</h4>
                <p>
                  This text will scroll from bottom to up scroll from bottom to
                  up scroll from bottom to up This text will scroll from bottom
                  to up scroll from bottom to up scroll from bottom to up
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blogs-main">
                <img
                  alt=""
                  className="img-fluid"
                  src="https://picsum.photos/id/80/400/300"
                />
                <h5 className="buttonStyle purple">Ecommerce</h5>
                <h4>this is a large heading hvaing bold text</h4>
                <p>
                  This text will scroll from bottom to up scroll from bottom to
                  up scroll from bottom to up This text will scroll from bottom
                  to up scroll from bottom to up scroll from bottom to up
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blogs-main">
                <img
                  alt=""
                  className="img-fluid"
                  src="https://picsum.photos/id/80/400/300"
                />
                <h5 className="buttonStyle purple">Ecommerce</h5>
                <h4>this is a large heading hvaing bold text</h4>
                <p>
                  This text will scroll from bottom to up scroll from bottom to
                  up scroll from bottom to up This text will scroll from bottom
                  to up scroll from bottom to up scroll from bottom to up
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Blogs ends */}

      {/* images with text right and left starts*/}

      <section className="fullWidth-RL sec-border">
        <div className="row ">
          <div className="col-md-6">
            <div className="img-text-RL">
              <h3>API integration</h3>
              <h4>React getting data from API</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              alt=""
              className="img-fluid"
              src="https://picsum.photos/id/50/600/300"
            />
          </div>
        </div>

        <div className="row ">
          <div className="col-md-6">
            <img
              alt=""
              className="img-fluid"
              src="https://picsum.photos/id/20/600/300"
            />
          </div>
          <div className="col-md-6">
            <div className="img-text-RL">
              <h3>API integration</h3>
              <h4>React getting data from API</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-md-6">
            <div className="img-text-RL">
              <h3>API integration</h3>
              <h4>React getting data from API</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              alt=""
              className="img-fluid"
              src="https://picsum.photos/id/10/600/300"
            />
          </div>
        </div>

        <div className="row ">
          <div className="col-md-6">
            <img
              alt=""
              className="img-fluid"
              src="https://picsum.photos/id/8/600/300"
            />
          </div>
          <div className="col-md-6">
            <div className="img-text-RL">
              <h3>API integration</h3>
              <h4>React getting data from API</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* images with text right and left ends */}

      <section className="sec-border">
        <Container>
          <div className="row ">
            <h2>You might also like</h2>
            <div className="col-md-6">
              <div className="blogs-main">
                <div className="row  align-items-center">
                  <div className="col-md-6">
                    <h4>4 ways to Create Mobile Application</h4>
                  </div>
                  <div className="col-md-6">
                    <img
                      alt=""
                      className="img-fluid"
                      src="https://picsum.photos/id/50/400/300"
                    />

                    <h5 className="buttonStyle purple">Ecommerce</h5>
                    <h4>this is a large heading hvaing bold text</h4>
                    <p>
                      This text will scroll from bottom to up scroll from bottom
                      to up scroll from bottom to up This text will scroll from
                      bottom to up scroll from bottom to up scroll from bottom
                      to up
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blogs-main">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src="https://picsum.photos/id/90/400/300"
                />
                <h5 className="buttonStyle purple">Ecommerce</h5>
                <h4>this is a large heading hvaing bold text</h4>
                <p>
                  This text will scroll from bottom to up scroll from bottom to
                  up scroll from bottom to up This text will scroll from bottom
                  to up scroll from bottom to up scroll from bottom to up
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* contact page */}

      <section
        className="mainSec waitingSec contactSec1 con-padding-new"
        style={{ padding: "", margin: "" }}
      >
        <div className="beforeColor">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration={1700}
              >
                <div className="contactLeft">
                  <h5>OUR OFFICES</h5>
                  {/* <h2>react Pakistan (Pvt) Ltd.</h2> */}
                  <p>
                    You get all the smart and unique solutions here at react
                    from web development to graphic designing and from
                    applications development to digital marketing. We bring
                    innovations as our current clients have been positively
                    experiencing our high-powered e-commerce cms which is first
                    in pakistan.
                  </p>
                  <div className="row">
                    <div className="col-sm-6">
                      <img
                        src="https://react.com.pk/filemanager/photos/shares/Page/61921dfdb97ea.png"
                        alt="react Pakistan"
                      />
                      <h5>react Pakistan</h5>
                      <ul
                        className="contactInfo"
                        style={{
                          marginTop: "40px",
                          marginBottom: "1rem",
                          listStyle: "none",
                          padding: "0px",
                        }}
                      >
                        <li style={{ marginBottom: "40px" }}>
                          <span style={{ display: "block" }}>
                            <ul
                              className="contactInfo"
                              style={{
                                marginTop: "40px",
                                marginBottom: "1rem",
                                listStyle: "none",
                                padding: "0px",
                              }}
                            >
                              <li style={{ marginBottom: "40px" }}>
                                <span
                                  style={{
                                    color: "rgb(50, 44, 62)",
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    display: "block",
                                  }}
                                >
                                  HEAD OFFICE KARACHI
                                </span>
                                <font color="#322c3e">
                                  <span style={{ fontSize: "17px" }}>
                                    B 69, Block 18, Gulshan-e-Iqbal, Karachi,
                                    Pakistan
                                  </span>
                                </font>
                                <br />
                              </li>
                            </ul>
                            <ul
                              className="contactInfo"
                              style={{
                                color: "rgb(33, 37, 41)",
                                fontSize: "14px",
                                fontWeight: 400,
                                marginTop: "40px",
                                marginBottom: "1rem",
                                listStyle: "none",
                                padding: "0px",
                              }}
                            >
                              <li
                                style={{
                                  color: "rgb(50, 44, 62)",
                                  marginBottom: "40px",
                                }}
                              >
                                <span
                                  style={{
                                    fontWeight: 700,
                                    display: "block",
                                    fontSize: "20px",
                                  }}
                                >
                                  PHONE
                                </span>
                                (+92) 3403701111
                              </li>
                              <li
                                style={{
                                  color: "rgb(50, 44, 62)",
                                  marginBottom: "40px",
                                }}
                              >
                                <span
                                  style={{
                                    fontWeight: 700,
                                    display: "block",
                                    fontSize: "20px",
                                  }}
                                >
                                  Email
                                </span>
                                <a
                                  href="mailto:info@react.com.pk"
                                  style={{
                                    outlineStyle: "initial",
                                    outlineWidth: "0px",
                                    color: "rgb(50, 44, 62)",
                                    fontSize: "17px",
                                  }}
                                >
                                  info@react.com.pk
                                </a>
                              </li>
                            </ul>
                          </span>
                        </li>
                        <li style={{ marginBottom: "40px" }}>
                          <span
                            style={{
                              color: "rgb(50, 44, 62)",
                              fontWeight: 700,
                              display: "block",
                              fontSize: "20px",
                            }}
                          >
                            HAMSON BRANCH OFFICE
                          </span>
                          <font color="#322c3e">
                            <span style={{ fontSize: "17px" }}>
                              Suite 12, 3rd Floor, Al-Baber Center, F-8 Markaz,
                              Islamabad, Pakistan
                            </span>
                          </font>
                          <br />
                        </li>
                      </ul>
                      <ul
                        className="contactInfo"
                        style={{
                          marginTop: "40px",
                          marginBottom: "1rem",
                          listStyle: "none",
                          padding: "0px",
                          color: "rgb(33, 37, 41)",
                          fontFamily: "",
                        }}
                      >
                        <li
                          style={{
                            color: "rgb(50, 44, 62)",
                            marginBottom: "40px",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: 700,
                              display: "block",
                              fontSize: "20px",
                            }}
                          >
                            PHONE
                          </span>
                          (+92) 3403701111
                        </li>
                        <li
                          style={{
                            color: "rgb(50, 44, 62)",
                            marginBottom: "40px",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: 700,
                              display: "block",
                              fontSize: "20px",
                            }}
                          >
                            Email
                          </span>
                          <a
                            href="mailto:info@react.com.pk"
                            style={{
                              outlineStyle: "initial",
                              outlineWidth: "0px",
                              color: "rgb(50, 44, 62)",
                              fontSize: "17px",
                            }}
                          >
                            info@react.com.pk
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <img
                        src="https://react.com.pk/filemanager/photos/1/609a3d23125e8.png"
                        alt="react Canada"
                      />
                      <h5>react Canada</h5>
                      <ul
                        className="contactInfo"
                        style={{
                          marginTop: "40px",
                          marginBottom: "1rem",
                          listStyle: "none",
                          padding: "0px",
                          color: "rgb(33, 37, 41)",
                          fontFamily: "",
                        }}
                      >
                        <li
                          style={{
                            color: "rgb(50, 44, 62)",
                            marginBottom: "40px",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: 700,
                              display: "block",
                              fontSize: "20px",
                            }}
                          >
                            BRANCH OFFICE CANADA
                          </span>
                          <span style={{ fontSize: "17px" }}>
                            798 Millworks Crescent, Mississauga, Ontario, L5V
                            OB9,&nbsp;
                          </span>
                        </li>
                        <li
                          style={{
                            color: "rgb(50, 44, 62)",
                            marginBottom: "40px",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: 700,
                              display: "block",
                              fontSize: "20px",
                            }}
                          >
                            PHONE
                          </span>
                          <span style={{ fontSize: "17px" }}>
                            <a href="tel:+16477861349">+16477861349</a>
                          </span>
                        </li>
                        <li
                          style={{
                            color: "rgb(50, 44, 62)",
                            marginBottom: "40px",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: 700,
                              display: "block",
                              fontSize: "20px",
                            }}
                          >
                            Email
                          </span>
                          <a
                            href="mailto:info@react.com.pk"
                            style={{
                              color: "rgb(50, 44, 62)",
                              fontSize: "17px",
                            }}
                          >
                            info@react.com.pk
                          </a>
                        </li>
                        <li
                          style={{
                            color: "rgb(50, 44, 62)",
                            marginBottom: "40px",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: 700,
                              display: "block",
                              fontSize: "20px",
                            }}
                          >
                            BRANCH OFFICE KSA
                          </span>
                          <span style={{ fontSize: "17px" }}>
                            798 Millworks Crescent, Mississauga, Ontario, L5V
                            OB9,&nbsp;
                          </span>
                        </li>
                        <li
                          style={{
                            color: "rgb(50, 44, 62)",
                            marginBottom: "40px",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: 700,
                              display: "block",
                              fontSize: "20px",
                            }}
                          >
                            PHONE
                          </span>
                          <span style={{ fontSize: "17px" }}>
                            <a href="tel:+16477861349">+</a>966564272797
                          </span>
                        </li>
                        <li
                          style={{
                            color: "rgb(50, 44, 62)",
                            marginBottom: "40px",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: 700,
                              display: "block",
                              fontSize: "20px",
                            }}
                          >
                            Email
                          </span>
                          <a
                            href="mailto:info@react.com.pk"
                            style={{
                              color: "rgb(50, 44, 62)",
                              fontSize: "17px",
                            }}
                          >
                            info@react.com.pk
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration={1700}
              >
                <div className="contactRight">
                  <h5>STAY CONNECTED WITH react sarawaqar</h5>
                  <h3>Are you facing any problem?</h3>
                  <h2>We are always there to solve it.</h2>
                  <div className="formHeading contact-field newContact">
                    <form
                      action="https://react.com.pk/send-mail"
                      method="POST"
                      id="frmContactUs1"
                      className="form_log"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="tDLIovFiQIDxZZ0DAet7kgKqySdX0yILB9zmsAWG"
                      />
                      <input type="hidden" defaultValue={1} name="form_id" />
                      <input
                        type="hidden"
                        defaultValue="https://react.com.pk/contact-us"
                        name="page_url"
                      />
                      <div className="row">
                        <div className="col-sm-6 mb-4">
                          <label htmlFor>Name</label>
                          <input
                            type="text"
                            name="name"
                            defaultValue
                            required
                            autoComplete='"false"'
                            className="form-control"
                          />
                        </div>
                        <div className="col-sm-6 mb-4">
                          <label htmlFor>Email</label>
                          <input
                            type="email"
                            name="email"
                            defaultValue
                            required
                            autoComplete='"false"'
                            className="getEmailAddress form-control email-check"
                          />
                        </div>
                        <div className="col-sm-6 mb-4">
                          <div className="input-group AllCountry">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                style={{
                                  paddingLeft: ".5rem",
                                  paddingRight: ".5rem",
                                  backgroundColor: "transparent",
                                  border: "0px",
                                  borderBottom: "1px solid #787088",
                                  borderRadius: "0px",
                                }}
                              >
                                <div className="iti__flag-box">
                                  <div
                                    id="FlagImage"
                                    className="iti__flag iti__pk"
                                  />
                                </div>
                                <select
                                  className="form-control js-example-templating select2-hidden-accessible"
                                  name="code"
                                  data-select2-id={1}
                                  tabIndex={-1}
                                  aria-hidden="true"
                                >
                                  <option value={93}>+ 93</option>
                                  <option value={44}>+ 44</option>
                                  <option value={355}>+ 355</option>
                                  <option value={213}>+ 213</option>
                                  <option value={1}>+ 1</option>
                                  <option value={376}>+ 376</option>
                                  <option value={244}>+ 244</option>
                                  <option value={1}>+ 1</option>
                                  <option value={1}>+ 1</option>
                                  <option value={54}>+ 54</option>
                                  <option value={374}>+ 374</option>
                                  <option value={297}>+ 297</option>
                                  <option value={247}>+ 247</option>
                                  <option value={61}>+ 61</option>
                                  <option value={43}>+ 43</option>
                                  <option value={994}>+ 994</option>
                                  <option value={1}>+ 1</option>
                                  <option value={973}>+ 973</option>
                                  <option value={880}>+ 880</option>
                                  <option value={1}>+ 1</option>
                                  <option value={375}>+ 375</option>
                                  <option value={32}>+ 32</option>
                                  <option value={501}>+ 501</option>
                                  <option value={229}>+ 229</option>
                                  <option value={1}>+ 1</option>
                                  <option value={975}>+ 975</option>
                                  <option value={591}>+ 591</option>
                                  <option value={387}>+ 387</option>
                                  <option value={267}>+ 267</option>
                                  <option value={55}>+ 55</option>
                                  <option value={246}>+ 246</option>
                                  <option value={1}>+ 1</option>
                                  <option value={673}>+ 673</option>
                                  <option value={359}>+ 359</option>
                                  <option value={226}>+ 226</option>
                                  <option value={257}>+ 257</option>
                                  <option value={855}>+ 855</option>
                                  <option value={237}>+ 237</option>
                                  <option value={1}>+ 1</option>
                                  <option value={238}>+ 238</option>
                                  <option value={599}>+ 599</option>
                                  <option value={1}>+ 1</option>
                                  <option value={236}>+ 236</option>
                                  <option value={235}>+ 235</option>
                                  <option value={56}>+ 56</option>
                                  <option value={86}>+ 86</option>
                                  <option value={61}>+ 61</option>
                                  <option value={61}>+ 61</option>
                                  <option value={57}>+ 57</option>
                                  <option value={269}>+ 269</option>
                                  <option value={243}>+ 243</option>
                                  <option value={242}>+ 242</option>
                                  <option value={682}>+ 682</option>
                                  <option value={506}>+ 506</option>
                                  <option value={225}>+ 225</option>
                                  <option value={385}>+ 385</option>
                                  <option value={53}>+ 53</option>
                                  <option value={599}>+ 599</option>
                                  <option value={357}>+ 357</option>
                                  <option value={420}>+ 420</option>
                                  <option value={45}>+ 45</option>
                                  <option value={253}>+ 253</option>
                                  <option value={1}>+ 1</option>
                                  <option value={1}>+ 1</option>
                                  <option value={593}>+ 593</option>
                                  <option value={20}>+ 20</option>
                                  <option value={503}>+ 503</option>
                                  <option value={240}>+ 240</option>
                                  <option value={291}>+ 291</option>
                                  <option value={372}>+ 372</option>
                                  <option value={268}>+ 268</option>
                                  <option value={251}>+ 251</option>
                                  <option value={500}>+ 500</option>
                                  <option value={298}>+ 298</option>
                                  <option value={679}>+ 679</option>
                                  <option value={358}>+ 358</option>
                                  <option value={33}>+ 33</option>
                                  <option value={594}>+ 594</option>
                                  <option value={689}>+ 689</option>
                                  <option value={241}>+ 241</option>
                                  <option value={220}>+ 220</option>
                                  <option value={995}>+ 995</option>
                                  <option value={49}>+ 49</option>
                                  <option value={233}>+ 233</option>
                                  <option value={350}>+ 350</option>
                                  <option value={30}>+ 30</option>
                                  <option value={299}>+ 299</option>
                                  <option value={1}>+ 1</option>
                                  <option value={590}>+ 590</option>
                                  <option value={1}>+ 1</option>
                                  <option value={502}>+ 502</option>
                                  <option value={44}>+ 44</option>
                                  <option value={224}>+ 224</option>
                                  <option value={245}>+ 245</option>
                                  <option value={592}>+ 592</option>
                                  <option value={509}>+ 509</option>
                                  <option value={504}>+ 504</option>
                                  <option value={852}>+ 852</option>
                                  <option value={36}>+ 36</option>
                                  <option value={354}>+ 354</option>
                                  <option value={91}>+ 91</option>
                                  <option value={62}>+ 62</option>
                                  <option value={98}>+ 98</option>
                                  <option value={964}>+ 964</option>
                                  <option value={353}>+ 353</option>
                                  <option value={44}>+ 44</option>
                                  <option value={972}>+ 972</option>
                                  <option value={39}>+ 39</option>
                                  <option value={1}>+ 1</option>
                                  <option value={81}>+ 81</option>
                                  <option value={44}>+ 44</option>
                                  <option value={962}>+ 962</option>
                                  <option value={7}>+ 7</option>
                                  <option value={254}>+ 254</option>
                                  <option value={686}>+ 686</option>
                                  <option value={383}>+ 383</option>
                                  <option value={965}>+ 965</option>
                                  <option value={996}>+ 996</option>
                                  <option value={856}>+ 856</option>
                                  <option value={371}>+ 371</option>
                                  <option value={961}>+ 961</option>
                                  <option value={266}>+ 266</option>
                                  <option value={231}>+ 231</option>
                                  <option value={218}>+ 218</option>
                                  <option value={423}>+ 423</option>
                                  <option value={370}>+ 370</option>
                                  <option value={352}>+ 352</option>
                                  <option value={853}>+ 853</option>
                                  <option value={389}>+ 389</option>
                                  <option value={261}>+ 261</option>
                                  <option value={265}>+ 265</option>
                                  <option value={60}>+ 60</option>
                                  <option value={960}>+ 960</option>
                                  <option value={223}>+ 223</option>
                                  <option value={356}>+ 356</option>
                                  <option value={692}>+ 692</option>
                                  <option value={596}>+ 596</option>
                                  <option value={222}>+ 222</option>
                                  <option value={230}>+ 230</option>
                                  <option value={262}>+ 262</option>
                                  <option value={52}>+ 52</option>
                                  <option value={691}>+ 691</option>
                                  <option value={373}>+ 373</option>
                                  <option value={377}>+ 377</option>
                                  <option value={976}>+ 976</option>
                                  <option value={382}>+ 382</option>
                                  <option value={1}>+ 1</option>
                                  <option value={212}>+ 212</option>
                                  <option value={258}>+ 258</option>
                                  <option value={95}>+ 95</option>
                                  <option value={264}>+ 264</option>
                                  <option value={674}>+ 674</option>
                                  <option value={977}>+ 977</option>
                                  <option value={31}>+ 31</option>
                                  <option value={687}>+ 687</option>
                                  <option value={64}>+ 64</option>
                                  <option value={505}>+ 505</option>
                                  <option value={227}>+ 227</option>
                                  <option value={234}>+ 234</option>
                                  <option value={683}>+ 683</option>
                                  <option value={672}>+ 672</option>
                                  <option value={850}>+ 850</option>
                                  <option value={1}>+ 1</option>
                                  <option value={47}>+ 47</option>
                                  <option value={968}>+ 968</option>
                                  <option value={92} data-select2-id={3}>
                                    + 92
                                  </option>
                                  <option value={680}>+ 680</option>
                                  <option value={970}>+ 970</option>
                                  <option value={507}>+ 507</option>
                                  <option value={675}>+ 675</option>
                                  <option value={595}>+ 595</option>
                                  <option value={51}>+ 51</option>
                                  <option value={63}>+ 63</option>
                                  <option value={48}>+ 48</option>
                                  <option value={351}>+ 351</option>
                                  <option value={1}>+ 1</option>
                                  <option value={974}>+ 974</option>
                                  <option value={262}>+ 262</option>
                                  <option value={40}>+ 40</option>
                                  <option value={7}>+ 7</option>
                                  <option value={250}>+ 250</option>
                                  <option value={590}>+ 590</option>
                                  <option value={290}>+ 290</option>
                                  <option value={1}>+ 1</option>
                                  <option value={1}>+ 1</option>
                                  <option value={590}>+ 590</option>
                                  <option value={508}>+ 508</option>
                                  <option value={1}>+ 1</option>
                                  <option value={685}>+ 685</option>
                                  <option value={378}>+ 378</option>
                                  <option value={239}>+ 239</option>
                                  <option value={966}>+ 966</option>
                                  <option value={221}>+ 221</option>
                                  <option value={381}>+ 381</option>
                                  <option value={248}>+ 248</option>
                                  <option value={232}>+ 232</option>
                                  <option value={65}>+ 65</option>
                                  <option value={1}>+ 1</option>
                                  <option value={421}>+ 421</option>
                                  <option value={386}>+ 386</option>
                                  <option value={677}>+ 677</option>
                                  <option value={252}>+ 252</option>
                                  <option value={27}>+ 27</option>
                                  <option value={82}>+ 82</option>
                                  <option value={211}>+ 211</option>
                                  <option value={34}>+ 34</option>
                                  <option value={94}>+ 94</option>
                                  <option value={249}>+ 249</option>
                                  <option value={597}>+ 597</option>
                                  <option value={47}>+ 47</option>
                                  <option value={46}>+ 46</option>
                                  <option value={41}>+ 41</option>
                                  <option value={963}>+ 963</option>
                                  <option value={886}>+ 886</option>
                                  <option value={992}>+ 992</option>
                                  <option value={255}>+ 255</option>
                                  <option value={66}>+ 66</option>
                                  <option value={670}>+ 670</option>
                                  <option value={228}>+ 228</option>
                                  <option value={690}>+ 690</option>
                                  <option value={676}>+ 676</option>
                                  <option value={1}>+ 1</option>
                                  <option value={216}>+ 216</option>
                                  <option value={90}>+ 90</option>
                                  <option value={993}>+ 993</option>
                                  <option value={1}>+ 1</option>
                                  <option value={688}>+ 688</option>
                                  <option value={1}>+ 1</option>
                                  <option value={256}>+ 256</option>
                                  <option value={380}>+ 380</option>
                                  <option value={971}>+ 971</option>
                                  <option value={1}>+ 1</option>
                                  <option value={598}>+ 598</option>
                                  <option value={998}>+ 998</option>
                                  <option value={678}>+ 678</option>
                                  <option value={39}>+ 39</option>
                                  <option value={58}>+ 58</option>
                                  <option value={84}>+ 84</option>
                                  <option value={681}>+ 681</option>
                                  <option value={212}>+ 212</option>
                                  <option value={967}>+ 967</option>
                                  <option value={260}>+ 260</option>
                                  <option value={263}>+ 263</option>
                                  <option value={358}>+ 358</option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--default"
                                  dir="ltr"
                                  data-select2-id={2}
                                  style={{ width: "100%" }}
                                >
                                  <span className="selection">
                                    <span
                                      className="select2-selection select2-selection--single error"
                                      role="combobox"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      tabIndex={0}
                                      aria-disabled="false"
                                      aria-labelledby="select2-code-1g-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-code-1g-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="
                                          + 92
                                          "
                                      >
                                        + 92
                                      </span>
                                      <span
                                        className="select2-selection__arrow"
                                        role="presentation"
                                      >
                                        <b role="presentation" />
                                      </span>
                                    </span>
                                  </span>
                                  <span
                                    className="dropdown-wrapper"
                                    aria-hidden="true"
                                  />
                                </span>
                              </span>
                            </div>
                            <input
                              type="number"
                              className="form-control"
                              name="mobile"
                              placeholder="Mobile Number"
                              style={{ width: "60%" }}
                              required
                              minLength={9}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                          <label htmlFor>Subject</label>
                          <input
                            type="text"
                            name="subject"
                            defaultValue
                            required
                            autoComplete='"false"'
                            className="form-control"
                          />
                        </div>
                        <div className="col-sm-12 mb-4">
                          <label htmlFor>Contact Message</label>
                          <textarea
                            className="form-control"
                            name="contact_message"
                            required
                            autoComplete='"false"'
                            rows={5}
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-sm-12 mb-4">
                          <label htmlFor />
                          <input
                            type="hidden"
                            name="simple-captcha-ans"
                            defaultValue={4}
                          />
                          <input
                            className="form-control"
                            type="number"
                            name="simple-captcha"
                            placeholder="3 + 1 = ?"
                            defaultValue
                            required
                            autoComplete='"false"'
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group text-left">
                            <button type="submit" id="ContactForm">
                              <span className="btn-text">SEND</span>
                              <span
                                className="loader"
                                role="status"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact page */}

      <Container>
        <div class="commentCustom bootdey">
          <div class="col-md-12 bootstrap snippets">
            <div class="panel">
              <div class="panel-body">
                <div class="media-block">
                  <a class="media-left" href="#">
                    <img
                      class="img-circle img-sm"
                      alt="Profile Picture"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                  </a>
                  <div class="media-body">
                    <div class="mar-btm">
                      <a
                        href="#"
                        class="btn-link text-semibold media-heading box-inline"
                      >
                        Lisa D.
                      </a>
                      <p class="text-muted text-sm">
                        <i class="fa fa-mobile fa-lg"></i> - From Mobile - 11
                        min ago
                      </p>
                    </div>
                    <p>
                      consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam erat
                      volutpat. Ut wisi enim ad minim veniam, quis nostrud
                      exerci tation ullamcorper suscipit lobortis nisl ut
                      aliquip ex ea commodo consequat.
                    </p>
                    <div class="pad-ver">
                      <div class="btn-group">
                        <a
                          class="btn btn-sm btn-default btn-hover-success"
                          href="#"
                        >
                          <i class="fa fa-thumbs-up"></i>
                        </a>
                        <a
                          class="btn btn-sm btn-default btn-hover-danger"
                          href="#"
                        >
                          <i class="fa fa-thumbs-down"></i>
                        </a>
                      </div>
                      <a
                        class="commentBtn"
                        href="#"
                      >
                        Comment
                      </a>
                    </div>
                    <hr />

                    <div>
                      <div class="media-block">
                        <a class="media-left" href="#">
                          <img
                            class="img-circle img-sm"
                            alt="Profile Picture"
                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          />
                        </a>
                        <div class="media-body">
                          <div class="mar-btm">
                            <a
                              href="#"
                              class="btn-link text-semibold media-heading box-inline"
                            >
                              Bobby Marz
                            </a>
                            <p class="text-muted text-sm">
                              <i class="fa fa-mobile fa-lg"></i> - From Mobile -
                              7 min ago
                            </p>
                          </div>
                          <p>
                            Sed diam nonummy nibh euismod tincidunt ut laoreet
                            dolore magna aliquam erat volutpat. Ut wisi enim ad
                            minim veniam, quis nostrud exerci tation ullamcorper
                            suscipit lobortis nisl ut aliquip ex ea commodo
                            consequat.
                          </p>
                          <div class="pad-ver">
                            <div class="btn-group">
                              <a
                                class="btn btn-sm btn-default btn-hover-success active"
                                href="#"
                              >
                                <i class="fa fa-thumbs-up"></i> You Like it
                              </a>
                              <a
                                class="btn btn-sm btn-default btn-hover-danger"
                                href="#"
                              >
                                <i class="fa fa-thumbs-down"></i>
                              </a>
                            </div>
                            <a
                              class="commentBtn"
                              href="#"
                            >
                              Comment
                            </a>
                          </div>
                          <hr />
                        </div>
                      </div>

                      <div class="media-block">
                        <a class="media-left" href="#">
                          <img
                            class="img-circle img-sm"
                            alt="Profile Picture"
                            src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          />
                        </a>
                        <div class="media-body">
                          <div class="mar-btm">
                            <a
                              href="#"
                              class="btn-link text-semibold media-heading box-inline"
                            >
                              Lucy Moon
                            </a>
                            <p class="text-muted text-sm">
                              <i class="fa fa-globe fa-lg"></i> - From Web - 2
                              min ago
                            </p>
                          </div>
                          <p>
                            Duis autem vel eum iriure dolor in hendrerit in
                            vulputate ?
                          </p>
                          <div class="pad-ver">
                            <div class="btn-group">
                              <a
                                class="btn btn-sm btn-default btn-hover-success"
                                href="#"
                              >
                                <i class="fa fa-thumbs-up"></i>
                              </a>
                              <a
                                class="btn btn-sm btn-default btn-hover-danger"
                                href="#"
                              >
                                <i class="fa fa-thumbs-down"></i>
                              </a>
                            </div>
                            <a
                              class="commentBtn"
                              href="#"
                            >
                              Comment
                            </a>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="media-block pad-all">
                  <a class="media-left" href="#">
                    <img
                      class="img-circle img-sm"
                      alt="Profile Picture"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    />
                  </a>
                  <div class="media-body">
                    <div class="mar-btm">
                      <a
                        href="#"
                        class="btn-link text-semibold media-heading box-inline"
                      >
                        John Doe
                      </a>
                      <p class="text-muted text-sm">
                        <i class="fa fa-mobile fa-lg"></i> - From Mobile - 11
                        min ago
                      </p>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <img
                      class="img-responsive thumbnail"
                      src="https://www.bootdey.com/image/400x300"
                      alt="Image"
                    />
                    <div class="pad-ver">
                      <span class="tag tag-sm">
                        <i class="fa fa-heart text-danger"></i> 250 Likes
                      </span>
                      <div class="btn-group">
                        <a
                          class="btn btn-sm btn-default btn-hover-success"
                          href="#"
                        >
                          <i class="fa fa-thumbs-up"></i>
                        </a>
                        <a
                          class="btn btn-sm btn-default btn-hover-danger"
                          href="#"
                        >
                          <i class="fa fa-thumbs-down"></i>
                        </a>
                      </div>
                      <a
                        class="commentBtn"
                        href="#"
                      >
                        Comment
                      </a>
                    </div>
                    <hr />

                    <div>
                      <div class="media-block pad-all">
                        <a class="media-left" href="#">
                          <img
                            class="img-circle img-sm"
                            alt="Profile Picture"
                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          />
                        </a>
                        <div class="media-body">
                          <div class="mar-btm">
                            <a
                              href="#"
                              class="btn-link text-semibold media-heading box-inline"
                            >
                              Maria Leanz
                            </a>
                            <p class="text-muted text-sm">
                              <i class="fa fa-globe fa-lg"></i> - From Web - 2
                              min ago
                            </p>
                          </div>
                          <p>
                            Duis autem vel eum iriure dolor in hendrerit in
                            vulputate ?
                          </p>
                          <div>
                            <div class="btn-group">
                              <a
                                class="btn btn-sm btn-default btn-hover-success"
                                href="#"
                              >
                                <i class="fa fa-thumbs-up"></i>
                              </a>
                              <a
                                class="btn btn-sm btn-default btn-hover-danger"
                                href="#"
                              >
                                <i class="fa fa-thumbs-down"></i>
                              </a>
                            </div>
                            <a
                              class="commentBtn"
                              href="#"
                            >
                              Comment
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <form class="form-block">
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group fl_icon">
                      <div class="icon">
                        <i class="fa fa-user"></i>
                      </div>
                      <input
                        class="form-input"
                        type="text"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 fl_icon">
                    <div class="form-group fl_icon">
                      <div class="icon">
                        <i class="fa fa-envelope-o"></i>
                      </div>
                      <input
                        class="form-input"
                        type="text"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="form-group">
                      <textarea
                        class="form-input"
                        required=""
                        placeholder="Your text"
                      ></textarea>
                    </div>
                  </div>
                  <a class="btn btn-primary pull-right">submit</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Index;
