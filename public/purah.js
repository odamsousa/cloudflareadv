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
  /**
   * Converte uma string HTML em um objeto contendo o corpo e os
   * scripts embutidos. Utiliza DOMParser para manipular o HTML
   * inteiramente no lado do cliente.
   *
   * @param {string} html Documento HTML completo
   * @returns {{ bodyHtml: string, scripts: string[] }}
   */
  function parseHtml(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const bodyHtml = doc.body ? doc.body.innerHTML : '';
    const scripts = Array.from(doc.querySelectorAll('script'))
      .map((el) => el.textContent || '');
    return { bodyHtml, scripts };
  }

  /**
   * Faz o fetch do arquivo `purah_original.html` localizado na mesma
   * origem. Após o download, popula `window.purahHtml` com o conteúdo
   * do corpo e executa sequencialmente todos os scripts encontrados.
   * Caso ocorra algum erro, ele será reportado no console.
   */
  async function loadPurahAdvertorial() {
    try {
      const response = await fetch('/purah_original.html', { cache: 'reload' });
      if (!response.ok) {
        throw new Error(`Falha ao carregar o advertorial (status ${response.status})`);
      }
      const html = await response.text();
      const { bodyHtml, scripts } = parseHtml(html);
      window.purahHtml = bodyHtml;
      // Executa cada script na ordem original
      for (const code of scripts) {
        try {
          // eslint-disable-next-line no-eval
          eval(code);
        } catch (err) {
          console.error('Erro ao executar script do advertorial:', err);
        }
      }
    } catch (err) {
      console.error('Erro ao carregar o advertorial:', err);
    }
  }

  // Aguarda o carregamento total da página para iniciar o fetch
  if (document.readyState === 'complete') {
    loadPurahAdvertorial();
  } else {
    window.addEventListener('load', () => loadPurahAdvertorial());
  }
})();
