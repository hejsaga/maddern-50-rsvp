import { useState } from "react";
import { send } from "emailjs-com";

function OSA() {
  const [loading, setLoading] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    send(
      "service_a876bkl",
      "template_s98xmqt",
      toSend,
      "user_rYxjCTvBDS9dt8xTzOTtl"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setMessage("Ditt svar har skickats! Du kan nu lämna den här sidan.");
        setLoading(false);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setMessage(
          "Något gick fel, ditt meddelande har inte skickats. Vänligen försök igen."
        );
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="pagewrapper">
      <h1 className="headline">O.S.A till festen</h1>

      <div className="d-flex justify-content-center mb-4">
        <form onSubmit={onSubmit}>
          <h3 className="text-center">
            Vänligen svara senast den
            <span style={{ color: "orange" }}> 2 april 2022!</span>
          </h3>

          <div className="d-flex justify-content-center mt-4">
            <div className="d-flex flex-column osa">
              <label>
                <p>
                  Om du kommer ensam, ange endast ditt namn. Om du har sällskap
                  med dig, vänligen ange namnen på alla deltagare från ditt
                  sällskap.
                </p>
              </label>
              <input
                className="p-2 mb-3 rounded"
                type="text"
                name="from_name"
                value={toSend.from_name}
                onChange={handleChange}
                required
                placeholder="Ditt/era namn"
              ></input>

              <input
                className="p-2 mb-3 rounded"
                type="text"
                name="reply_to"
                value={toSend.reply_to}
                onChange={handleChange}
                required
                placeholder="Din mailaddress"
              ></input>

              <label>
                <p>
                  Här svarar du om du kommer eller inte. Om ja, ska du också
                  ange vilken dryckespreferens (öl/rött eller vitt vin) samt om
                  du/ditt sällskap har eventuella allergier.
                </p>
              </label>
              <textarea
                className="p-2 mb-3 rounded"
                cols="50"
                rows="3"
                type="text"
                name="message"
                value={toSend.message}
                onChange={handleChange}
                placeholder="Jag kommer/kommer ej, önskad dryckespreferens samt eventuell allergi"
                required
              ></textarea>

              <button
                disabled={loading}
                type="submit"
                className="button rounded"
              >
                Skicka ditt svar
              </button>
              <div className="mt-2">
                <p>{message}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OSA;
