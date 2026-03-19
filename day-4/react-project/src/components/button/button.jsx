// Task: Reusable Button Componenet Library
// Creating reusable UI Components with Props
// Create a Button compoenet 
// Accept the props: Text, color, size 
// use Expressions to dynamically apply Styles 
// use this button at multiple places

function Button({text, color, size})
{
    return(
        <>
        <div className="button" style={{backgroundColor: color, fontSize: size}}>
            <p> {text} </p>
        </div>
        </>
    )
}
export default Button

