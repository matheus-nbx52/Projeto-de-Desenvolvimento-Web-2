import { useState } from 'react'


const Card = () => {
    const [valor, setValor] = useState(0)

    const adicionar = () => {
        setValor(valor + 1)
    }
    const remover = () => {
        if (valor <= 0) {
            return
        }
        setValor(valor - 1)
    }
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <p>{valor}</p>
                </div>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button"
                        className="btn btn-success"
                        onClick={adicionar}>Mais
                    </button>

                    <button type="button"
                        className="btn btn-primary"
                        disabled>Middle
                    </button>

                    <button type="button"
                        className="btn btn-danger"
                        onClick={remover}>Menos</button>
                </div>
            </div>

        </>
    )
}

export default Card