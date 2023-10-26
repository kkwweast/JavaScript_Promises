// Exercise 1
const errorParagraph = document.getElementById("error");
const listUl = document.getElementById("list");

// Exercise 2
const getList = () => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const success = true;
      if (success) {
        const hobbits = ["Frodo Baggins", "Samwise Gamgee", "Merry Brandybuck", "Peregrin Took"];
        resolve(hobbits);
      } else {
        const failure = {
          message: "Error: The list could not be retrieved."
        };
        reject(failure);
      }
    }, 2000);
  });
};

// Exercise 2: Handling the Promise
getList()
  .then((result) => {
    console.log(result); // Logging the resolved value
    // Exercise 3: Update the DOM
    result.forEach((hobbit) => {
      const li = document.createElement("li");
      li.textContent = hobbit;
      listUl.appendChild(li);
    });
  })
  .catch((error) => {
    console.log(error.message); // Logging the error message
    // Exercise 3: Update the DOM
    errorParagraph.textContent = error.message;
  });

