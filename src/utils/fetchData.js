export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/targetList',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = response.json();
    console.log(data);
}