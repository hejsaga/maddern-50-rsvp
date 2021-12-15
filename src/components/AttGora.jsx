import React from "react";

function AttGora() {
  return (
    <div className="pagewrapper">
      <h1 className="headline">Om du stannar i Ludvika hela helgen</h1>

      <div className="container-fluid">
        <div className="row mb-1">
          <div className="col imageCol">
            <div className="images">
              <img src="/vandra.jpeg" alt="img of activity"></img>
            </div>
          </div>
          <div className="col mt-1">
            <h4>Golf: Hagge</h4>
            <p>
              Golfbana (prisad som Sveriges bästa golfanläggning av Golfhäftet
              Trophy’s medlemmar).
            </p>

            <h4>Cykling</h4>
            <p>
              109 km cykelvägar runt kommunen. I Säfsen finns 350 km
              mountainbikeleder i olika svårighetsgrad och downhill-cykling,
              Ludvikaturen 100 km runt byarna.
            </p>

            <h4>Hantverk: PärleMor</h4>
            <p>
              Kurser i smyckestillverkning, silverlera, glas, tenntråd och olika
              tekniker i småpärlor.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col imageCol">
            <div className="images">
              <img src="/paddling.jpeg" alt="img of activity"></img>
            </div>
          </div>
          <div className="col mt-1">
            <h4>Fiske</h4>
            <p>365 sjöar i kommunen!</p>

            <h4>Promenad: Saxdalen</h4>
            <p>
              Ljungåsleden 12 km, Leden följer den gamla vägen mot
              Saxbergsgruvan samt många vandringsleder.
            </p>

            <h4>Kultur</h4>
            <p>
              Kulturvandring Grängesbergs gruvområde. Cassels Konserthus:
              Lokmuseet, Gruvcentrum Mojsen, Motor &amp; Nostalgimuseum.
              Finngammelgården Skattlösberg, guidade visningar.
            </p>
          </div>
        </div>

        <div className="mb-5">
          <h3>Övriga förslag</h3>
          <p>Bowling, GoCart, Paddlarklubb, Segelflygning, minigolf.</p>
          <a
            href="https://www.visitdalarna.se/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.visitdalarna.se/
          </a>
        </div>
      </div>
    </div>
  );
}

export default AttGora;
