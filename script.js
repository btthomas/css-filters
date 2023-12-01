function handleHover(e) {
  e.target.src = 'info-green.svg'
}

function handleStopHover(e) {
  e.target.src = 'info-blue.svg'
}

function main() {
  const image = document.querySelector('img')

  image.addEventListener('mouseover', handleHover)
  image.addEventListener('mouseout', handleStopHover)
}


main();