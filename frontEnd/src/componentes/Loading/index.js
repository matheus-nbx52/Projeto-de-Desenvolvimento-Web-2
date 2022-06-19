import PropTypes from 'prop-types'
import { Container } from './styled.js'

export default function Loading({isLoading}){
    if(!isLoading) return (<></>)
    
    return(
        <h1>
            <Container>
                    <span>Carregando...</span> 
            </Container>
        </h1>
    )

}
Loading.defaultProps ={
    isLoading:false
}
Loading.propTypes ={
    isLoading:PropTypes.bool

}