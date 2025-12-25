interface AverageOfNumbersProps {
  num1: number;
  num2: number;
  num3: number;
}
const AverageOfNumbers = ({ num1, num2, num3 }: AverageOfNumbersProps) => {
  function averageOfThreeNumbers(a: number, b: number, c: number): number {
    return (a + b + c) / 3;
  }
  return (
    <div>
      <h1 className="font-bold text-1xl">Solution 2</h1>
      Result: {averageOfThreeNumbers(num1, num2, num3)}
    </div>
  );
};

export default AverageOfNumbers;
