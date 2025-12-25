interface CheckNegativeProps{
    num:number;
}
const CheckNegative = ({num}: CheckNegativeProps) => {
    function isNegativeNumber(a:number): string{
        if (a < 0) {
            return `${a} is Negative Number`
        }else{
            return `${a} is not a Negative Number`
        }
    }
  return (
    <div>
      <h1 className="font-bold text-1xl">Solution 3</h1>
      Result: {isNegativeNumber(num)}
    </div>
  )
}

export default CheckNegative
