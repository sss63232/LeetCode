function getUnexpiredTokens(time_to_live, queries) {
  let tokens = new Map()
  let results = []

  const parseQuery = (queryString) => {
    const queryItems = queryString.split(" ")
    const action = queryItems[0]
    let tokenId = ""
    let currentTimeStr = ""
    switch (action) {
      case "renew":
      case "generate": {
        tokenId = queryItems[1]
        currentTimeStr = queryItems[2]
        break
      }
      case "count": {
        currentTimeStr = queryItems[1]
        break
      }
    }
    
    return {
      action,
      tokenId,
      currentTimeStr,
    }
  }

  for (let query of queries) {
    let { action, tokenId, currentTimeStr } = parseQuery(query)
    let currentTime = parseInt(currentTimeStr)

    console.log(`\nProcessing query: ${query}`)
    console.log(`Current time: ${currentTime}`)
    console.log(`Current tokens:`, tokens)

    // 清理過期的令牌
    tokens.forEach((expiry, id) => {
      if (expiry <= currentTime) {
        console.log(`Token ${id} expired (expiry: ${expiry})`)
        tokens.delete(id)
      }
    })

    switch (action) {
      case "generate":
        let expiryTime = currentTime + time_to_live
        tokens.set(tokenId, expiryTime)
        console.log(`Generated token ${tokenId}, expires at ${expiryTime}`)
        break
      case "renew":
        if (tokens.has(tokenId) && tokens.get(tokenId) > currentTime) {
          let newExpiry = currentTime + time_to_live
          tokens.set(tokenId, newExpiry)
          console.log(`Renewed token ${tokenId}, new expiry: ${newExpiry}`)
        } else {
          console.log(`Failed to renew token ${tokenId}`)
        }
        break
      case "count":
        let count = Array.from(tokens.values()).filter(
          (expiry) => expiry > currentTime
        ).length
        results.push(count)
        console.log(`Count result: ${count}`)
        break
    }
  }

  return results
}

// 測試用例

console.log(
  "Final result:",
  getUnexpiredTokens(35, [
    "generate token1 3",
    "count 4",
    "generate token2 6",
    "count 7",
    "generate token3 11",
    "count 41",
  ])
) // 1 2 1

console.log(
  "Final result:",
  getUnexpiredTokens(9, [
    "generate token1 3",
    "renew token1 5",
    "generate token2 7",
    "renew token2 8",
    "generate token3 9",
    "count 12",
  ])
) // 3
