function Usuario(props)
{
    return(
        <div>
            <p>Nombre:{props.info.nombre}</p>
            <p>Edad:{props.info.edad}</p>

        </div>
    )
}

export default Usuario;