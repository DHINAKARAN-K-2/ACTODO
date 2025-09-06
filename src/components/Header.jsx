function Header(props) {
    return (
        <div>
            <h1 className="text-3xl text-orange-300 font-medium">Hello {props.name}..!</h1>
            <p>I Help you Manage your Activities :)</p>
        </div>
    )
}
export default Header