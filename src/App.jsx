import { useState } from 'react'



function App() {
  const [actress, setActress] = useState ({
    fullName: "Tessa Thompson",
    age: "40 years old",
    imgUrl: "https://www.arabnews.com/sites/default/files/styles/660x371_watermarksaudi/public/main-image/2021/12/18/2972431-1170736404.jpg?itok=QkIXhjuQ",
    movies: "Creed and Men in Black"
  })
    const [shows, setShows] = useState(false);
    
    return (
    <>
      <div>
        {shows
        ? (<h1>Welcome here</h1>)
        : (
          <div>
            <img src={actress.imgUrl} alt={actress.fullName} />
            <h4>{actress.fullName}</h4>
            <p>{actress.age}</p>
          </div>  
          )     
      }
       
       <div>
        <button onClick={() => setShows(!shows)}>Toggle Me</button>
       </div>
        
      </div>
    </>
    )
}

export default App





