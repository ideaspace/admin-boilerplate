const defaults = {
  duration: 300,
  offset: 0,
  easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

const getTargetHeight = (target) => {
  return Math.max(
    target.scrollHeight,
    target.offsetHeight,
    target.clientHeight
  )
}

export const goTo = (target, options) => {
  return new Promise((resolve, reject) => {
    if (typeof target === 'undefined') {
      return reject(new Error('target is undefined'))
    }

    const settings = Object.assign({}, defaults, options)
    const startTime = performance.now()
    const startHeight = target.offsetHeight
    const targetHeight = getTargetHeight(target)
    const distanceToScroll = targetHeight - startHeight

    function step (currentTime) {
      const progressPercentage = Math.min(1, ((currentTime - startTime) / settings.duration))
      const targetPosition = targetHeight - Math.floor(startHeight + distanceToScroll * settings.easing(progressPercentage))
      target.scrollTo(0, targetPosition)

      if (progressPercentage === 1) {
        return resolve(target)
      }
      window.requestAnimationFrame(step)
    }

    window.requestAnimationFrame(step)
  })
}

export default {
  goTo
}
