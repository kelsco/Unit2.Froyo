 // No need for document.addEventListener here
 const userInputString = prompt(
    "Please enter froyo flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee"
  );
  
  // Split the input into an array of flavors
  let flavorsArray = userInputString.split(",").map(flavor => flavor.trim());
  
  // Create an object to count occurrences of each flavor
  let flavorCount = {};
  
  flavorsArray.forEach(flavor => {
      flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
  });
  
  // Display the flavor counts as a table in the console
  console.table(flavorCount);
  
  // Optionally, log each key-value pair individually
  for (const key in flavorCount) {
      if (flavorCount.hasOwnProperty(key)) {
          console.log("Flavor:", key, "Count:", flavorCount[key]);
      }
  }