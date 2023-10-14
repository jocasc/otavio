var hamburger = document.getElementById('hamburger')
var closeBtn = document.getElementById('closebtn')
var header = document.getElementById('myHeader')
var logo = document.getElementById('logo')
var article = document.getElementById('article')
var loguinho = document.getElementById('loguinho')

hamburger.addEventListener('click', (e) => {
    // document.getElementById('myNav').style.width = '100%'
    document.getElementById('myNav').style.height = '100%'
    document.body.style.overflow = "hidden";
    console.log('funfou')
})

closeBtn.addEventListener('click', (e) => {
    // document.getElementById('myNav').style.width = '0%'
    document.getElementById('myNav').style.height = '0%'
    document.body.style.overflow = "auto";
})

//loguinho.style.display = 'none'
// article.style.marginTop = '25px'
loguinho.style.display = 'none'
var sticky = header.offsetTop
window.addEventListener('scroll', () => {
    if(window.scrollY > (sticky + 110)){
        header.classList.add('sticky')
        article.style.marginTop = '225px'
        logo.style.visibility = 'hidden'
        loguinho.style.display = 'block'
        loguinho.style.marginLeft = '15px'
     } else {
         header.classList.remove('sticky')
         article.style.marginTop = '25px'
         logo.style.visibility = 'visible'
         loguinho.style.display = 'none'
     }

})



