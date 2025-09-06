function Todoitem(props) {
    const alist = props.alist
    const setalist = props.setalist
    function handleRemove(delid) {
        console.log(delid)
        var temp = alist.filter(function (item) {
            if (delid == item.id) 
            {
                return false
            }
            else {
                return true
            }

        })
        setalist(temp)

    }
    return (
        <div className="flex justify-between">
            <p>{props.index + 1}. {props.activity}</p>
            <button className="text-red-700" onClick={() => handleRemove(props.id)}>Delete</button>
        </div>
    )

}
export default Todoitem