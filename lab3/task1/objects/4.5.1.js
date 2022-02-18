function Accumulator(a) {
    this.val = a;

    this.read = function() {
      this.val += +prompt('How much to add?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.val);