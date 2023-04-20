function createCounter(n: number): () => number {
    let nowCount = n-1
    return function() {
        return nowCount += 1
    }
}


 
  const counter = createCounter(10)
  counter() // 10
  counter() // 11
  counter() // 12
