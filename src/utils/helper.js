import axios from 'axios';
function searchGit(userName){
  let address = `https://api.github.com/users/${userName}`
  return axios.get(address)
    .then((res) => (
      { getData:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}
export {searchGit}


function getCardData(userName){
  let address = `https://raw.githubusercontent.com/mengmeng183/demodata/master/Card.json?${Math.random()}`
  return axios.get(address)
    .then((res) => (
      { getJson:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}
export {getCardData}
