
import './App.css';

function App() {

    return (
      <div>
        <header className='App-header'>
          <h1>.luchodpdev</h1>
        
          <div className='header-cards'>
            <div className='cards-card'>
              <h2>experiencia</h2>
              <p>lorem impsum</p>
            </div>
            <div className='cards-card'>
              <h2>proyectos</h2>
              <p>lorem impsum</p>
            </div>
          </div>
        </header>
        <main className='App-main'>
        <h3>sobre mi</h3>
        <div className='main-cards'>

        <div className='cards-card'>
              <h2>front-end</h2>
              <p>lorem impsum</p>
            </div>
            <div className='cards-card'>
              <h2>productor <br/>musical</h2>
              <p>lorem impsum</p>
            </div>
           
        </div>

        <h3>conocimientos</h3>
        <div className='main-cards'>

        <div className='cards-software'>
              <h2>front-end</h2>
              <img src='../public/logo192.png' />
              <img src='../public/logo192.png' />
              <img src='../public/logo192.png' />
              <img src='../public/logo192.png' />
            </div>
            <div className='cards-software'>
              <h2>productor <br/>musical</h2>
              <img src='../public/logo192.png' />
              <img src='../public/logo192.png' />
              <img src='../public/logo192.png' />
              <img src='../public/logo192.png' />
            </div>
           
        </div>
        </main>
      </div>
    )
  
}

export default App;
