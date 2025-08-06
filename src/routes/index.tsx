import { component$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

/**
 * Página principal do advertorial.
 *
 * Este componente injeta dinamicamente o conteúdo HTML proveniente do arquivo
 * `purah.js`. O script global expõe `window.purahHtml` contendo todo o
 * markup da página original. Ao montar o componente no cliente, essa
 * estrutura é copiada para o contêiner `#purah-container` através de
 * `innerHTML`.
 */
export default component$(() => {
  useVisibleTask$(() => {
    if (typeof window !== 'undefined' && (window as any).purahHtml) {
      const container = document.getElementById('purah-container');
      if (container) {
        container.innerHTML = (window as any).purahHtml;
      }
    }
  });

  return <div id="purah-container"></div>;
});

export const head: DocumentHead = {
  title:
    'Cápsula sublingual rejuvenesce 10 anos de pele em 94 dias – Estudo PURAH',
  meta: [
    {
      name: 'description',
      content:
        'Descubra a cápsula sublingual PURAH que rejuvenesce a pele em até 10 anos, com garantia de 90 dias e estudos clínicos comprovados.',
    },
  ],
};
