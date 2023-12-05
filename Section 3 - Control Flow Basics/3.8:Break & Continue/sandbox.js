// break and continue

const scores =[50, 25, 0, 20, 100, 10];

for(i = 0; i < scores.length; i++){

  if(scores[i] === 0){
    continue;
  }
  
  console.log('your score is: ', scores[i]);

  if(scores[i] === 100){
    console.log('congrats, you got the top score');
    break;
  }
}