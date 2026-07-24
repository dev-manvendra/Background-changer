import { useState } from 'react'
import Button from './components/Button'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className='main'
    style={{backgroundColor: color}}>
        <div className='heading'>
          <h1>Background Colour Changer</h1>
          <p>Click on the button below to change the background-color</p>
        </div>
        <div className='colour'>
           <Button
                bgColour = "red"
                setBackgroundColour={setColor}
            />

            <Button
                bgColour="blue"
                setBackgroundColour={setColor}
            />

            <Button
                bgColour="green"
                setBackgroundColour={setColor}
            />
            <Button
                bgColour="white"
                setBackgroundColour={setColor}
            />
            <Button
                bgColour="grey"
                setBackgroundColour={setColor}
            />
            <Button
                bgColour="orange"
                setBackgroundColour={setColor}
            />
           
          
        </div>
    </div>
    </>
  )
}

export default App
