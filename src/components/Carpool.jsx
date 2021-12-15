import React from "react";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { query, collection } from "firebase/firestore";
import { db } from "../firebase";
import AddCarForm from "./AddCarForm";

function Carpool() {
  const queryRef = query(collection(db, "carpool"));
  const { data } = useFirestoreQueryData(["carpool"], queryRef, {
    subscribe: true,
  });

  return (
    <div className="pagewrapper">
      <h1 className="headline">Samåkning</h1>

      <div className="container-fluid">
        <div className="mb-5 carpoolIntro">
          <h3>
            Har du plats över i bilen, eller samåker du gärna med någon som har
            lediga platser?
          </h3>
          <p>
            Här kan du ange hur många platser du har över och se vilka som har
            angett att det finns platser i deras bilar. Ni planerar sedan
            samåkningen sinsemellan.
          </p>
        </div>

        <div className="row mb-5">
          <div className="col mt-2 widecolumn">
            <h3 className="mt-4">Lägg till dina lediga bilplatser</h3>
            <AddCarForm />
          </div>

          <div className="col mt-2">
            <h3 className="mb-4 mt-4">Tillgängliga bilplatser</h3>
            {data &&
              data.map((car, i) => {
                return (
                  <div key={i} className="car">
                    <div className="row rounded">
                      <div className="col">
                        <p className="pt-3">Bilförare: {car.name}</p>
                        <p>Kontakt: {car.email}</p>
                      </div>
                      <div className="col">
                        <p className="pt-3">Åker från: {car.from}</p>
                        <p>Antal lediga säten: {car.seats}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

            {data && data.length < 1 ? (
              <p>
                Just nu så finns det inga tillgänliga bilplatser. När det finns
                som kommer dom att dyka upp i den här listan.
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carpool;
