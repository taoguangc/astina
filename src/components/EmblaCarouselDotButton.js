export const addDotBtnsAndClickHandlers = (emblaApi, dotButtonsContainer, setSelectedIndex) => {
  // ...existing code...

  const toggleDotBtnsActive = () => {
    if (!emblaApi || !dotButtonElements.length) return
    const selectedIndex = emblaApi.selectedScrollSnap()
    const previousDot = dotButtonElements[prevSelectedIndex]
    const currentDot = dotButtonElements[selectedIndex]

    if (previousDot?.classList) {
      previousDot.classList.remove('active')
    }

    if (currentDot?.classList) {
      currentDot.classList.add('active')
    }

    prevSelectedIndex = selectedIndex
    setSelectedIndex(selectedIndex)
  }

  // ...existing code...
}

export const setupDotBtns = (emblaApi, dotButtonsContainer, setSelectedIndex) => {
  if (!emblaApi || !dotButtonsContainer) return

  // 确保 DOM 完全加载
  window.requestAnimationFrame(() => {
    addDotBtnsAndClickHandlers(emblaApi, dotButtonsContainer, setSelectedIndex)
  })
}
