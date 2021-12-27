import React from "react";

function Boende() {
  return (
    <div className="pagewrapper">
      <h1 className="headline">Boende i Ludvika</h1>
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col imageCol">
            <div className="images">
              <img src="/stadshotell.jpeg" alt="img of hotel"></img>
            </div>
          </div>
          <div className="col mt-2">
            <h3>Ludvika Stadshotell</h3>
            <p>
              Hitta på kartan:{" "}
              <a
                href="https://www.google.com/maps/place/Ludvika+Stadshotell/@60.1501415,15.1843258,17z/data=!3m1!4b1!4m8!3m7!1s0x465d9eea8efb581b:0x78732170fa32ece7!5m2!4m1!1i2!8m2!3d60.1501415!4d15.1865145"
                target="_blank"
                rel="noreferrer"
              >
                Carlavägen 7
              </a>
            </p>
            <p>
              Bokning:{" "}
              <a
                href="https://ludvikastadshotell.se/"
                target="_blank"
                rel="noreferrer"
              >
                https://ludvikastadshotell.se/
              </a>{" "}
              eller ring på tel. 0240-13550
            </p>
            <p>
              Rabatt: Boka på hemsidan/telefon och ange{" "}
              <span style={{ fontWeight: "500" }}>”Linn 50år”</span>. Dubbelrum
              950kr, enkelrum 850kr <br></br> Frukost och fri entrè till Gymmet
              i Ludvika ingår.
              <br></br>
              <span style={{ fontWeight: "500" }}>
                Obs! boka ej genom extern hotellsida.
              </span>
            </p>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col imageCol">
            <div className="images">
              <img src="/grandhotel.jpeg" alt="img of hotel"></img>
            </div>
          </div>
          <div className="col mt-2">
            <h3>Best Western</h3>
            <p>
              Hitta på kartan:{" "}
              <a
                href="https://www.google.com/maps/place/BEST+WESTERN+Grand+Hotel+Elektra/@60.1509433,15.1844279,17z/data=!4m16!1m7!3m6!1s0x465d9eea943136c9:0x2dd416f44e8773f4!2sEriksgatan+6,+771+31+Ludvika!3b1!8m2!3d60.1509433!4d15.1866166!3m7!1s0x465d9eea95d9c603:0x5aaefc651e933221!5m2!4m1!1i2!8m2!3d60.1509412!4d15.1867478"
                target="_blank"
                rel="noreferrer"
              >
                Eriksgatan 6
              </a>
            </p>
            <p>
              Bokning:{" "}
              <a
                href="https://www.bestwestern.se/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.bestwestern.se/
              </a>
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col imageCol">
            <div className="images">
              <img src="/easyliving.jpeg" alt="img of hotel"></img>
            </div>
          </div>
          <div className="col mt-2">
            <h3>Easy Living (lägenhetshotell)</h3>
            <p>
              Hitta på kartan:{" "}
              <a
                href="https://www.google.com/maps/place/Easy+Living/@60.1413638,15.1772943,17z/data=!4m13!1m7!3m6!1s0x465d9ee7decf13fb:0x8701c24c3fd75dbe!2sValhallav%C3%A4gen+15,+771+33+Ludvika!3b1!8m2!3d60.1413638!4d15.179483!3m4!1s0x465d9ec5358ebf0d:0x5a14e7f145093f40!8m2!3d60.1413329!4d15.1795072"
                target="_blank"
                rel="noreferrer"
              >
                Valhallavägen 15
              </a>
            </p>
            <p>
              Bokning:{" "}
              <a
                href="https://easylivinghotell.se/"
                target="_blank"
                rel="noreferrer"
              >
                https://easylivinghotell.se/
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boende;
