function ListaUsuarios()
{
    const usuarios=['Ana','Nicolas','Julieta','Maria'];
    return(
        <ul>
            {usuarios.map(usuario =>(
                <li key={usuario} >{usuario}</li>
            ))}
        </ul>
    );
}

export default ListaUsuarios;