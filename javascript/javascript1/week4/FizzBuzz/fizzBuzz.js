function fizzbuzz(a,b) {
  for (let i = 1; i <= 100; i++) {
      if (i % a ==0 && i%b==0) {
      console.log(`fizzbuzz`);
    
    } else if (i % a == 0) {
      console.log(`buzz`);
    
    } else if (i % b == 0) {
      console.log(`fizz`)
    }
    else{ 
        console.log(i);
    }
       
    }
  }


fizzbuzz(3,5)
