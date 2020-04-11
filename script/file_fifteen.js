//dynamic import NOT SUPPORTED Fully

const performMultiplication = async (num1, num2) => {
    if (num1 && num2) {
      const mult = await import('./multiply.js');
      console.log(mult.multiply(5, 10));
    };
  };
  
  performMultiplication(4, 2); 

