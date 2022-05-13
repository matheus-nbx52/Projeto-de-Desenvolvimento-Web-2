const Item = ({texto,children})=>{
return(
    <button type="button" className="list-group-item list-group-item-action">
        {texto}
        {children}
        </button>
    
)
}
export default Item