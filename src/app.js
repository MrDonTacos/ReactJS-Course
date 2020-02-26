//Create app object title/subtitle
//use title/subtyitle in the template
//render the template

var template = (
    <div>
    <h1>Saúl Cañedo Castillo</h1> 
    <p>This is some info</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
    </ol>
    </div>
    ); 

    var user = {
        name: "Saúl Cañedo Castillo",
        age: 21,
        location: 'Mexicali'
    }

    var app = {
        Title: "Eternal Sunshine",
        SubTitle: "Jim Carrey"
    }

var userName = 'Saúl Cañedo Castillo'
var userAge = 21;
var userLocation = 'Mexico'

const templateTwo = (
    <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
    </div>
);

let getLocation = (location) => {
    if(location){
        return location
    }else{
        return 'unknown'
    }

}

const templateThree = (
    <div>
        <h1>{app.Title}</h1>
        <h2>{app.SubTitle}</h2>
    
    </div>
);

    // create my own template
    // create a new Template var jsx expression
    // root element
    // h1 => Saul Canedo Castillo
    // p => add Age: 21
    // p => Location: Mexicali
    // Render template Two insted of template


    var appRoot = document.getElementById('app');

    ReactDOM.render(templateTwo, appRoot);