function toggleMode() {
    const html = document.documentElement
    const img = document.querySelector('#profile img')

    html.classList.toggle('light')// função toggle retira ou adiciona

    if (html.classList.contains('light')) {
        img.setAttribute('src', './Assets/avatar_dia.png')
        img.setAttribute('alt', 'foto de uma lago com o nascer do sol e árvores ao lado!')
    } else {
        img.setAttribute('src', './Assets/avatar_noite.png')
        img.setAttribute('alt', 'Foto de uma estrada a noite!')
    }
}

