const staticPaths = new Set(["/.DS_Store","/_headers","/_redirects","/audio/narracao.m4a","/favicon.svg","/lotties/beauty_mask.json","/lotties/click_2.json","/lotties/elastic_skin_1.json","/lotties/lifting_without_surgery_2.json","/lotties/mesotherapy.json","/lotties/molecular_skincare_science.json","/lotties/peptides_2.json","/lotties/protective_skin_barrier_1.json","/lotties/skin_filler_2.json","/lotties/skin_lifting_4.json","/lotties/wrinkles_1.json","/manifest.json","/purah.js","/purah_original.html","/q-manifest.json","/robots.txt","/sitemap.xml"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };