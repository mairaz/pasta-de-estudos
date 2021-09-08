const scores = [17, 12, 10, 2, 7, 2, 11, 20, 8];


function xx(score,n,k){
  for(let i = 0;i <= k; i++){
    const selected = score.splice(0,k).concat(score.splice(-k))
  }

  
  return selected
}


console.log(xx(scores, 1, 4))