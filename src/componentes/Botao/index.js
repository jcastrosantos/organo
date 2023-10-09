import './Botao.css'

const Botao = (porps) => {
    return (<button className="botao">
        {porps.children}
    </button>

    )

}

export default Botao