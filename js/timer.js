let countdown

const timer = (seconds) => {
  const now = Date.now()
  const then = now + seconds * 1000
  // console.log(now, then)
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    if (secondsLeft <= 0) {
      clearInterval(countdown)
    }
    console.log(secondsLeft)
  }, 1000)
}
