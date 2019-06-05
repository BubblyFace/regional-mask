

/**
 * @description Init window's innerWidth equals 75rem
 */
function initScale() {
  const computedFontSize = window.innerWidth / 750;
  document.body.style.fontSize = computedFontSize + 'px';
}


function regionalMask(left, top, width, height, color, opacity) {
  const mask = document.getElementById('mask');
  const maskHeight = mask.offsetHeight;
  const maskWidth = mask.offsetWidth;
  
  mask.innerHTML = ''

  let maskBlocks = [
    generateMaskBlock(0, 0, left, maskHeight, color, opacity, 'mask-left'), // left
    generateMaskBlock(left + width, 0, maskWidth - left - width, maskHeight, color, opacity, 'mask-right'), // right
    generateMaskBlock(left, 0, width, top, color, opacity, 'mask-top'), // top
    generateMaskBlock(left, top + height, width, maskHeight - height - top, color, opacity, 'mask-bottom'), // bottom
    generateMaskBlock(left, top, width, height, 'un-shadow') // uns
  ]

  maskBlocks.forEach(block => {
    mask.appendChild(block);
  })
}

function generateMaskBlock(left, top, width, height, color, opacity, id) {
  let dom = document.createElement('div');

  dom.className = 'mask-block';
  dom.style = `left:${left}rem;top:${top}rem;width:${width}rem;height:${height}rem;background:rgba(${color},${opacity})`;
  if(id) { 
    dom.id = id;
  } 

  return dom;
}

