import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      {/* Background decoration */}
      <div className="sea-bg"></div>

      <main className="flex flex-col items-center min-h-screen px-6 py-12 md:py-24 max-w-5xl mx-auto space-y-32">
        
        {/* 1. Hero Section */}
        <section id="hero" className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 mt-12 md:mt-24">
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              フロントエンドエンジニアを<br className="hidden md:block"/>目指す大学生
            </h1>
            <p className="text-xl md:text-2xl text-sky-600 dark:text-sky-400 font-medium">
              Jane Doe
            </p>
            <p className="text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed text-lg">
              UI/UXにこだわったWebアプリ開発が得意です。綺麗なデザインと滑らかなアニメーションを実装するのが大好きです。
            </p>
            
            {/* Social Links Placeholder */}
            <div className="flex gap-4 pt-4">
              {['GitHub', 'X', 'Zenn'].map((social) => (
                <a key={social} href="#" className="glass px-6 py-2 rounded-full font-medium hover:bg-sky-50 dark:hover:bg-slate-800 transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 to-blue-600 rounded-[40%_60%_60%_40%/40%_50%_50%_60%] animate-wave opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src="/okinawa_sea_profile_1780027093367.png"
              alt="Profile"
              fill
              className="object-cover animate-wave border-4 border-white/50 dark:border-white/10 shadow-2xl z-10"
              priority
            />
          </div>
        </section>

        {/* 2. About Me */}
        <section id="about" className="w-full space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <span className="text-sky-500">~</span> About Me <span className="text-sky-500">~</span>
          </h2>
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-sky-600 dark:text-sky-400">Profile</h3>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li><strong className="text-slate-900 dark:text-white">所属:</strong> ○○大学 情報学部 3年 (2026年卒予定)</li>
                  <li><strong className="text-slate-900 dark:text-white">趣味:</strong> 沖縄の海を眺めること、個人開発</li>
                  <li><strong className="text-slate-900 dark:text-white">関心:</strong> フロントエンド技術、UI/UXデザイン</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-sky-600 dark:text-sky-400">Experience</h3>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li>• 株式会社○○ サマーインターン (2024.08)</li>
                  <li>• △△ハッカソン 優秀賞受賞 (2024.10)</li>
                  <li>• 自作TUIツールの開発・公開</li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-slate-600 dark:text-slate-300 leading-relaxed text-center">
              「使っていて心地よい」と思えるプロダクトを作ることが目標です。<br className="hidden md:block"/>
              現在はNext.jsやReactを中心に、モダンなフロントエンド技術をキャッチアップしています。
            </p>
          </div>
        </section>

        {/* 3. Skills */}
        <section id="skills" className="w-full space-y-8">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <span className="text-sky-500">~</span> Skills <span className="text-sky-500">~</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="glass rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-6 text-center">Frontend</h3>
              <div className="space-y-4">
                <div className="bg-white/40 dark:bg-black/20 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">React / Next.js</span>
                    <span className="text-sky-500">★★★★★</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">個人開発で1年以上使用。App Routerも対応可能。</p>
                </div>
                <div className="bg-white/40 dark:bg-black/20 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">TypeScript</span>
                    <span className="text-sky-500">★★★★☆</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">型安全な開発を意識しています。</p>
                </div>
                <div className="bg-white/40 dark:bg-black/20 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Tailwind CSS</span>
                    <span className="text-sky-500">★★★★★</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">レスポンシブデザインの実装が得意です。</p>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="glass rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-6 text-center">Backend</h3>
              <div className="space-y-4">
                <div className="bg-white/40 dark:bg-black/20 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Node.js</span>
                    <span className="text-sky-500">★★★☆☆</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Express等でAPIサーバーの構築経験あり。</p>
                </div>
                <div className="bg-white/40 dark:bg-black/20 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Go / Rust</span>
                    <span className="text-sky-500">★★☆☆☆</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">現在学習中。TUIツールの自作などに挑戦。</p>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="glass rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-6 text-center">Tools & Env</h3>
              <div className="space-y-4">
                <div className="bg-white/40 dark:bg-black/20 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Git / GitHub</span>
                    <span className="text-sky-500">★★★★☆</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">チーム開発でのPR/Review経験あり。</p>
                </div>
                <div className="bg-white/40 dark:bg-black/20 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Docker</span>
                    <span className="text-sky-500">★★★☆☆</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">基本的な開発環境の構築が可能。</p>
                </div>
                <div className="bg-white/40 dark:bg-black/20 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Figma</span>
                    <span className="text-sky-500">★★★☆☆</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">簡単なUI設計やワイヤーフレーム作成。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Works */}
        <section id="works" className="w-full space-y-8">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <span className="text-sky-500">~</span> Works <span className="text-sky-500">~</span>
          </h2>
          
          <div className="relative w-full">
            {/* Carousel Container */}
            <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory no-scrollbar">
              
              {/* Project 1 */}
              <div className="glass rounded-3xl overflow-hidden min-w-[85vw] md:min-w-[600px] flex-shrink-0 snap-center group">
                <div className="relative w-full h-64 md:h-80 overflow-hidden">
                  <Image 
                    src="/project_task_tui_1780027120564.png"
                    alt="Task Management TUI"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold">TaskMaster TUI</h3>
                    <div className="flex gap-2 text-sm">
                      <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 rounded-full">Rust</span>
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">Terminal</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    ターミナル上で直感的にタスク管理ができるTUIツールです。Vimライクなキーバインドに対応し、開発者の生産性向上を目指しました。
                  </p>
                  <div>
                    <h4 className="font-semibold text-sm text-sky-600 dark:text-sky-400 mb-1">工夫した点</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      状態管理の設計を見直し、大量のタスクを読み込んでも描画がカクつかないようにレンダリング処理を最適化しました。
                    </p>
                  </div>
                  <div className="pt-4 flex gap-4">
                    <a href="#" className="flex-1 text-center py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium hover:opacity-90 transition-opacity">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="glass rounded-3xl overflow-hidden min-w-[85vw] md:min-w-[600px] flex-shrink-0 snap-center group">
                <div className="relative w-full h-64 md:h-80 overflow-hidden">
                  <Image 
                    src="/project_tech_blog_1780027145425.png"
                    alt="Tech Blog"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold">The Insightful Byte</h3>
                    <div className="flex gap-2 text-sm">
                      <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 rounded-full">Next.js</span>
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">Tailwind</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    モダンで美しいタイポグラフィとグラスモーフィズムを取り入れた個人技術ブログのテンプレート。
                  </p>
                  <div>
                    <h4 className="font-semibold text-sm text-sky-600 dark:text-sky-400 mb-1">工夫した点</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      静的生成(SSG)を活用し、Lighthouseスコアで100点を達成。また、MDXを用いてリッチな記事フォーマットを実現しました。
                    </p>
                  </div>
                  <div className="pt-4 flex gap-4">
                    <a href="#" className="flex-1 text-center py-2 bg-sky-500 text-white rounded-xl font-medium hover:bg-sky-600 transition-colors">
                      Live Demo
                    </a>
                    <a href="#" className="flex-1 text-center py-2 glass rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-4 text-slate-400 text-sm flex items-center gap-2 animate-pulse">
              <span>← スワイプして見る →</span>
            </div>
          </div>
        </section>

      </main>
      
      <footer className="text-center py-8 text-slate-500 text-sm">
        <p>© 2026 Jane Doe. All rights reserved.</p>
      </footer>
    </>
  );
}
