import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-gray-900 dark:text-white">MeuSite</span>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#sobre" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Sobre</Link>
              <Link href="#recursos" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Recursos</Link>
              <Link href="#contato" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contato</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Construa seu site <span className="text-blue-600 dark:text-blue-400">profissional</span> em minutos
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Next.js 14 + Tailwind + TypeScript. Deploy grátis na Vercel. Pronto para produção desde o primeiro commit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Deploy na Vercel
              </Link>
              <Link
                href="#recursos"
                className="w-full sm:w-auto px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center"
              >
                Ver Recursos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tudo que você precisa
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stack moderna, configurada e otimizada para performance, SEO e experiência do desenvolvedor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Performance',
                desc: 'Next.js 14 com App Router, Server Components e otimizações automáticas de imagem e fonte.'
              },
              {
                icon: '🎨',
                title: 'Design System',
                desc: 'Tailwind CSS com dark mode nativo, design tokens e componentes reutilizáveis.'
              },
              {
                icon: '🔒',
                title: 'Type Safety',
                desc: 'TypeScript estrito em todo o projeto. Catch bugs em tempo de build, não em produção.'
              },
              {
                icon: '🚀',
                title: 'Deploy Zero-Config',
                desc: 'Push para GitHub → Vercel detecta e deploya. Preview deployments em cada PR.'
              },
              {
                icon: '📱',
                title: 'Responsivo',
                desc: 'Mobile-first com breakpoints Tailwind. Funciona perfeitamente em qualquer dispositivo.'
              },
              {
                icon: '♿',
                title: 'Acessível',
                desc: 'HTML semântico, ARIA labels, focus management e cores com contraste WCAG AA.'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Por que este stack?
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>Next.js é o framework React mais usado em produção no mundo. Empresas como Netflix, Uber, TikTok e a própria Vercel rodam Next.js em escala.</p>
                <p>Tailwind CSS elimina CSS customizado — você estiliza com classes utilitárias direto no JSX. Menos context switching, mais velocidade.</p>
                <p>TypeScript captura erros antes do runtime. Com strict mode ativo, você refatora com confiança.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
              <p className="opacity-90 mb-6">Clone, personalize e deploye em 5 minutos.</p>
              <div className="font-mono text-sm opacity-80 space-y-1">
                <p>{'git clone <seu-repo>'}</p>
                <p>cd meu-site</p>
                <p>npm install</p>
                <p>npm run dev</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Pronto para deploy?</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Suba para o GitHub, conecte na Vercel e tenha seu site no ar com HTTPS, CDN global e preview deployments automáticos.
          </p>
          <Link
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Deploy Grátis na Vercel
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">MeuSite</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Template Next.js + Tailwind + TypeScript para deploy instantâneo.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Links</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Next.js Docs</a></li>
                <li><a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Tailwind CSS</a></li>
                <li><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Vercel Platform</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Comandos</h4>
              <ul className="space-y-2 text-sm font-mono text-gray-600 dark:text-gray-400">
                <li>npm run dev</li>
                <li>npm run build</li>
                <li>npm run start</li>
                <li>npm run lint</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Deploy</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Push para main → Vercel builda e deploya automaticamente. Cada PR ganha preview URL.
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024 MeuSite. Construído com Next.js 14, Tailwind CSS e TypeScript.
          </div>
        </div>
      </footer>
    </main>
  )
}
