function Card(props)
{
    return(
        <div style={{background:props.bgcolor}} className="px-3 py-2 md:px-7 md:py-5 border rounded-md text-center flex-grow">
            <h1 className="text-1xl md:text-2xl font-medium">{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}
export default Card