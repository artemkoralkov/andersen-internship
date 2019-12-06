/* Дано действительное b>0. Последовательность a1, a2,...
образована по следующему закону a1=b , ai=ai-1-1/sqr(i),
i=2, 3, .... Найти первые K отрицательных членов
последовательности a1, a2, … (воспользуйтесь шаблоном мемоизации).
 */

function sequence(b, n) {
  if (n === 0) return b;
  return sequence(b, n - 1) - Math.sqrt(n);
}
function memo(fun) {
  const cache = [];
  return function(b, n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }

    const result = fun(b, n);
    cache[n] = result;

    return result;
  };
}
const memoSequence = memo(sequence);

function answer(b, K, n = 0) {
  if (K === 0) return 0;
  const temp = memoSequence(b, n);
  if (temp < 0) {
    console.log(temp);
    K--;
  }
  return answer(b, K, n + 1);
}
answer(1, 3);
