function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let ans = [];
  let maxx = 0;
  for (let i = 0; i < len(A) - K; i++) {
    let arr = A.splice(i, i + K);
    if (sum(arr) > maxx) {
      maxx = sum(arr);
      ans = arr;
    }
  }
  return ans;
}

print(solution([5, 3, 6, 1, 3], 2));
