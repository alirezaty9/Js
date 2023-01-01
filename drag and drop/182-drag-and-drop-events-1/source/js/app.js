function dragStartHandler(e){
    e.dataTransfer.setData('elemId',e.target.id)
}

function dropHandler(e){
    let item=e.dataTransfer.getData('elemId')
       let itemId= document.getElementById(item)
       e.target.append(itemId)
}

function dragOverHandler(e){
    e.preventDefault()
   


}