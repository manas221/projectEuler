import axios from "axios";
import _ from "lodash";
// first fetch the names directly from api
const API_URL = "https://projecteuler.net/resources/documents/0022_names.txt";
const API_HEADERS = {}; // none required

const getLetterValue = (letter) => {
  const lowerCaseLetter = letter.toLowerCase();
  return lowerCaseLetter.charCodeAt(0) - 96;
};

async function namesScores() {
  let namesList;

  await axios
    .get(API_URL)
    .then((response) => {
      console.log("api call successful");
      const temp =
        response.data
          .match(/"([^"]+)"/g)
          ?.map((name) => name.replace(/"/g, "")) || [];

      namesList = _.sortBy(temp);
      console.log(_.size(namesList));
    })
    .catch((err) => console.log(err, "api call failed"));

  let res = 0;
  _.forEach(namesList, (nameString, index) => {
    let localRes = 0;
    _.forEach(nameString, (n) => {
      localRes += getLetterValue(n);
    });
    res = res + localRes * (index + 1);
  });

  console.log(res);
}

namesScores();
