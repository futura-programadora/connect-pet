// Menu hambúrguer do header — controla abrir/fechar e o estado de acessibilidade.
document.addEventListener('DOMContentLoaded', () => {
  const botao = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navegacao');

  if (!botao || !nav) return;

  const fecharMenu = () => {
    nav.classList.remove('aberto');
    botao.classList.remove('aberto');
    botao.setAttribute('aria-expanded', 'false');
  };

  const alternarMenu = () => {
    const vaiAbrir = !nav.classList.contains('aberto');
    nav.classList.toggle('aberto', vaiAbrir);
    botao.classList.toggle('aberto', vaiAbrir);
    botao.setAttribute('aria-expanded', String(vaiAbrir));
  };

  botao.addEventListener('click', alternarMenu);

  // fecha o menu ao clicar em qualquer link dentro dele
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', fecharMenu);
  });

  // fecha o menu se a tela crescer pra versão desktop (ex: girar o celular)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 680) fecharMenu();
  });

  // fecha com a tecla Esc, útil pra quem navega por teclado
  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') fecharMenu();
  });
});