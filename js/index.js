document.addEventListener('DOMContentLoaded', () => {
    fetch("http://localhost:3000/monsters/?_limit=50")
        .then(res => res.json())
        .then(data => data.forEach(obj => displayMonsters(obj)))

//display monsters
    function displayMonsters(obj) {
        let monster = document.createElement('div')
        //to add object name, object age ,object description
        monster.innerHTML = `
            <h2> ${obj.name} </h2>
                <p> Age: ${obj.age} </p>
                <p> Description: ${obj.description} </p>
        `
        document.getElementById('monster-container').appendChild(monster)
    } 
    document.getElementById('forward').addEventListener('click', () => {
        fetch("http://localhost:3000/monsters/?_limit=50&_page=2")
        .then(res => res.json())
        .then(data => data.forEach(obj => displayMonsters(obj)))
    })


})
