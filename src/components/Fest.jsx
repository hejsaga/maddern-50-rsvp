import React from "react";
import { Table } from "react-bootstrap";
import Media from "react-media";

function Fest() {
  return (
    <div className="pagewrapper">
      <h1 className="headline">Information om festen</h1>

      <Media
        queries={{
          small: "(max-width: 999px)",
          large: "(min-width: 999px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <div className="m-4">
                <p>Datum: Lördag 28/5 2022</p>

                <p>
                  Plats: Gammelgården Ludvika (cirka 10 minuters promenad från
                  centrum)
                </p>

                <p>Tid: 16.00 -</p>
                <p>Klädsel: Valfri (ta med skor som ni kan gå på gräs med)</p>
                <p>
                  Mat: Jag bjuder på välkomstdrink, ett glas vin/öl till maten,
                  buffé, efterrätt, kaffe, avec
                </p>
                <p>Dryck: Bar med självkostnadspriser (betalning via Swish)</p>
                <p>
                  Deltagare: En person per familj/hushåll anmäler deltagare.
                  OBS! Detta är ett barnfritt arrangemang.
                </p>
                <p>
                  Toastmaster: Josefin Nilsson: 072-403 9247,
                  a.m.josefin@gmail.com
                </p>
                <p>
                  Presenter: Jag avstår från presenter men tar tacksamt emot ett
                  frivilligt bidrag till festen. Det kan swishas på plats under
                  festkvällen.
                </p>
                <p>
                  Vägbeskrivning: Stockholm – Ludvika med bil E18 &amp; väg 66:
                  217 km, 2 tim &amp; 40 min E18 &amp; väg 70: 227 km, 2 tim
                  &amp; 55 min. Stockholm – Ludvika med tåg Via Västerås eller
                  Borlänge cirka 3 timmar.
                </p>
              </div>
            )}
            {matches.large && (
              <>
                <div className="d-flex justify-content-center">
                  <Table className="table noBorder m-1">
                    <tbody>
                      <tr>
                        <td>Datum</td>
                        <td>Lördag 28/5 2022</td>
                      </tr>
                      <tr>
                        <td>Plats</td>
                        <td>
                          Gammelgården Ludvika (cirka 10 minuters promenad från
                          centrum)
                        </td>
                      </tr>
                      <tr>
                        <td>Tid</td>
                        <td>16.00 –</td>
                      </tr>
                      <tr>
                        <td>Klädsel</td>
                        <td>Valfri (ta med skor som ni kan gå på gräs med)</td>
                      </tr>
                      <tr>
                        <td>Mat</td>
                        <td>
                          Jag bjuder på välkomstdrink, ett glas vin/öl till
                          maten, buffé, efterrätt, kaffe, avec
                        </td>
                      </tr>
                      <tr>
                        <td>Dryck</td>
                        <td>
                          Bar med självkostnadspriser (betalning via Swish)
                        </td>
                      </tr>
                      <tr>
                        <td>Deltagare</td>
                        <td>
                          En person per familj/hushåll anmäler deltagare. OBS!
                          Detta är ett barnfritt arrangemang.
                        </td>
                      </tr>
                      <tr>
                        <td>Toastmaster</td>
                        <td>
                          Josefin Nilsson: 072-403 9247, a.m.josefin@gmail.com
                        </td>
                      </tr>
                      <tr>
                        <td>Presenter</td>
                        <td>
                          Jag avstår från presenter men tar tacksamt emot ett
                          frivilligt bidrag till festen. Det kan swishas på
                          plats under festkvällen.
                        </td>
                      </tr>
                      <tr>
                        <td>Vägbeskrivning</td>
                        <td>
                          Stockholm – Ludvika med bil E18 &amp; väg 66: 217 km,
                          2 tim &amp; 40 min E18 &amp; väg 70: 227 km, 2 tim
                          &amp; 55 min. Stockholm – Ludvika med tåg Via Västerås
                          eller Borlänge cirka 3 timmar.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </>
            )}
          </>
        )}
      </Media>

      <div className="container-fluid mt-5 mb-5">
        <div className="row">
          <div className="col">
            <img
              className="w-100 h-100 rounded"
              src="/linn1.jpeg"
              alt="img of Linn"
            ></img>
          </div>
          <div className="col">
            <img
              className="w-100 h-100 rounded"
              src="/linn3.jpeg"
              alt="img of Linn"
            ></img>
          </div>
          <div className="col">
            <img
              className="w-100 h-100 rounded"
              src="/linn2.jpeg"
              alt="img of Linn"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fest;
