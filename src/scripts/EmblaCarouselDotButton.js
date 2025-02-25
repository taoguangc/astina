export const addDotBtnsAndClickHandlers = (emblaApi, dotsNode) => {
  let dotNodes = []

  const addDotBtnsWithClickHandlers = () => {
    dotsNode.innerHTML = emblaApi
      .scrollSnapList()
      .map(() => '<button class="embla__dot" type="button"></button>')
      .join('')

    const scrollTo = (index) => {
      emblaApi.scrollTo(index)
    }

    dotNodes = Array.from(dotsNode.querySelectorAll('.embla__dot'))
    dotNodes.forEach((dotNode, index) => {
      dotNode.addEventListener('click', () => scrollTo(index), false)
    })
  }

  const toggleDotBtnsActive = () => {
    const previous = emblaApi.previousScrollSnap()
    const selected = emblaApi.selectedScrollSnap()
    if (dotNodes[previous]) {
      dotNodes[previous].classList.remove('embla__dot--selected')
    } else {
      console.error('Dot button not found for previous index:', previous)
    }
    if (dotNodes[selected]) {
      dotNodes[selected].classList.add('embla__dot--selected')
    } else {
      console.error('Dot button not found for selected index:', selected)
    }
  }

  emblaApi
    .on('init', addDotBtnsWithClickHandlers)
    .on('reInit', addDotBtnsWithClickHandlers)
    .on('init', toggleDotBtnsActive)
    .on('reInit', toggleDotBtnsActive)
    .on('select', toggleDotBtnsActive)

  return () => {
    dotsNode.innerHTML = ''
  }
}
