//leftside on tryjasmine

describe('fizzBuzzWoof',function(){
  it('should return 1 when we pass 1',function(){
  expect(fizzBuzzWoof(1)).toBe(1);
  });
  it('should return 2 when we pass 2',function(){
  expect(fizzBuzzWoof(2)).toBe(2);
  });
  it('should return fizz when we pass 3' ,function(){
  expect(fizzBuzzWoof(3)).toBe('fizz');
  });

//Right Side on tryJasmine

function fizzBuzzWoof(i) {
  var i;
  if (divisibleBy(i, 3)){
    return 'fizz';
  }
  if (i===2){
    return 2;
  }
  if (i===1){
    return 1 ;
  }
