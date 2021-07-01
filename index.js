const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv[2];

fetchBreedDescription(breed, (error, description) => {
  error ? console.log('Error:', error) : console.log(description);
});

/*   )
  if (error) {
    console.log('Error:', error)
  }
  else{
    console.log(description)
  } */
