import {
  a as e,
  E as t,
  d as o,
  c as r,
  b as s,
  e as a,
  F as n,
  f as d,
  o as i,
  g as c,
  h as l,
  i as u,
  j as p,
  k as m
} from './vendor.a5f43483.js'
!(function () {
  const e = document.createElement('link').relList
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e)
    new MutationObserver((e) => {
      for (const o of e)
        if ('childList' === o.type)
          for (const e of o.addedNodes) 'LINK' === e.tagName && 'modulepreload' === e.rel && t(e)
    }).observe(document, { childList: !0, subtree: !0 })
  }
  function t(e) {
    if (e.ep) return
    e.ep = !0
    const t = (function (e) {
      const t = {}
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
        'use-credentials' === e.crossorigin
          ? (t.credentials = 'include')
          : 'anonymous' === e.crossorigin
          ? (t.credentials = 'omit')
          : (t.credentials = 'same-origin'),
        t
      )
    })(e)
    fetch(e.href, t)
  }
})()
const f = e.create({ baseURL: 'https://api.github.com', timeout: 2e4 })
f.interceptors.request.use(
  (e) => e,
  (e) => Promise.reject(e)
),
  f.interceptors.response.use(
    (e) => e,
    (e) => {
      if (e.response && e.response.data) {
        const o = e.response.status,
          r = e.response.data.message
        t.error(`Code: ${o}, Message: ${r}`), console.error('[Axios Error]', e.response)
      } else t.error(`${e}`)
      return Promise.reject(e)
    }
  )
var h = (e, t) => {
  for (const [o, r] of t) e[o] = r
  return e
}
const g = o({
    setup() {
      f.get('/users/XPoet')
        .then((e) => {
          console.log('res:', e)
        })
        .catch((e) => {
          console.log('err:', e)
        })
    }
  }),
  v = r(
    '<p data-v-8f9dadd8> Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-8f9dadd8>VSCode</a> + <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-8f9dadd8>Volar</a></p><p data-v-8f9dadd8>See <code data-v-8f9dadd8>README.md</code> for more information.</p><p data-v-8f9dadd8><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-8f9dadd8> Vite Docs </a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-8f9dadd8>Vue 3 Docs</a></p><p data-v-8f9dadd8> Edit <code data-v-8f9dadd8>components/HelloWorld.vue</code> to test hot module replacement. </p>',
    4
  )
var b = h(g, [
  [
    'render',
    function (e, t, o, r, s, a) {
      return v
    }
  ],
  ['__scopeId', 'data-v-8f9dadd8']
])
const y = d('img', { alt: 'Vue logo', src: './assets/logo.03d6d6da.png' }, null, -1),
  E = o({
    setup: (e) => (e, t) =>
      i(), s(n, null, [y, a(b, { msg: 'Hello Vue 3 + TypeScript + Vite' })], 64)
  }),
  _ = {},
  k = [
    { path: '/', name: 'Home', component: {} },
    { path: '/vuex', name: 'Vuex', component: {} },
    {
      path: '/axios',
      name: 'Axios',
      component: () => {
        return (
          (e = () => import('./axios.ddfba3bc.js')),
          (t = []) && 0 !== t.length
            ? Promise.all(
                t.map((e) => {
                  if ((e = `./${e}`) in _) return
                  _[e] = !0
                  const t = e.endsWith('.css'),
                    o = t ? '[rel="stylesheet"]' : ''
                  if (document.querySelector(`link[href="${e}"]${o}`)) return
                  const r = document.createElement('link')
                  return (
                    (r.rel = t ? 'stylesheet' : 'modulepreload'),
                    t || ((r.as = 'script'), (r.crossOrigin = '')),
                    (r.href = e),
                    document.head.appendChild(r),
                    t
                      ? new Promise((e, t) => {
                          r.addEventListener('load', e), r.addEventListener('error', t)
                        })
                      : void 0
                  )
                })
              ).then(() => e())
            : e()
        )
        var e, t
      }
    }
  ],
  V = c({ history: l(), routes: k }),
  j = { count: 0 }
var L = u({
  state: () => j,
  mutations: {
    increment(e) {
      e.count++
    }
  },
  actions: {
    increment(e) {
      e.commit('increment')
    }
  },
  getters: { double: (e) => 2 * e.count }
})
p(E).use(m).use(V).use(L).mount('#app')
