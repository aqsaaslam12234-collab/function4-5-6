interface CheckUpperCaseProps{
    char:string;
}
const CheckUpperCase = ({char}:CheckUpperCaseProps) => {
    function isUpperCase(char : string): string {
        if (char === char.toUpperCase()) {
            return `${char} is UpperCase`
        }else{
            return `${char} is lowerCase`
        }
    }
  return (
    <div>
      <h1 className="font-bold text-1xl">Solution 1</h1>
      Result: {isUpperCase(char)}
    </div>
  )
}

export default CheckUpperCase
