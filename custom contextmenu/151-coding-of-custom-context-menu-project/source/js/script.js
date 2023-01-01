let body = document.body
body.addEventListener('contextmenu', bodyhandler)
body.addEventListener('click', clickhandler)
body.addEventListener('keypress', hidehandler)



function bodyhandler(e) {
  e.preventDefault()
  let contextMenu = document.getElementById('contextMenu')



  if (contextMenu.style.display === 'none') {


    contextMenu.style.left = e.pageX + 'px'
    contextMenu.style.top = e.pageY + 'px'

    contextMenu.style.display = 'block'
  } else {
      contextMenu.style.left = e.pageX + 'px'
    contextMenu.style.top = e.pageY + 'px'
  }






}

function clickhandler(e){
  let contextMenu = document.getElementById('contextMenu')
  contextMenu.style.display = 'none'
  if (contextMenu.style.display === 'block' &&  e.keyCode ==='27') {
    contextMenu.style.display = 'none'
  }
}
// hidehandler

function hidehandler(e){
  let contextMenu = document.getElementById('contextMenu')

  // console.log(e.keyCode);
  if (e.keyCode === 115) {
    contextMenu.style.display = 'none'
  }
}
