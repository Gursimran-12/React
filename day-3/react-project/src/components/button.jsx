const Button = (props) => {
    console.log("Hello, this is a button compoenent");
    console.log(props);
    return(
        <div> {`${props.value}`}</div>   
    )
}

export default Button;