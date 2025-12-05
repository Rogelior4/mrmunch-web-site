import { useState } from 'react'
import './App.css'
import personaje from './assets/personaje.png'

function App() {
  const [vista, setVista] = useState('inicio');

  return (
    <div className="app-container">
      

      <nav className="navbar">
        <div className="logo-container" onClick={() => setVista('inicio')}>

          <img src={personaje} alt="Logo Mr. Monch" className="logo-nav" />
          <h1 className="titulo-nav">Grinch Mode</h1>
        </div>

 <div className="menu-opciones">

            <button onClick={() => setVista('Historia')}>Historia</button>

            <button onClick={() => setVista('Música')}>Música</button>

            <button onClick={() => setVista('Ponte monchoso')}>Ponte Monchoso</button>

        </div>

      </nav>

      <main className="contenido-pagina">

        {vista === 'inicio' && (
          <div className="seccion inicio fade-in">
            <h2>¡Bienvenido al mundo de Mr. Monch!</h2>
            <p>Selecciona una opción del menú para comenzar la experiencia.</p>
          </div>
        )}

        {vista === 'Historia' && (
          <div className="seccion historia fade-in">
            <h2>Cómics canónicos de la historia de Mr. Monch</h2>
            <div className="info-box">
              <p>Aquí verás el universo, estrellas y planetas.</p>
              <p>Un "lobby" general de todo lo que Mr. Monch hace.</p>
            </div>
          </div>
        )}

        {vista === 'Música' && (
          <div className="seccion musica fade-in">
            <h2>Videoclips y Streaming</h2>
            <p>Disfruta de las animaciones y música original de Mr. Monch.</p>
            <div className="links-container">
              <button className="btn-streaming">Spotify</button>
              <button className="btn-streaming">YouTube</button>
              <button className="btn-streaming">Apple Music</button>
            </div>
          </div>
        )}

        {vista === 'Ponte monchoso' && (
          <div className="seccion contacto fade-in">
            <h2>Pedidos y Eventos</h2>
            <p>Haz tu orden individual (a partir de 4 personas) o contrata para eventos.</p>
            
            <div className="contacto-info">
              <p><strong>WhatsApp:</strong> +52 555-0000</p>
              <p><strong>Teléfono directo:</strong> +52 555-1234</p>
            </div>
          </div>
        )}

      </main>

    </div>
  )
}

export default App