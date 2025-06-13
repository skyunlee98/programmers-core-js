function insertBefore(node, text){
  if(isString(node)) node = getNode(node);
  node.insertAdjacentHTML('beforbegin', text)
}

function insertFirst(node, text){
  if(isString(node)) node = getNode(node);
  node.insertAdjacentHTML('afterbegin', text)
}

function insertLast(node, text){
  if(isString(node)) node = getNode(node);
  node.insertAdjacentHTML('beforend', text)
}

function insertAfter(node, text){
  if(isString(node)) node = getNode(node);
  node.insertAdjacentHTML('afterend', text)
}