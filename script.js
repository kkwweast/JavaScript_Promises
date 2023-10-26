// Creating a promise
const promise = new Promise((resolve, reject) => {
    // This is where you try to do the task
    // This is where we try to turn bread into toast
    // or water into wine
    // But there is no guarantee that it will work
    // so we need a way to handle either outcome
    const randomNumber = Math.random() * 100;
    console.log(randomNumber);
    if (randomNumber > 50) {
      resolve(randomNumber); // it was a success
    } else {
      // it was not a success
      reject(new Error("Invalid number: Too Low"));
    }
  });
  
  // Consume the promise
  promise
    .then((resolvedValue) => {
      console.log("I knew it! It worked");
      console.log(`It was ${resolvedValue}`);
    })
    .catch((rejectedValue) => {
      console.log("Of course, it was an error");
      console.error(rejectedValue);
    });
  


 
 