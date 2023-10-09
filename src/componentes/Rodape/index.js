import './Rodape.css'

function Rodape() {
    return (
        <footer className='footer'>
            <div className='redes'>
                <img className='fb' src='/imagens/fb.png' alt='facebook' />
                <img className='tw' src='/imagens/tw.png' alt='twitter' />
                <img className='ig' src='/imagens/ig.png' alt='instagram' />
            </div>
            <img className='logo' src='/imagens/logo.png' alt='organo' />

            <h3>Desenvolvido por Alura</h3>
        </footer>
    )
}

export default Rodape