const URL_CONSUMER = "http://localhost:8000/consumer/"
const JSON_NAME_TO_SCRAP = "liste-operations-comptabilisees-intradays-authsec.json";

let oldXHROpen = window.XMLHttpRequest.prototype.open;

window.XMLHttpRequest.prototype.open = function() {
  this.addEventListener("load", function() {
    if (this.responseURL.includes(JSON_NAME_TO_SCRAP)) {
        fetch(URL_CONSUMER, {
            method: "POST",
            body: this.responseText,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            crossorigin: true,
            mode: "no-cors",
        });
        
    }
  });
  return oldXHROpen.apply(this, arguments);
};