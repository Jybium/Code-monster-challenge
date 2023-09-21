const Title = document.getElementById("title");
const Advice = document.getElementById("quote");
const Message = document.getElementById("message");

const button = document.getElementById("dice");

const setmessage = (message, block, color, shadow) => {
  Message.style.display = block;
  Message.textContent = message;
  Message.style.color = color || "#CEE3E9";

  Message.style.boxShadow = shadow || "0px 1px 10px 1px rgba(83, 255, 170, 1)";
};

const closeMessage = () => {
  Message.style.display = "none";
};

const FetchData = async () => {
  try {
    setTimeout(setmessage("Loading", "block"), 1000);

    const response = await fetch("https://api.adviceslip.com/advice", {
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();
    const Data = await result.slip;
    console.log(result);
    setTimeout(setmessage("Success", "block"), 1000);
    setTimeout(closeMessage, 5000);

    Advice.textContent = Data.advice;
    Title.textContent = `Advice # ${Data.id}`;
  } catch (error) {
    console.log("Error loading advice.");

    setTimeout(
      setmessage(
        "Error loading Advice.",
        "block",
        "red",
        "1px 1px 10px 1px rgba(232,14,14,1)"
      ),
      2000
    );
    setTimeout(closeMessage, 5000);
  }
};
button.addEventListener("click", FetchData);
console.log(Title);

FetchData();
