var setTheme = localStorage.getItem('theme')
console.log('theme:', setTheme)

if (setTheme == null){
  swapStyle('light.css')
}else{
  swapStyle(setTheme)
}

function swapStyle(sheet){
  document.getElementById('mystylesheet').href = sheet
  localStorage.setItem('theme', sheet)
}


/*
var setTheme = localStorage.getItem('theme')
if (setTheme == null){
  swapStyles('light.css')
}else{
  swapStyles(setTheme)
}
  

function swapStyles(sheet){
  document.getElementById('mystylesheet').href = sheet
  localStorage.setItem('theme', sheet)
}
*/