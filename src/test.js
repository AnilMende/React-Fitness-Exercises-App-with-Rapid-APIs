
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cf0ff52b97msh59d2e9ccc16ca36p1f3a8ajsn68b863ca7d3e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async(url, options) => {

    const res = await fetch(url , options);

    const data = await res.json();

    return data;
}

// fetch('https://exercisedb.p.rapidapi.com/exercises', options)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.error);
