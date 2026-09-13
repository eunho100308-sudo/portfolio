import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Layout, Type, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

interface HeroLandingProps {
  onStartCreate: () => void;
  onOpenAuth: () => void;
  isLoggedIn: boolean;
}

export const HeroLanding: React.FC<HeroLandingProps> = ({
  onStartCreate,
  onOpenAuth,
  isLoggedIn
}) => {
  return (
    <div className="relative min-h-[calc(100vh-65px)] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
      
      {/* Background Liquid Glass Blobs & Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-orange-400/40 to-amber-300/30 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-gradient-to-br from-orange-500/30 via-amber-200/40 to-white/60 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-orange border border-orange-300/70 shadow-sm mb-6"
      >
        <Sparkles className="w-4 h-4 text-orange-600 animate-spin" style={{ animationDuration: '8s' }} />
        <span className="text-xs sm:text-sm font-bold text-orange-700 tracking-wide">
          2026 Liquid Glass UI Portfolio Builder
        </span>
      </motion.div>

      {/* Main Animated Catchphrase */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15]"
        >
          <span className="block mb-2 text-slate-800">
            나만의 가치를 빛내는
          </span>
          <span className="inline-block relative">
            <motion.span
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-sm"
            >
              간편하고 쉽게 쓰는 포트폴리오
            </motion.span>
            
            {/* Underline Glass Glow */}
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-2 left-0 h-2 bg-gradient-to-r from-orange-500/80 via-amber-400 to-orange-300 rounded-full blur-[1px]"
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          원하는 <span className="text-orange-600 font-bold">비율 선택(16:9, 4:3, A4, 1:1)</span>부터 
          <span className="text-orange-600 font-bold"> 폰트, 글자 크기, 사진 커스텀</span>까지!
          <br className="hidden sm:inline" />
          투명하고 영롱한 리퀴드 글래스 디자인으로 포트폴리오를 빠르게 만들어보세요.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={onStartCreate}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-btn font-extrabold text-lg flex items-center justify-center gap-3 group shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-amber-200" />
            <span>포트폴리오 작성하기</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {!isLoggedIn && (
            <button
              onClick={onOpenAuth}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl glass-btn-secondary font-bold text-base flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.2 9 5 12 5z"/>
                <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
                <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 10.8 0 12s.7 2.3 1.9 4.7l3.7-2.9z"/>
                <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.2-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z"/>
              </svg>
              <span>구글로 로그인</span>
            </button>
          )}
        </motion.div>
      </div>

      {/* Feature Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="glass-panel p-6 rounded-3xl group hover:border-orange-300 transition-all hover:-translate-y-1">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center mb-4">
            <Layout className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">1. 원하는 비율 선택</h3>
          <p className="text-slate-600 text-sm">16:9, 4:3, A4 세로 문서, 1:1 정방형 등 용도별 선택 지원.</p>
        </div>

        <div className="glass-panel p-6 rounded-3xl group hover:border-orange-300 transition-all hover:-translate-y-1">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
            <Type className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">2. 폰트 & 사진 커스텀</h3>
          <p className="text-slate-600 text-sm">Pretendard 등 모던 폰트와 크기, 사진 배치를 실시간 조절.</p>
        </div>

        <div className="glass-panel-orange p-6 rounded-3xl group hover:border-orange-400 transition-all hover:-translate-y-1">
          <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center mb-4 shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">3. Liquid Glass UI</h3>
          <p className="text-slate-700 text-sm">주황색 오렌지 빛과 반투명 유리의 완벽한 투명감 조화.</p>
        </div>
      </motion.div>
    </div>
  );
};