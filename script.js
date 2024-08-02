const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header")
const menuLinks = document.querySelectorAll(".menu__link")

var temaSalvo = localStorage.getItem('tema');
var firsttime = true;


function salvarTema(tema) {
    localStorage.setItem('tema', tema);
}


function changeTheme() {
    
    const currentTheme = rootHtml.getAttribute("data-theme");

    var tooltip = document.createElement('div');
    tooltip.textContent = 'Texto da caixa de texto';

    
    if (currentTheme === "dark") {
        rootHtml.setAttribute("data-theme", "light");
        tooltip.textContent = 'Lumos';
        salvarTema('light')
    }
    else {
        rootHtml.setAttribute("data-theme", "dark");
        tooltip.textContent = 'Nox';
        salvarTema('dark')
    }
    tooltip.classList.add('tooltip');

    toggleTheme.classList.toggle('bi-sun')
    toggleTheme.classList.toggle('bi-moon-stars')

    tooltip.style.left = (event.clientX - 50) + 'px'; // Adiciona 50px para que não fique exatamente em cima do cursor
    tooltip.style.top = (event.clientY + 10) + 'px'; // Adiciona 10px para que não fique exatamente em cima do cursor

    // Adicionando a caixa de texto ao corpo do documento
    document.body.appendChild(tooltip);

    // Removendo a caixa de texto após 2 segundos
    setTimeout(function() {
        tooltip.remove();
    }, 300);
}

toggleTheme.addEventListener('click', changeTheme)

accordionHeaders.forEach(header => {

    header.addEventListener("click", () => {
        
        const accordionItem = header.parentElement;
        const accorActive = accordionItem.classList.contains("active");

        if (accorActive == true) {
            
            accordionItem.classList.remove("active");
        }
        else {
            
            accordionItem.classList.add("active")
        }
    })
})


menuLinks.forEach(item => {
    
    item.addEventListener("click", () => {
        
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active")
    })
})

if (temaSalvo==="dark") {
    document.documentElement.setAttribute('data-theme', temaSalvo);
}
else {
    document.documentElement.setAttribute('data-theme', temaSalvo);

}


if (firsttime) {
    
    rootHtml.setAttribute("data-theme", "dark");
    salvarTema('dark')

    firsttime = false;
}


  // Captura o referer da página anterior
  const reff = document.referrer;        
        
  // Faz uma requisição ao backend
  fetch('https://backend-test-sable.vercel.app/api/count', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Origin': reff, // Cabeçalho Referer
          'Url' : window.location.href
      }
  })  





