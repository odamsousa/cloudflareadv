/**
 * Script para carregar e injetar o conteúdo do advertorial PURAH.
 *
 * Este arquivo assume que o HTML original do advertorial (incluindo
 * markup e scripts) foi salvo como `purah_original.html` dentro da
 * pasta `public` do projeto. Ao carregar a página, o script busca
 * esse arquivo, extrai o corpo e executa os scripts em ordem, de
 * forma que a página seja reproduzida exatamente como no site de
 * referência. O resultado final é exposto via `window.purahHtml`,
 * utilizado pelo componente Qwik para renderizar o conteúdo.
 */
(() => {
  function parseHtml(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const bodyHtml = doc.body ? doc.body.innerHTML : '';
    const scripts = Array.from(doc.querySelectorAll('script'))
      .map((el) => el.textContent || '');
    return { bodyHtml, scripts };
  }

  async function loadPurahAdvertorial() {
    try {
      const response = await fetch('/purah_original.html', { cache: 'reload' });
      if (!response.ok) {
        throw new Error(
          `Falha ao carregar o advertorial (status ${response.status})`,
        );
      }
      const html = await response.text();
      const { bodyHtml, scripts } = parseHtml(html);
      // Define o corpo para ser injetado posteriormente no componente Qwik
      window.purahHtml = bodyHtml;
      // Armazena scripts para execução posterior, após a injeção
      window.purahScripts = scripts;
    } catch (err) {
      console.error('Erro ao carregar o advertorial:', err);
    }
  }

  if (document.readyState === 'complete') {
    loadPurahAdvertorial();
  } else {
    window.addEventListener('load', () => loadPurahAdvertorial());
  }
})();
