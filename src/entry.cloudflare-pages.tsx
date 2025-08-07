/*
 * Entry point para Cloudflare Pages em produção.
 * Define o handler de fetch que integra Qwik City e o plano de rotas.
 */
import {
  createQwikCity,
  type PlatformCloudflarePages,
} from '@builder.io/qwik-city/middleware/cloudflare-pages';
import qwikCityPlan from '@qwik-city-plan';
import render from './entry.ssr';

// Personalize a interface Platform caso precise incluir bindings adicionais
export interface Platform extends PlatformCloudflarePages {}

// Estende a interface global de plataforma usada pelo Qwik City
declare global {
  interface QwikCityPlatform extends Platform {}
}

// Cria o handler de fetch para Cloudflare Pages
const fetch = createQwikCity({ render, qwikCityPlan });

export { fetch };
