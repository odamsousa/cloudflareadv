import { component$, isDev } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';

/**
 * Componente raiz da aplicação.
 *
 * Este componente encapsula a árvore de roteamento dentro de
 * `<QwikCityProvider>`, define elementos no `<head>` global (metadados,
 * preconexões, manifesto e scripts necessários) e renderiza a saída dos
 * componentes de página através de `<RouterOutlet />`.
 */
export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Descubra a cápsula sublingual PURAH que rejuvenesce a pele em até 10 anos, com garantia de 90 dias e estudos clínicos comprovados."
        />
        {/* Pré‑conexões e DNS prefetch conforme seu HTML original */}
        <link rel="preconnect" href="https://purah.com.br/advpura" />
        <link rel="preconnect" href="https://cdn-ildpfhj.nitrocdn.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="prefetch" href="https://purah.com.br" />
        <link rel="dns-prefetch" href="//purah.com.br/advpura" />
        <link rel="dns-prefetch" href="//cdn-ildpfhj.nitrocdn.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//nitroscripts.com" />
        <link rel="dns-prefetch" href="//unpkg.com" />

        {/* Inclui o manifesto da PWA somente em produção */}
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}

        {/* Importa a biblioteca Lottie para habilitar o elemento <lottie-player> */}
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/@lottiefiles/lottie-player@1.5.7/dist/lottie-player.js"
        ></script>

        {/* Popula <title>, <meta>, <link> e <style> específicos via Qwik City */}
        <RouterHead />
      </head>
      <body lang="pt-BR">
        <RouterOutlet />
        {/* Carrega o script que busca purah_original.html e expõe window.purahHtml/PurahScripts */}
        <script src="/purah.js" defer></script>
      </body>
    </QwikCityProvider>
  );
});
