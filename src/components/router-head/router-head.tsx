import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * Componente RouterHead, responsável por preencher o conteúdo da tag <head>.
 *
 * Ele extrai as informações de título, metas, links, estilos e scripts
 * através do hook useDocumentHead() e adiciona a tag canonical via useLocation().
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      {/* Título da página */}
      {head.title && <title>{head.title}</title>}

      {/* Link canônico para SEO */}
      <link rel="canonical" href={loc.url.href} />

      {/* Metadados e favicon básicos */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {/* Metas dinâmicas declaradas nas páginas */}
      {head.meta.map((m) => (
        <meta
          key={m.name ?? m.property ?? m.content}
          {...m}
        />
      ))}

      {/* Links dinâmicos (preloads, prefetcheados etc.) declarados nas páginas */}
      {head.links.map((l) => (
        <link
          key={l.href ?? l.rel}
          {...l}
        />
      ))}

      {/* Estilos dinâmicos gerados pelo Qwik City */}
      {head.styles.map((s) => (
        <style
          key={s.props?.id ?? s.props?.nonce}
          {...s.props}
          dangerouslySetInnerHTML={s.style}
        />
      ))}

      {/* Scripts dinâmicos definidos via DocumentHead.scripts */}
      {head.scripts.map((s) => (
        <script
          key={s.props?.id ?? s.props?.nonce}
          {...s.props}
          dangerouslySetInnerHTML={s.script}
        />
      ))}
    </>
  );
});
