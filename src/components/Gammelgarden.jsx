import React from "react";

function Gammelgarden() {
  return (
    <div className="pagewrapper">
      <h1 className="headline">Ludvika Gammelgård</h1>
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col imageCol">
            <div className="ggimage">
              <img
                className="rounded"
                src="/gammelgarden3.jpeg"
                alt="img of gammelgarden"
              ></img>
            </div>
          </div>
          <div className="col mt-2">
            <h1>
              Här finner du bland annat ett bergsmansmuseum, ett gruvmuseum och
              ett mineralmuseum.
            </h1>
            <ul>
              <li>Under sommarmånaderna finns kaniner, får och höns.</li>
              <li>
                Föreningens museum har cirka 4 000 katalogiserade föremål.
              </li>
              <li>
                Föreningens bibliotek innehåller cirka 3 000 böcker och andra
                artiklar.
              </li>
            </ul>

            <p style={{ textAlign: "justify" }}>
              På sommarhalvåret har caféet öppet med hembakt bröd, loppmarknad
              anordnarnas varje lördag, konserter, filmvisning, teater och
              utomhus yoga samsas med midsommarfirande, Dan Andersson- och
              knivveckan mm.
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col mt-2">
            <h3>Bergsmansgården</h3>

            <p style={{ textAlign: "justify" }}>
              En släktgård på ursprunglig plats, dokumenterad sedan 1500-talet.
              Ovanlig därför att den ej har övervåning. Från början var detta
              två timmerstugor som låg mycket nära varandra. Den östra stugan
              uppfördes 1696. Vid ett arvsskifte några år efter byggdes den
              västra stugan till den andra brodern. Den har två kök för två
              familjer, med välbevarade bergsmansinteriörer. Föreningen ansökte
              om att kulturminnesförklara Bergsmansgården med 9 uthus år 1997
              och de blev kulturminnesförklarade av länsstyrelsen 2007.
            </p>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col mt-2">
            <h3>Gästis</h3>
            <p style={{ textAlign: "justify" }}>
              Vår pampiga gästgivaregård från 1850-talet stod tidigare en mil
              söderut efter den gamla backiga landsvägen mot Närke, i Hällsjön.
              När det på 1870-talet byggdes järnväg till Ludvika via Grängesberg
              dog landsvägstrafiken och därmed gästgiveriets verksamhet ut.
              Huset flyttades hit 1948.
            </p>
          </div>
          <div className="col imageCol">
            <div className="ggimages">
              <img
                className="rounded"
                src="/gammelgarden1.jpeg"
                alt="img of gammelgarden"
              ></img>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col imageCol">
            <div className="ggimages">
              <img
                src="https://bilder.hembygd.se/ludvika/files/2015/01/Vals-Pelles-640x480.jpg?w=1024&fbclid=IwAR11cUjV63Wh2xBuIsgrRHCgVuxcobhzS-xuE85h95jaOi8QlKFKdcxVwek"
                alt="img of gammelgarden"
                style={{ borderRadius: "4px" }}
              ></img>
            </div>
          </div>
          <div className="col mt-2">
            <h3>Vals-Pelles Loftbod</h3>
            <p style={{ textAlign: "justify" }}>
              Vals-Pelles loftbod flyttades hit 1937 från en grannfastighet i
              Marnäs. Där hade den kring mitten av 1800-talet fungerat som
              Ludvikas första posthus.
            </p>
            <p style={{ textAlign: "justify" }}>
              I Örtagården finns kryddväxter, medicinalväxter och
              prydnadsväxter, både perenna och ettåriga. Växterna är av gammalt
              ursprung, ibland från Finnmarken.
            </p>
          </div>
        </div>

        <div className="row mb-1">
          <div className="col mt-2">
            <p style={{ textAlign: "justify" }}>
              Friluftsmuseum med gruvbyggnader och maskiner i trä, hitflyttade
              från nedlagda gruvor i trakten. Bergslagens Mineralmuseum har 1
              300 vackra och ovanliga stenar från i första hand Norden.
            </p>

            <p style={{ textAlign: "justify" }}>
              Marnäs-Posten – Ludvika Gammelgårds Nyheter – utgavs först till
              hembygdsfesten 1928, 1930 och 1933. Från 1973 började tidningen
              behandla olika avsnitt i Ludvikas och Gammelgårdens historia.
            </p>
          </div>
          <div className="col imageCol">
            <div className="ggimages">
              <img
                className="rounded"
                src="/gammelgarden2.jpeg"
                alt="img of gammelgarden"
              ></img>
            </div>
          </div>
        </div>

        <div className="col mt-2" id="become-member">
          <img
            className="ggimagebottom"
            src="/gammelgarden4.jpeg"
            alt="img of gammelgarden"
          ></img>
          <div className="member">
            <p>
              Bli medlem: Sätt in 250 kr på PG 527-5078 och ange namn och
              fullständig adress.
            </p>
          </div>
        </div>

        <p className="mt-4 mb-5" style={{ textAlign: "justify" }}>
          De mesta av arbetet på Ludvika Gammelgård görs av voluntärarbete, om
          du vill hjälpa oss att driva denna fantastiska plats vidare så kan du
          bli medlem för 250 kronor/år. Varje liten krona hjälper oss!
        </p>
      </div>
    </div>
  );
}

export default Gammelgarden;
