import '../styles/articulo.css'
export const Articulo = ({ titulo , contenido,creador,urlimg }) => {

    return(
        <>
        <article className='articulo'>
            <figure>
                <img src={urlimg}  className='h-full w-full' />
            </figure>
            <section>
                <legend>{creador}</legend>
                <h2>{titulo}</h2>
                <p>{contenido}</p>
            </section>
        </article>
        </>

    )

}