const FirstComponent  = (props) => {
    console.log(props);
    return <div className="firstComp">{props.textToShow}</div>
}

export default FirstComponent;