const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement> document.getElementById('num2');
const buttonElement = document.querySelector('button');

function add (a:number, b:number){
  return a + b;
}

function printResult(result): void{
  console.log(result);
}

// const result = sum(4, 5); 
// const isDone = false;

// console.log('Resuslt: ', result)
// printResult(result)
const results: { res: number, print: () => void }[] = [];
const names = ['Ruslan'];

buttonElement.addEventListener('click', ()=>{
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer = {
    res: result,
    print(){
      console.log(this.res)
    }
  }
  results.push(resultContainer);
  //results.push(1); Error
  printResult(results);
  results[0].print()
})