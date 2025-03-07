// node --watch about-fetch-and-map.js
console.log('Getting some Random Users');

fetch('https://randomuser.me/api?results=10')
    .then(response => response.json())
    .then(data => {
        let count = data.info.results;
        console.log(`Requested ${count} random users.\n`);

        // Transform the data
        let summaries = data.results.map(person => {
            let name = person.name.first[0] + '. ' + person.name.last;
            let city = person.location.city;
            return { name, city };
        });
        console.table(summaries);
    });