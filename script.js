const install = document.getElementById('install');
const tg = document.getElementById('link_tg');
const btn = document.getElementById('button_install');
const btnTg = document.getElementById('button_tg');
const installLeft = document.getElementById('install_left')
const installRight = document.getElementById('install_right')

btnTg.onclick = function(){
    installRight.style.backgroundColor = 'white';
    installRight.style.borderTopLeftRadius = '25px';
    installRight.style.paddingLeft = '10px';
    installLeft.style.backgroundColor = '#E5E2DD';
    install.style.display = 'none';
    tg.style.display = 'flex'
}

btn.onclick = function(){
    installLeft.style.backgroundColor = 'white';
    installLeft.style.borderTopRightRadius = '25px';
    installLeft.style.paddingRight = '10px';
    installRight.style.backgroundColor = '#E5E2DD';
    tg.style.display = 'none';
    install.style.display = 'flex'
}