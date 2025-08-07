import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

/**
 * Página principal do advertorial.
 *
 * Esta implementação injeta dinamicamente o conteúdo HTML proveniente do arquivo
 * `purah.js`. O script global expõe `window.purahHtml` contendo todo o
 * markup da página original. Ao montar o componente no cliente, essa
 * estrutura é copiada para o contêiner `#purah-container` através de
 * `innerHTML`.
 */
export default component$(() => {
  // useVisibleTask$ executa apenas no cliente após o componente tornar-se visível.
  useVisibleTask$(() => {
    // Função recursiva para aguardar o carregamento de window.purahHtml e realizar a injeção
    function tryInject() {
      if (typeof window === "undefined") return;
      const html = (window as any).purahHtml;
      if (!html) {
        // Ainda não há HTML carregado, tenta novamente em breve
        setTimeout(tryInject, 30);
        return;
      }
      const container = document.getElementById("purah-container");
      if (!container) {
        setTimeout(tryInject, 30);
        return;
      }
      // Injeta o HTML
      container.innerHTML = html;
      const scripts: string[] | undefined = (window as any).purahScripts;
      if (scripts && Array.isArray(scripts)) {
        // Executa os scripts no próximo ciclo para garantir que o DOM esteja pronto
        setTimeout(() => {
          scripts.forEach((code: string) => {
            try {
              // eslint-disable-next-line no-eval
              eval(code);
            } catch (err) {
              console.error("Erro ao executar script do advertorial:", err);
            }
          });
          // Dispara manualmente DOMContentLoaded e load para acionar event listeners
          try {
            document.dispatchEvent(new Event("DOMContentLoaded"));
            window.dispatchEvent(new Event("load"));
          } catch {
            // Ignora erros
          }
          // Remove os scripts para evitar execução duplicada
          delete (window as any).purahScripts;
        }, 0);
      }
    }
    // Inicia a verificação
    tryInject();
  });

  return <div id="purah-container"></div>;
});

export const head: DocumentHead = {
  title:
    "Cápsula sublingual rejuvenesce 10 anos de pele em 94 dias – Estudo PURAH",
  meta: [
    {
      name: "description",
      content:
        "Descubra a cápsula sublingual PURAH que rejuvenesce a pele em até 10 anos, com garantia de 90 dias e estudos clínicos comprovados.",
    },
  ],
};
