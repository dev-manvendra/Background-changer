function Button({
    bgColour = "olive",
    setBackgroundColour
}) 
{

    return(
        <button 
            className='btn'
            style={{backgroundColor: bgColour              
            }}
            onClick={() => setBackgroundColour(bgColour)}
          >
        {bgColour}</button>
    )

}

export default Button;