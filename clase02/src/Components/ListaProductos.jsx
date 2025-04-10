function ListaProductos({productos}) //productos
{
    return(
        <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}} >
        {
            productos.map((producto)=>(
                <div key={producto.id}                
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "10px",
                    width: "200px",
                    textAlign: "center",
                  }}
                >
                    <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    style={{width:"100%",height:"auto",borderRadius:"5px"}}
                    />
                    <h3>{producto.nombre}</h3>
                    <p>{producto.precio}</p>
                </div>

            )            
            )
            
        }
        </div>
    );
}

export default ListaProductos;