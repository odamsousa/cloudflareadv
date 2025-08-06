import { component$, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
  useVisibleTask$(() => {
    const script = document.createElement("script")
    script.src = "/purah.js" // JavaScript deferido com funcionalidades do advertorial
    script.defer = true
    document.body.appendChild(script)
  })

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <div id="scroll-progress"></div>
          <div id="progress-label">0% lido</div>

          <!-- Seção de Notícia Urgente com ticker e relógio -->
          <div id="atomic-bn" role="region" aria-label="Notícias urgentes">
            <div id="atomic-bn-header">
              <span id="atomic-bn-urgent" aria-live="polite">
                <span class="bn-dot" aria-hidden="true"></span><span>URGENTE</span>
              </span>
              <h1 class="bn-title">NOTÍCIAS E SAÚDE</h1>
              <div id="atomic-bn-clock" role="timer" aria-atomic="true">
                <span id="bn-hour">--</span>:<span id="bn-minute">--</span>:<span id="bn-second">--</span>
              </div>
            </div>
            <div id="atomic-bn-ticker" aria-hidden="true">
              <div id="atomic-bn-content">URGENTE: ANVISA LIBERA CÁPSULA SUBLINGUAL QUE DEIXA A PELE ATÉ 10 ANOS MAIS JOVEM - URGENTE: ANVISA LIBERA CÁPSULA SUBLINGUAL QUE DEIXA A PELE ATÉ 10 ANOS MAIS JOVEM</div>
            </div>
          </div>

          <!-- Seção de logos "Como visto em" -->
          <div class="as-seen-on">
            <p>Também visto em:</p>
            <img src="https://imagedelivery.net/2xQlk6FBrQINAp7sBc0BKA/9726db6e-c2c9-4916-0195-99bd10b02400/public" alt="Discovery" loading="lazy" height="20" />
            <img src="https://imagedelivery.net/2xQlk6FBrQINAp7sBc0BKA/ba5e96db-f739-46c2-ac3b-704b7e561700/public" alt="Pequenas Empresas" loading="lazy" height="20" />
            <img src="https://imagedelivery.net/2xQlk6FBrQINAp7sBc0BKA/456e53fc-732f-491b-a159-eaef17846400/public" alt="Mais Acessado" loading="lazy" height="20" />
            <img src="https://imagedelivery.net/2xQlk6FBrQINAp7sBc0BKA/ff0ce7f0-bf0e-427c-a8cf-294f0e191100/public" alt="Outro" loading="lazy" height="20" />
          </div>

          <!-- Bloco do Advertorial (HTML completo gerado e estilizado) -->
          <div id="purah-advertorial">
            <div id="autor-info" class="visible">
              <img
                src="https://imagedelivery.net/2xQlk6FBrQINAp7sBc0BKA/65534c94-765f-4d79-d3f3-880e75e23100/public"
                alt="Dra. Heloísa Barreto"
                width="64"
                height="64"
                loading="lazy"
                decoding="async"
              />
              <div class="autor-dados">
                <p style="margin-top:0px; padding: 10px;"><strong>Por Dra. Heloísa Barreto</strong></p>
                <p style="font-size: 11px;padding:10px; margin-top: -22px;">Dermatologista e líder em pesquisas com nanotecnologia sublingual.</p>
              </div>
            </div>

    <div id="scroll-progress"></div>
    <div id="progress-label">0% lido</div>
    <!-- Breaking News Atômico – ticker inicia na borda, relógio instantâneo -->
    <div id="atomic-bn" role="region" aria-label="Notícias urgentes">
      <div id="atomic-bn-header">
        <span id="atomic-bn-urgent" aria-live="polite">
          <span class="bn-dot" aria-hidden="true"></span><span>URGENTE</span>
        </span>
        <h1 class="bn-title">NOTÍCIAS E SAÚDE</h1>
        <div id="atomic-bn-clock" role="timer" aria-atomic="true">
          <span id="bn-hour">--</span>:<span id="bn-minute">--</span>:<span id="bn-second">--</span>
        </div>
      </div>
      <div id="atomic-bn-ticker" aria-hidden="true">
        <div id="atomic-bn-content">URGENTE: ANVISA LIBERA CÁPSULA SUBLINGUAL QUE DEIXA A PELE ATÉ 10 ANOS MAIS JOVEM - URGENTE: ANVISA LIBERA CÁPSULA SUBLINGUAL QUE DEIXA A PELE ATÉ 10 ANOS MAIS JOVEM - URGENTE: ANVISA LIBERA CÁPSULA SUBLINGUAL QUE DEIXA A PELE ATÉ 10 ANOS MAIS JOVEM - URGENTE: ANVISA LIBERA CÁPSULA SUBLINGUAL QUE DEIXA A PELE ATÉ 10 ANOS MAIS JOVEM</div>
      </div>
    </div>

    <!-- Sessão "Como visto em" com logos personalizados -->
    <div class="as-seen-on">
      <p>Também visto em:</p>
      <img src="https://imagedelivery.net/2xQlk6FBrQINAp7sBc0BKA/9726db6e-c2c9-4916-0195-99bd10b02400/public" alt="Discovery" loading="lazy" height="20" />
      <img src="https://imagedelivery.net/2xQlk6FBrQINAp7sBc0BKA/ba5e96db-f739-46c2-ac3b-704b7e561700/public" alt="Pequenas Empresas" loading="lazy" height="20" />
      <img src="https://imagedelivery.net/2xQlk6FBrQINAp7sBc0BKA/456e53fc-732f-491b-a159-eaef17846400/public" alt="Mais Acessado" loading="lazy" height="20" />
      <img src="https://imagedelivery.net/2xQlk6FBrQINAp7sBc0BKA/ff0ce7f0-bf0e-427c-a8cf-294f0e191100/public" alt="Outro" loading="lazy" height="20" />
    </div>

    <div id="purah-advertorial">
      <!-- Informações do autor -->
      <div id="autor-info" class="visible">
        <img
          src="https://imagedelivery.net/2xQlk6FBrQINAp7sBc0BKA/65534c94-765f-4d79-d3f3-880e75e23100/public"
          alt="Dra. Heloísa Barreto"
          width="64"
          height="64"
          loading="lazy"
          decoding="async"
        />
        <div class="autor-dados">
          <p style="margin-top:0px; padding: 10px;"><strong>Por Dra. Heloísa Barreto</strong></p>
          <p style="font-size: 11px;padding:10px; margin-top: -22px;">Dermatologista e líder em pesquisas com nanotecnologia sublingual.</p>
        </div>
      </div>
      <!-- Strip de avaliação para prova social -->
      <div class="rating-strip visible">
        <span class="stars" aria-hidden="true">★★★★★</span>
        <span class="rating-text">4,9/5 (12.387 avaliações)</span>
      </div>
      <!-- Título principal -->
      <h1 style="margin:15px" class="visible">Ela rejuvenesceu 10 anos em 94 dias usando um tratamento novo que a indústria de cosméticos tentou censurar</h1>
      <p style="font-size: 17px; color: var(--cinza-texto); margin:10px; margin-top:-10px;" class="visible">Conheça a cápsula sublingual recém‑criada e o tratamento que foi censurado por 'risco comercial'</p>
      <p style="font-size: 14.5px; color: var(--cinza-texto);margin:10px; margin-top: -10px;" class="visible">16/07/2025 08h55 · Atualizado há 16 minutos</p>

      <!-- Resumo expansível -->
      <div class="resumo-wrapper visible">
        <div id="resumoHeader">
          <span class="resumo-label">Ver resumo</span><span class="resumo-icon">▼</span>
        </div>
        <div class="resumo-body">
          <ul>
            <li>Nova nano‑cápsula sublingual que combate as rugas, remove o melasma, atenua linhas de expressão e apaga manchas na pele acabou de chegar ao Brasil</li>
            <li>Neuza Rogrigues, de 62 anos, conta que após 181 dias de participação na pesquisa, sua própria irmã perguntou se ela “tinha feito plástica ou botox”.</li>
            <li>Erica Loppilato participou da pesquisa PURAH aos 52 anos e após 94 dias de tratamento suas células epiteliais apresentaram rejuvenescimento biológico confirmado de 10 anos.</li>
          </ul>
        </div>
      </div>

      <!-- Vídeo principal (MP4 carregado localmente) -->
      <div class="video-loop visible"><div style="position: relative; padding-top: 75.27173913043478%;">
  <iframe
    src="https://customer-p808i35lew3u4tym.cloudflarestream.com/3859db0a99e941899a08bf505f721eaa/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-p808i35lew3u4tym.cloudflarestream.com%2F3859db0a99e941899a08bf505f721eaa%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
    loading="lazy"
    style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
    allowfullscreen="true"
  ></iframe>
</div>
      </div>
      <p class="legenda-video">Érica Lopillato 'Paciente 033.' — Foto: Reprodução/Prontuário.</p>

      <!-- Narração e áudio player -->
      <div style="font-family: sans-serif; margin-bottom: 1px; padding: 10px; font-size: 11px; color: #000;">Aperte o 'Play' e ouça a narração oficial.</div>
      <div id="audio-noticia" style="display: flex; align-items: center; gap: 10px;">
        <button id="play-btn" style="border: none; background: none; color: #d32f2f; font-size: 24px; cursor: pointer;">▶︎</button>
        <div id="waveform" style="flex-grow: 1; max-width: 600px;"></div>
        <span id="audio-time" style="font-size: 14px; color: #d32f2f;">0:00</span>
        <button id="playback-rate" style="background: #d32f2f; color: #fff; padding: 4px 8px; border-radius: 6px; cursor: pointer; font-size: 12px;">1.0x</button>
      </div>
      <audio id="audio-element" data-src="https://purah.com.br/wp-content/uploads/2025/07/audiootimizado.mp3" preload="none" style="display: none;"></audio>

      <!-- Introdução -->
      <div style="font-size: 17px; line-height: 1.6; padding: 5px; margin-top: 20px;">
        <p>Dados oficiais do ClinicalTrials.gov revelam: <strong>mais de 70% dos tratamentos altamente eficazes são descartados por “falta de interesse comercial”.</strong></p>
        <p><span style="background: #f4d1ce; padding: 2px 4px; border-radius: 4px;">Sim, você entendeu corretamente: centenas de pesquisas com potencial revolucionário foram abandonadas simplesmente por serem rápidas e eficazes demais para gerar lucro.</span></p>
        <p>Minha pesquisa esteve à beira desse destino. <strong>O motivo?</strong> Um efeito nomeado de <span style="background: #f4d1ce; padding: 2px 4px; border-radius: 4px;">"Renascimento Estético".</span></p>
      </div>

      <!-- Citação 1 -->
      <div class="citacao-bloco">
        <div class="barra-top"></div>
        <p class="citacao-texto">“Você já parou de sorrir por vergonha do seu pescoço? Eu sim, quando minha pele começou a ceder, evitei fotos por anos. O vídeo à esquerda mostra a primeira semana do tratamento com a Dra. Barreto. O da direita mostra meu resultado, 94 dias depois. Uma imagem vale mil palavras, mas meu resultado vale uma vida inteira de felicidade.” — Érica Lopillato, paciente 033</p>
        <div class="barra-bottom"></div>
      </div>

      <div style="font-size: 17px; line-height: 1.6; padding: 5px; margin-top: 20px;">
        <p><strong>Érica Lopillato, paciente 033</strong>, obteve 10 anos de rejuvenescimento biológico em suas células epiteliais após <strong>94 dias de tratamento</strong>.</p>
        <p>Classificamos seu resultado como <strong>"exceção clínica"</strong>. Só não esperávamos que outra paciente teria o mesmo resultado, quase no mesmo tempo.</p>
        <p>Seu nome? <strong>Christie Anne Gonçalves, a 'paciente 244'</strong>. O prontuário <a href="https://purah.com.br" rel="noopener">PURAH</a> dela mostrou esses resultados:</p>
      </div>

      <!-- Prontuário -->
      <div id="purah-prontuario">
        <div class="prontuario-historico">
          <div class="bloco info-paciente">
            <div class="titulo-bloco">Detalhes do Tratamento</div>
            <div><strong>Dose:</strong> 1 dose sublingual/dia.</div>
            <div><strong>Tempo:</strong> 106 dias seguidos.</div>
            <div><strong>Idade:</strong> 54 anos.</div>
          </div>
          <div class="bloco">
            <div class="titulo-bloco">Aumento na produção</div>
            <div class="grafico-container">
              <div><div class="barra-vertical"><div class="barra-preenchimento-positivo" data-target="78.2%">+78,2%</div></div><div class="barra-label"><strong>Á. Hialurônico</strong></div></div>
              <div><div class="barra-vertical"><div class="barra-preenchimento-positivo" data-target="65.7%">+65,7%</div></div><div class="barra-label"><strong>Colágeno</strong></div></div>
              <div><div class="barra-vertical"><div class="barra-preenchimento-positivo" data-target="79.5%">+79,5%</div></div><div class="barra-label"><strong>Elastina</strong></div></div>
            </div>
          </div>
          <div class="bloco">
            <div class="titulo-bloco">Problemas combatidos</div>
            <div class="grafico-container">
              <div><div class="barra-vertical"><div class="barra-preenchimento-negativo" data-target="88.8%">-88,8%</div></div><div class="barra-label"><strong>Dermatite</strong></div></div>
              <div><div class="barra-vertical"><div class="barra-preenchimento-negativo" data-target="77.2%">-77,2%</div></div><div class="barra-label"><strong>Rosácea</strong></div></div>
              <div><div class="barra-vertical"><div class="barra-preenchimento-negativo" data-target="80.9%">-80,9%</div></div><div class="barra-label"><strong>Manchas</strong></div></div>
            </div>
          </div>
          <!-- Vídeo da paciente 244 -->
          <div class="video-loop" ><div style="position: relative; padding-top: 75.27173913043478%;">
  <iframe
    src="https://customer-p808i35lew3u4tym.cloudflarestream.com/a7ba244096ac402ba7d559ca04331074/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-p808i35lew3u4tym.cloudflarestream.com%2Fa7ba244096ac402ba7d559ca04331074%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
    loading="lazy"
    style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
    allowfullscreen="true"
  ></iframe>
</div>
          </div>
          <p class="legenda-video">Christie Anne 'Paciente 244.' — Foto: Reprodução/Prontuário.</p>
        </div>
      </div>

      <!-- Texto pós-prontuário -->
      <div style="font-size: 17px; line-height: 1.6; padding: 5px; margin-top: 20px;">
        <p>Duas voluntárias completamente diferentes, com o mesmo resultado. <strong>Não era uma exceção.</strong></p>
        <p><strong>Então o que era?</strong> Classificamos como <strong>'coincidência'</strong>, até que algo impressionante aconteceu.</p>
        <p><strong>Neuza Rodrigues, a 'paciente 077'.</strong> Uma voluntária de 62 anos provou o que acontece quando <strong>se usa o nosso tratamento por 181 dias.</strong></p>
      </div>

      <!-- Citação de Neuza -->
      <div class="citacao-bloco">
        <div class="barra-top"></div>
        <p class="citacao-texto">“Confesso que na primeira semana, eu cheguei sem nenhuma esperança. Só que na vigésima semana, o espelho me devolveu 20 anos. Minha pele renasceu completamente. Manchas sumiram, rugas desapareceram e meu pescoço voltou décadas no tempo. Minha irmã, incrédula, perguntou: ‘Neuza, foi Botox ou plástica?’ Eu apenas sorri. Sabia que tinha encontrado algo muito melhor: um renascimento real da minha pele e da minha autoestima.” — Neuza Rodrigues, paciente 077.</p>
        <div class="barra-bottom"></div>
      </div>

      <!-- Texto pós-citação Neuza -->
      <div style="font-size: 17px; line-height: 1.6; padding: 5px; margin-top: 20px;">
        <p>Não era exceção, nem coincidência, <strong>era o padrão da nossa tecnologia.</strong></p>
        <p><span style="background: #f4d1ce; padding: 2px 4px; border-radius: 4px;">Foi quando paramos de olhar o rosto e começamos a mapear o corpo inteiro.</span></p>
      </div>

      <!-- Mapa de calor -->
      <div id="mapa-calor">
        <h2>Como a nanotecnologia transformou Neuza?</h2>
        <p class="subtitulo">Clique nos ícones abaixo para descobrir</p>
        <img src="https://imagedelivery.net/2xQlk6FBrQINAp7sBc0BKA/6d93304b-c818-43dd-024f-fbd5bd743c00/public" alt="Mapa de Calor Corporal" width="720" loading="lazy" decoding="async" />
        <!-- Marcadores -->
        <details class="marker" ontoggle="this.parentNode.querySelectorAll('details').forEach(d=>{if(d!==this)d.removeAttribute('open')})" style="--marker-top-desktop:20%;--marker-left-desktop:50%;--marker-top-mobile:30%;--marker-left-mobile:50%;--balao-top-desktop:15%;--balao-left-desktop:-350%;--balao-top-mobile:-60%;--balao-left-mobile:-220%;"><summary><div class="balao"><div class="titulo-balao">Rosto/Pescoço</div><div class="subtitulo-balao"></div><div class="conteudo-extra">Firmeza:+85,6%<br /><lottie-player src="https://pub-ce9412b543ca4bc28e1df8a84765356b.r2.dev/Skin%20Lifting%20(4).json" background="transparent" speed="1" loop autoplay style="height:50px;"></lottie-player></div></div></summary></details>
        <details class="marker" ontoggle="this.parentNode.querySelectorAll('details').forEach(d=>{if(d!==this)d.removeAttribute('open')})" style="--marker-top-desktop:35%;--marker-left-desktop:50%;--marker-top-mobile:45%;--marker-left-mobile:50%;--balao-top-desktop:-130%;--balao-left-desktop:450%;--balao-top-mobile:-150%;--balao-left-mobile:310%;"><summary><div class="balao"><div class="titulo-balao">Colo/Tórax</div><div class="subtitulo-balao"></div><div class="conteudo-extra">Oxigenação dérmica +83%<br /><lottie-player src="https://lotties.purah.com.br/Molecular%20Skincare%20Science.json" background="transparent" speed="1" loop autoplay style="height:55px;"></lottie-player></div></div></summary></details>
        <details class="marker" ontoggle="this.parentNode.querySelectorAll('details').forEach(d=>{if(d!==this)d.removeAttribute('open')})" style="--marker-top-desktop:60%;--marker-left-desktop:29%;--marker-top-mobile:66%;--marker-left-mobile:28%;--balao-top-desktop:150%;--balao-left-desktop:-100%;--balao-top-mobile:100%;--balao-left-mobile:0%;"><summary><div class="balao"><div class="titulo-balao">Braço Esquerdo</div><div class="subtitulo-balao"></div><div class="conteudo-extra">-82% fotodano<br />-60% oxidação<br /><lottie-player src="https://lotties.purah.com.br/Elastic%20Skin%20(1).json" background="transparent" speed="1" loop autoplay style="height:60px;"></lottie-player></div></div></summary></details>
        <details class="marker" ontoggle="this.parentNode.querySelectorAll('details').forEach(d=>{if(d!==this)d.removeAttribute('open')})" style="--marker-top-desktop:60%;--marker-left-desktop:72%;--marker-top-mobile:66%;--marker-left-mobile:74%;--balao-top-desktop:150%;--balao-left-desktop:150%;--balao-top-mobile:100%;--balao-left-mobile:50%;"><summary><div class="balao"><div class="titulo-balao">Braço Direito</div><div class="subtitulo-balao"></div><div class="conteudo-extra">+48% Niacina<br />+42% Retinol<br /><lottie-player src="https://lotties.purah.com.br/Protective%20Skin%20Barrier%20(1).json" background="transparent" speed="1" loop autoplay style="height:70px;"></lottie-player></div></div></summary></details>
      </div>

      <!-- Vídeo da paciente 077 -->
      <div class="video-loop"><div style="position: relative; padding-top: 75.27173913043478%;">
  <iframe
    src="https://customer-p808i35lew3u4tym.cloudflarestream.com/2cc208a7e1b44de780a9c93e299cc443/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-p808i35lew3u4tym.cloudflarestream.com%2F2cc208a7e1b44de780a9c93e299cc443%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
    loading="lazy"
    style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
    allowfullscreen="true"
  ></iframe>
</div>
      </div>
      <p class="legenda-video">Neuza Rodrigues 'Paciente 077.' — Foto: Reprodução/Prontuário.</p>

      <!-- Linha do tempo explicativa -->
      <div style="font-size: 17px; line-height: 1.6; padding: 5px; margin-top: 20px;">
        <p>Os resultados clínicos das 250 <strong>voluntárias</strong> foram tão impressionantes que decidimos criar uma <strong>linha do tempo detalhando quando e como a metamorfose estética aconteceu</strong>.</p>
      </div>

      <!-- Linha do tempo -->
      <div class="atomic-timeline-section">
        <div class="timeline-header"><p class="atomic-subtitle"><span><strong>Linha do Tempo PURAH.</strong></span></p></div>
        <div class="timeline-track">
          <div class="timeline-card"><div class="timeline-lottie-date"><lottie-player src="https://lotties.purah.com.br/Peptides%20(2).json" background="transparent" speed="1" loop autoplay style="width:64px;height:64px;"></lottie-player></div><div class="timeline-day">Primeira Semana</div><h3 class="timeline-title">Ativação Sublingual Imediata</h3><p class="timeline-text">A cápsula começa a agir sob a língua com 98,7% de absorção imediata.</p></div>
          <div class="timeline-card"><div class="timeline-lottie-date"><lottie-player src="https://lotties.purah.com.br/Skin%20Filler%20(2).json" background="transparent" speed="1" loop autoplay style="width:64px;height:54px;"></lottie-player></div><div class="timeline-day">Décima Semana</div><h3 class="timeline-title">Pele Firme e Hidratada</h3><p class="timeline-text">Fibras de colágeno começam a se reorganizar naturalmente.</p></div>
          <div class="timeline-card"><div class="timeline-lottie-date"><lottie-player src="https://lotties.purah.com.br/Wrinkles%20(1).json" background="transparent" speed="1" loop autoplay style="width:84px;height:84px;"></lottie-player></div><div class="timeline-day">Vigésima Semana</div><h3 class="timeline-title">10 anos de rejuvenescimento</h3><p class="timeline-text">A pele completou a metamorfose e seu renascimento estético aconteceu.</p></div>
        </div>
      </div>

      <!-- Barras de resultados finais -->
      <div style="max-width: 700px; margin: 10px auto 10px auto; font-size: 17px; color: #2c2c2c; padding: 3px 18px;">
        <div class="barra"><div class="label">Clareamento no rosto:</div><div class="externa"><div class="interna" data-target="88%"></div></div><div class="explicacao">88% observaram clareamento no rosto</div></div>
        <div class="barra"><div class="label">Redução das rugas:</div><div class="externa"><div class="interna" data-target="81%"></div></div><div class="explicacao">81% afirmaram que houve redução</div></div>
        <div class="barra"><div class="label">Firmeza no pescoço e colo:</div><div class="externa"><div class="interna" data-target="79%"></div></div><div class="explicacao">79% das voluntárias notou melhora</div></div>
        <div class="barra"><div class="label">Efeitos colaterais</div><div class="externa"><div class="interna" data-target="0%"></div></div><div class="explicacao">0% das pacientes reportaram</div></div>
      </div>

      <!-- Tecnologia PURAH -->
      <div class="purah-tecnologia"><div class="purah-tecnologia__imagem"><img src="https://imagedelivery.net/2xQlk6FBrQINAp7sBc0BKA/a8b62821-4cfc-4525-db21-f9825d3f9a00/public" alt="Sede oficial da PURAH" width="720" height="405" loading="lazy" decoding="async" style="width: 100%; border-radius: 8px; display: block; margin: 0 auto 16px;" /></div><div style="font-size: 17px; line-height: 1.6; padding: 5px; margin-top: 20px;">Foram exatos 4 anos, unindo os maiores <strong>especialistas em nanotecnologia e dermatologia</strong> do mundo, com um único objetivo: <strong>desenvolver a fórmula mais avançada.</strong></p><div class="purah-tecnologia__grid"><div class="purah-tecnologia__card"><div class="purah-tecnologia__pizza" style="background: conic-gradient(var(--azul-escuro) 0deg 90deg, #e0e0e0 90deg 360deg);"></div><div class="purah-tecnologia__nome">Peptídeos de Cobre</div><div class="purah-tecnologia__descricao-componente">Estimula colágeno e elastina, regenerando fibras profundas.</div></div><div class="purah-tecnologia__card"><div class="purah-tecnologia__pizza" style="background: conic-gradient(var(--azul-escuro) 90deg 180deg, #e0e0e0 180deg 360deg);"></div><div class="purah-tecnologia__nome">Resveratrol Nano</div><div class="purah-tecnologia__descricao-componente">Antioxidante potente que combate radicais livres.</div></div><div class="purah-tecnologia__card"><div class="purah-tecnologia__pizza" style="background: conic-gradient(var(--azul-escuro) 180deg 270deg, #e0e0e0 270deg 360deg);"></div><div class="purah-tecnologia__nome">Ácido Hialurônico</div><div class="purah-tecnologia__descricao-componente">Hidrata profundamente, restaurando volume e firmeza.</div></div><div class="purah-tecnologia__card"><div class="purah-tecnologia__pizza" style="background: conic-gradient(var(--azul-escuro) 270deg 360deg, #e0e0e0 360deg 360deg);"></div><div class="purah-tecnologia__nome">Coenzima Q10 Nano</div><div class="purah-tecnologia__descricao-componente">Repara danos celulares e acelera regeneração.</div></div></div></div></div>

      <!-- Seção da censura -->
      <div class="purah-censura"><h2 style="margin:15px;margin-top:30px;">A Censura</h2><div style="font-size: 17px; line-height: 1.6; padding: 5px; margin:5px;"><p>A Dra. Daphyne Ribas, co‑responsável técnica na pesquisa da fórmula de <a href="https://purah.com.br" style="color: #b71c1c; font-weight: 700; text-decoration: none;">PURAH</a>, enviou nosso material ao FDA para autorização de comercialização.</p></div><div class="citacao-bloco"><div class="barra-top"></div><p class="citacao-texto">“Nosso tratamento foi rejeitado pela FDA não por questões de segurança ou eficácia, mas porque ele era eficiente demais para gerar lucros expressivos. Decidimos imediatamente buscar aprovação no segundo maior mercado de beleza do mundo: o Brasil” – complementou a Dra. Daphyne Ribas.</p><div class="barra-bottom"></div></div><div class="citacao-bloco"><div class="barra-top"></div><p class="citacao-texto">“Após rigorosas análises e 140 dias de espera, PURAH foi aprovada. Chegando ao Brasil sem aumento de preço, garantindo acesso exclusivo à fórmula mais eficaz do mundo atualmente.” – afirmou a médica.</p><div class="barra-bottom"></div></div>

      <!-- Grade comparativa -->
      <div class="purah-grid"><div class="purah-grid__card"><div style="width:90px;height:90px;margin:0 auto 8px;"><lottie-player src="https://lotties.purah.com.br/Mesotherapy.json" background="transparent" speed="1" loop autoplay style="width:100%;height:100%;"></lottie-player></div><div class="purah-grid__titulo" style="font-weight:600;color:#333;margin-bottom:12px;">Botox Injetável</div>Rugas<div class="purah-grid__barra"><div class="purah-grid__barra-interna" data-target="70%"></div></div>Flacidez<div class="purah-grid__barra"><div class="purah-grid__barra-interna" data-target="30%"></div></div>Preço<div class="purah-grid__barra"><div class="purah-grid__barra-interna" data-target="70%"></div></div></div><div class="purah-grid__card"><div style="width:90px;height:90px;margin:0 auto 8px;"><lottie-player src="https://lotties.purah.com.br/Beauty%20Mask.json" background="transparent" speed="1" loop autoplay style="width:100%;height:100%;"></lottie-player></div><div class="purah-grid__titulo" style="font-weight:600;color:#333;margin-bottom:12px;">Peeling de Fenol</div>Rugas<div class="purah-grid__barra"><div class="purah-grid__barra-interna" data-target="70%"></div></div>Flacidez<div class="purah-grid__barra"><div class="purah-grid__barra-interna" data-target="20%"></div></div>Preço<div class="purah-grid__barra"><div class="purah-grid__barra-interna" data-target="80%"></div></div></div><div class="purah-grid__card"><div style="width:90px;height:90px;margin:0 auto 8px;"><lottie-player src="https://lotties.purah.com.br/Lifting%20Without%20Surgery%20(2).json" background="transparent" speed="1" loop autoplay style="width:100%;height:100%;"></lottie-player></div><div class="purah-grid__titulo" style="font-weight:600;color:#333;margin-bottom:12px;">Cápsulas Sublinguais PURAH</div>Rugas<div class="purah-grid__barra"><div class="purah-grid__barra-interna" data-target="89%"></div></div>Flacidez<div class="purah-grid__barra"><div class="purah-grid__barra-interna" data-target="93%"></div></div>Preço<div class="purah-grid__barra"><div class="purah-grid__barra-interna" data-target="20%"></div></div></div></div>

      <!-- Seção de garantia -->
      <div class="garantia-section"><h2 style="margin:10px;margin-top:40px;padding: 10px;">PURAH OFERECE GARANTIA!</h2>      <div style="font-size: 17px; line-height: 1.6; padding: 20px;">Basta entrar em contato com a empresa no email <strong>clientes@purah.com.br</strong> ou diretamente no número oficial do site <a href="https://purah.com.br">purah.com.br</a> caso não veja resultados com o produto e eles devolvem 100% do seu dinheiro.</p></div>

      <!-- CTA com imagem -->
      <div class="cta-image"><a href="https://purah.com.br" target="_blank" rel="noopener"><img style="padding:15px;" src="https://imagedelivery.net/2xQlk6FBrQINAp7sBc0BKA/30374046-a6a5-442c-91e4-9f2ff12f2900/public" alt="PURAH Garantia 90 Dias" width="990" height="557" loading="lazy" decoding="async" /></a></div>

      <!-- Validade dinâmica -->
      <div id="validade-dinamica" style="max-width: 700px; margin: 3px auto; text-align: center;"><span style="color: #b71c1c; font-weight: 900; font-size: 20px; text-decoration: underline;">VÁLIDO ATÉ: <span id="data-hoje">22/07/2025</span></span></div>

      <!-- Informações finais e CTA -->
      <div style="max-width: 700px; margin: 22px auto; font-size: 17px; color: #2c2c2c; padding: 0 15px;"><p><span style="color: #b71c1c; font-weight: 700;">A marca decidiu</span> oferecer uma garantia exclusiva de <strong>reembolso total de 90 dias</strong> para leitoras e leitores do portal que testarem hoje sua fórmula patenteada.</p><div style="margin: 24px 0;"><h3 style="background-color: #f4d1ce; padding: 10px 14px; border-radius: 8px; color: #111; font-size: 15px; line-length: 1.4;"><strong><i>INFORMAÇÃO IMPORTANTE:</i></strong> <i>Devido à repercussão do estudo censurado, os estoques da <span style="color: #b71c1c; font-weight: 700;">PURAH</span> no Brasil estão praticamente esgotados.</i></h3></div><p>Apenas hoje o valor promocional será: <strong style="color: #2e7d32;">R$89,38 por unidade (com 40% de desconto)</strong> + <strong style="color: #d32f2f;">garantia de 90 dias</strong>.</p><p style="margin-top: 20px;"><a href="https://purah.com.br" style="text-decoration: underline; color: #d32f2f; font-weight: 700; font-size: 18px;">Clique abaixo para garantir a sua PURAH enquanto ainda restam unidades disponíveis.</a></p><div class="trust-badges"><div><span>🔒</span>Pagamento Seguro</div><div><span>✅</span>Aprovação ANVISA</div><div><span>🛡️</span>Garantia 90 dias</div></div><div id="countdown">Oferta termina em <span id="countdown-timer">15:00</span></div><!-- Cupom box --><div class="coupon-box">Use o cupom <span id="coupon-code">PURAH40</span> e ganhe 40% OFF <button id="copy-coupon">Copiar</button></div><div id="coupon-toast" aria-live="polite">Cupom copiado!</div><div class="purchase-steps"><div><span>1️⃣</span>Escolha o kit</div><div><span>2️⃣</span>Informe seus dados</div><div><span>3️⃣</span>Receba em casa</div></div></div>
      
      <!-- Caixa final (oferta exclusiva) -->
      <div class="final-box"><img src="https://imagedelivery.net/2xQlk6FBrQINAp7sBc0BKA/a23265f5-23ad-4e15-6e46-e986460bc500/public" alt="PURAH Produto" width="340" height="340" loading="lazy" decoding="async" /><div><h2>OFERTA EXCLUSIVA PARA NOSSAS LEITORAS.</h2>      
      <!-- Aviso de cidade (geolocalização) -->
      <div id="shipping-notice" class="city-notice">Entrega rápida para <span id="user-city">sua região</span></div><p class="offer"><strong style="color: #c62828;">-40%OFF</strong> &amp; <strong style="color: #c62828;">94 DIAS DE GARANTIA</strong>.</p><p class="stock">* Estoque limitado a <u>apenas este lote</u>. Restam <span id="stock-number">24</span> unidades.</p></div><div style="margin: 10px 10px;"><a href="https://purah.com.br" target="_blank" rel="noopener" class="cta-button"><lottie-player data-src="https://purah.com.br/wp-content/uploads/2025/07/Click-2.json" background="transparent" speed="1" loop autoplay style="width: 50px; height: 50px;"></lottie-player><span class="lock">🔒</span> <span>QUERO MEU PURAH!</span></a><p class="cta-note">🔒 Clique seguro</p></div></div>
    </div><!-- fim do advertorial -->

    <!-- Placeholder de comentários (carregado sob demanda) -->
    <div id="comments-placeholder" class="comments-container"><div class="comments-header"><div class="count">5 COMENTÁRIOS</div><div class="subtext">Role para carregar comentários…</div></div><div class="divider"></div><p style="font-size: 14px; color: #555; text-align: center;">Carregando comentários…</p></div><template id="comments-template"><div class="comments-container"><div class="comments-header"><div class="count">5 COMENTÁRIOS</div><div class="subtext">Os comentários são de responsabilidade exclusiva de seus autores e não representam a opinião deste site. Se achar algo que viole os termos de uso, denuncie. Leia as perguntas mais frequentes para saber o que é impróprio ou ilegal.</div></div><div class="divider"></div><div class="comment"><img class="avatar" src="https://purah.com.br/wp-content/uploads/2025/05/images-4-1.jpg.webp" alt="Foto Simone de Oliveira" width="40" height="40" loading="lazy" decoding="async" /><div class="content"><div class="name">Simone de Oliveira</div><div class="text">Pra falar a verdade eu comprei só por causa dessa matéria, nunca tinha visto nada tão bem explicado e documentado, faz 7 dias que comecei a usar, mais disposição de acordar cedo eu tô tendo kkkk depois vou postar nos stories do meu face meus resultados</div><div class="meta"><span>Curtir</span>·<span>Responder</span>·<span>1min</span></div></div><div class="reaction"><div class="icons"><span class="like">👍</span></div><span>4</span></div></div><div class="comment"><img class="avatar" src="https://purah.com.br/wp-content/uploads/2025/05/depoimento2.jpg.webp" alt="Foto Nicolle Almeida" width="40" height="40" loading="lazy" decoding="async" /><div class="content"><div class="name">Nicolle Almeida</div><div class="text">Nooossa nunca vi um artigo tão bem escrito assim, fiquei impressionada, já comprei tanta coisa que não funcionou, mas se a Doutora Barreto escreve e documenta tão bem eu preciso testar o produto que ela trouxe pro Brasil.</div><div class="meta"><span>Curtir</span>·<span>Responder</span>·<span>4min</span></div></div><div class="reaction"><div class="icons"><span class="like">👍</span><span class="heart">❤️</span></div><span>11</span></div></div><div class="comment"><img class="avatar" src="https://purah.com.br/wp-content/uploads/2025/05/images-1-1-1.jpg.webp" alt="Foto Maria Aparecida Vasconcelos" width="40" height="40" loading="lazy" decoding="async" /><div class="content"><div class="name">Maria Aparecida Vasconcelos</div><div class="text">Comprei só pra ver se chegava mesmo, depois de 3 dias tava na minha casa, primeira vez que recebo uma entrega tão rápido e olha que eu moro na Bahia</div><div class="meta"><span>Curtir</span>·<span>Responder</span>·<span>12min</span></div></div><div class="reaction"><div class="icons"><span class="like">👍</span><span class="heart">❤️</span></div><span>126</span></div></div><div class="comment"><img class="avatar" src="https://purah.com.br/wp-content/uploads/2025/05/depoimento3.jpg.webp" alt="Foto Izalete Pereira" width="40" height="40" loading="lazy" decoding="async" /><div class="content"><div class="name">Izalete Pereira</div><div class="text">Faz 1 mês que tô usando, minha filha já perguntou se fiz peeling, eu disse que não, ansiosa pra me olhar no espelho no dia 94.</div><div class="meta"><span>Curtir</span>·<span>Responder</span>·<span>16min</span></div></div><div class="reaction"><div class="icons"><span class="like">👍</span></div><span>3</span></div></div><div class="no-more-comments">Este conteúdo não recebe mais comentários.</div></div></template>
      <!-- Perguntas Frequentes -->
      <div class="faq-section"><h2>Perguntas Frequentes</h2><details><summary>Como devo usar as cápsulas PURAH?</summary><p>Coloque uma cápsula sob a língua diariamente e aguarde a completa absorção para melhores resultados.</p></details><details><summary>Quando verei os primeiros resultados?</summary><p>A maioria das mulheres nota firmeza e luminosidade nas primeiras semanas, com transformação total até o dia 94.</p></details><details><summary>Qual é a garantia oferecida?</summary><p>Você tem 90 dias para testar. Se não estiver satisfeita, devolvemos 100% do seu investimento.</p></details><details><summary>O produto é aprovado pela ANVISA?</summary><p>Sim, PURAH possui aprovação da ANVISA e segue todos os padrões de segurança.</p></details></div>

    <!-- Rodapé institucional -->
    <footer style="max-width: 720px; margin: 40px auto 0; padding: 30px 20px; border-top: 1px solid #ddd; font-family: sans-serif; font-size: 13px; line-length: 1.6; color: #555; background: transparent; text-align: center;"><p style="margin-bottom: 12px; font-size: 12px;">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade é do nosso site. Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Os resultados podem variar de pessoa para pessoa. Os depoimentos apresentados neste site podem ser reais ou fictícios, usados apenas para fins ilustrativos. As informações fornecidas não constituem aconselhamento médico e não substituem a orientação de um profissional de saúde. Consulte seu médico antes de iniciar qualquer nova rotina nutricional ou de bem‑estar. Este conteúdo é um advertorial, e não deve ser interpretado como artigo jornalístico ou publicação editorial. Produto isento de registro, conforme regulamentação da RDC 240/2018 da ANVISA. PURAH é uma marca da Branding Caps, que não apoia a automedicação. <span style="text-decoration: underline; cursor: pointer;">Termos de uso</span> | <span style="text-decoration: underline; cursor: pointer;">Política de privacidade</span></p><p style="margin-top: 20px; font-size: 11px; color: #555;">©2025 PURAH | BRANDING CAPS LTDA<br />Rua Comendador Francisco Rodrigues Neves, 295, Letra A, Sala 02 – Centro, Campo Belo – MG, Brasil.<br />CEP: 37270‑000 | CNPJ: 47.889.955/0001-05</p></footer>

    <!-- Exit modal -->
    <div id="exit-modal"><div class="exit-content"><button id="exit-close">×</button><p><strong>Espere!</strong> Garanta sua PURAH com <strong>40% OFF</strong> e <strong>90 dias de garantia</strong>.</p><a href="https://purah.com.br" target="_blank" rel="noopener">QUERO MINHA PURAH</a></div></div>
    <!-- CTA flutuante -->
    <div id="floating-cta"><a href="https://purah.com.br" target="_blank" rel="noopener"><span class="lock">🔒</span>GARANTIR MEU PURAH AGORA</a><div id="viewer-count"></div><div id="floating-countdown"></div></div>

          
        `,
      }}
    />
  );
});
