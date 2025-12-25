
import './App.css'
import AverageOfNumbers from './components/AverageOfNumbers'
import CheckNegative from './components/CheckNegative'
import CheckUpperCase from './components/CheckUpperCase'

function App() {


  return (
    <>
     <CheckUpperCase char='a'/>
     <AverageOfNumbers num1={3} num2={4} num3={6}/>
     <CheckNegative num={-9}/>
    </>
  )
}

export default App
