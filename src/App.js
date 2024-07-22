
import './App.css';

function App() {

    return (
      <div>
        <header className='App-header'>
          <nav className='navbar'>
            
              <h1>.luchodpdev</h1>
              <div id='navbaritems'>
                <a>experiencia</a>
                <a>proyectos</a>
                <a>sobre mi</a>
                <a>contacto</a>
                <a>portfolio</a></div>
            
          </nav>
          
          
        
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

        <fieldset className='main-fieldset'>
          <img id='fotoyo'
          src='./yo.jpg' />
          <div>
            <h4>Luciano De Pasquale</h4>
            <p>
              lorem impsum lorem impsum
            lorem impsum lorem impsum lorem impsum
            lorem impsum lorem impsum lorem impsum
            lorem impsum lorem impsum lorem impsum
            lorem impsum lorem impsum lorem impsum
            lorem impsum lorem impsum lorem impsum
            lorem impsum lorem impsum lorem impsum
            lorem impsum lorem impsum lorem impsum
            </p>
          </div>
        </fieldset>

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
              <img className='software-logo2' src='./cssjshtmllogo.png' />
              <img className='software-logo' src='./logonode.jpg' />
              <img className='software-logo' src='./tslogo.png' />
              <img className='software-logo' src='./logo192.png' />
              <img className='software-logo' src='./sasskigi.png' />
              <img className='software-logo' src='./vuelogo.png' />
            </div>
            <div className='cards-software'>
              <h2>productor <br/>musical</h2>
              <img className='software-logo' src='./logoprotools.webp' />
              <img className='software-logo' src='./cubase.png' />
              <img className='software-logo' src='./nuendo.png' />
              <img className='software-logo' src='./logowaves.jpeg' />
            </div>
           
        </div>
        </main>
        <footer className='class-footer'>
          <p>
            <small className='footer-rights'>Todos los derechos reservados</small>
            </p>
        </footer>
      </div>
    )
  
}

export default App;
