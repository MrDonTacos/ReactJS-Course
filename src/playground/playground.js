const user = [
    {
    
        name: "Saúl Cañedo Castillo",
        age: 21,
        location: 'Mexicali'
    },
    {
        name: "Osvaldo Cañedo Castillo",
        age: 24,
        location: 'Mexicali'
    }
        ]
        
    
        var app = {
            Title: "Eternal Sunshine",
            SubTitle: "Jim Carrey"
        }
    
    // var userName = 'Saúl Cañedo Castillo'
    // var userAge = 21;
    // var userLocation = 'Mexico'
    
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
    
        user.map((element) => {  
          <div>
          <h1>{element.name}</h1>
          <h2>{element.age}</h2>
          {console.log(element.age)}
          </div>
        }) 
       
    );
    
    
    
    let count = 0;
    
    
    
    let addOne = () => {
        count+=1;
        renderThings();
    }
    
    let minus = () => {
        count-=1;
        renderThings();
    }
    
    let reset = () => {
        count=0;
        renderThings();
    }

    const renderThings = () => {

        const templateFour = (
        
        <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minus}>-1</button>
        <button onClick={reset}>0</button>
        </div>
        
        );
        
        
        ReactDOM.render(templateFour, appRoot);
        };
        
        renderThings();
            // create my own template
            // create a new Template var jsx expression
            // root element
            // h1 => Saul Canedo Castillo
            // p => add Age: 21
            // p => Location: Mexicali
            // Render template Two insted of template
        
        
          
            console.log(templateThree);
        
          