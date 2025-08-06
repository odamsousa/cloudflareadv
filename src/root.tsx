import { component$, isDev } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        {/* Meta padrão */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Descubra a cápsula sublingual PURAH que rejuvenesce a pele em até 10 anos, com garantia de 90 dias e estudos clínicos comprovados."
        />
        {/* Pré‑conexões para melhorar performance */}
        <link rel="preconnect" href="https://purah.com.br/advpura" />
        <link rel="preconnect" href="https://cdn-ildpfhj.nitrocdn.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net/" />
        <link rel="prefetch" href="https://purah.com.br" />
        {/* DNS prefetch para origens terceiras */}
        <link rel="dns-prefetch" href="//purah.com.br/advpura" />
        <link rel="dns-prefetch" href="//cdn-ildpfhj.nitrocdn.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//nitroscripts.com" />
        <link rel="dns-prefetch" href="//unpkg.com" />
        {!isDev && (
          <link rel="manifest" href={`${import.meta.env.BASE_URL}manifest.json`} />
        )}
        {/* Cabeçalho controlado pelo roteador */}
        <RouterHead />
      </head>
      <body lang="pt-BR">
        <RouterOutlet />
        {/* Script que carregará o HTML original e popula window.purahHtml */}
        <script src="/purah.js" defer></script>
      </body>
    </QwikCityProvider>
  );
});
