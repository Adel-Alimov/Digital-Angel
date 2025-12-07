const install = document.getElementById('install');
const tg = document.getElementById('link_tg');
const btn = document.getElementById('button_install');
const btnTg = document.getElementById('button_tg');
const installLeft = document.getElementById('install_left')
const installRight = document.getElementById('install_right')

const inactiveColor = '#e5e4df'; 
const activeColor = '#f0f0f0';
btnTg.onclick = function(){
    installRight.style.backgroundColor = activeColor;
    installRight.style.borderTopLeftRadius = '10px';
    installRight.style.borderTopRightRadius = '0px';

    installLeft.style.backgroundColor = inactiveColor;
    installLeft.style.borderTopRightRadius = '0px';
    installLeft.style.borderTopLeftRadius = '10px';

    install.style.display = 'none';
    tg.style.display = 'flex';
}

btn.onclick = function(){
    installLeft.style.backgroundColor = activeColor;
    installLeft.style.borderTopRightRadius = '10px';
    installLeft.style.borderTopLeftRadius = '0px';

    installRight.style.backgroundColor = inactiveColor;
    installRight.style.borderTopLeftRadius = '0px';
    installRight.style.borderTopRightRadius = '10px';

    tg.style.display = 'none';
    install.style.display = 'flex';
    install.style.fontWeight = '800'
}
