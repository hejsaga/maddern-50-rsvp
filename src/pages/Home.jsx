import React from "react";
import Clock from "../components/Clock";
import Media from "react-media";

function Home() {
  let deadline = "may, 28, 2022";

  return (
    <>
      <Media
        queries={{
          small: "(max-width: 999px)",
          large: "(min-width: 999px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <>
                <div className="home">
                  <div className="bgwrapper">
                    <h1
                      style={{
                        fontSize: "2em",
                      }}
                    >
                      Linn Maddern's
                    </h1>

                    <div className="h1th">
                      <h1
                        style={{
                          fontSize: "4.8em",
                          color: "orange",
                        }}
                      >
                        50
                      </h1>

                      <h1
                        className="th"
                        style={{
                          fontSize: "4.8em",
                          textIndent: "0.2em",
                          color: "orange",
                        }}
                      >
                        th
                      </h1>
                    </div>

                    <h1
                      style={{
                        fontSize: "2.5em",
                        fontWeight: "100",
                      }}
                    >
                      anniversary
                    </h1>

                    <h2
                      style={{
                        fontSize: "3.2em",
                        fontWeight: "800",
                      }}
                    >
                      28.05.22
                    </h2>
                  </div>

                  <div className="clockcontainer">
                    <Clock deadline={deadline} />
                  </div>
                </div>
              </>
            )}
            {matches.large && (
              <>
                <div className="home">
                  <div className="bgwrapper">
                    <h1
                      style={{
                        fontSize: "3em",
                      }}
                    >
                      Linn Maddern's
                    </h1>

                    <div className="h1th">
                      <h1
                        style={{
                          fontSize: "7em",
                          letterSpacing: "0.45em",
                          textIndent: "0.5em",
                          color: "orange",
                        }}
                      >
                        50
                      </h1>
                      <h1
                        className="th"
                        style={{
                          fontSize: "7em",
                          letterSpacing: "0.45em",
                          textIndent: "0.3em",
                          color: "orange",
                        }}
                      >
                        th
                      </h1>
                    </div>

                    <h1
                      style={{
                        fontSize: "3em",
                        fontWeight: "100",
                        letterSpacing: "0.18em",
                        textIndent: "0.3em",
                      }}
                    >
                      anniversary
                    </h1>

                    <h2
                      style={{
                        fontSize: "4.5em",
                        fontWeight: "800",
                        letterSpacing: "0.31em",
                        textIndent: "0.4em",
                      }}
                    >
                      28.05.22
                    </h2>
                  </div>

                  <div className="clockcontainer">
                    <Clock deadline={deadline} />
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
}

export default Home;
