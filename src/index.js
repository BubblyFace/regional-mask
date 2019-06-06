

/**
 * @description Init window's innerWidth equals 75rem
 */
function initScale() {
  const computedFontSize = window.innerWidth / 750;
  document.body.style.fontSize = computedFontSize + 'px';
}


function regionalMask(left, top, width, height, opacity, color ) {
  const mask = document.getElementById('mask');
  const maskHeight = mask.offsetHeight;
  const maskWidth = mask.offsetWidth;

  color = color || '0, 0, 0';
  opacity = opacity || 0.8;

  mask.addEventListener('touchstart', e => {
    e.preventDefault();
  }, false);

  generateMaskBlock(0, 0, left, maskHeight, color, opacity, 'mask-left'); // left
  generateMaskBlock(left + width, 0, maskWidth - left - width, maskHeight, color, opacity, 'mask-right'); // right
  generateMaskBlock(left, 0, width, top, color, opacity, 'mask-top'); // top
  generateMaskBlock(left, top + height, width, maskHeight - height - top, color, opacity, 'mask-bottom'); // bottom
  generateMaskBlock(left, top, width, height, 'un-shadow'); // uns

  function generateMaskBlock(left, top, width, height, color, opacity, id) {  
    let dom = document.getElementById(id);

    if(!dom) {
      dom = document.createElement('div');
      dom.id = id;
      mask.appendChild(dom);
    }
  
    dom.className = 'mask-block';
    dom.style = `left:${left}rem;top:${top}rem;width:${width}rem;height:${height}rem;background:rgba(${color},${opacity})`;
    
  
    return dom;
  }
  
}

function updateMask () {
  let error;

  let args = ['left', 'top', 'width', 'height', 'opacity'].map(key => {
    let value = Number(document.getElementById('get-' + key).value);
    if(!value) {  
      error = true;
      alert(key + ' cannot be null');
    }
    return value
  });

  console.log(...args)
  !error && regionalMask(...args);
}
