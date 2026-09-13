import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AspectRatio } from '../types';
import { ASPECT_RATIOS } from '../constants/aspectRatios';
import { X, Monitor, Layout, FileText, Square, Smartphone, Check } from 'lucide-react';

interface AspectRatioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRatio: (ratio: AspectRatio) => void;
}

export const AspectRatioModal: React.FC<AspectRatioModalProps> = ({
  isOpen,
  onClose,
  onSelectRatio
}) => {
  if (!isOpen) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor': return <Monitor className="w-6 h-6" />;
      case 'Layout': return <Layout className="w-6 h-6" />;
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'Square': return <Square className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      default: return <Layout className="w-6 h-6" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl p-6 sm:p-8 rounded-3xl glass-panel-orange border border-white/80 shadow-2xl z-10"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-orange-600 rounded-full hover:bg-orange-100/50"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              📐 원하는 포트폴리오 비율을 선택하세요
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              제출 및 발표 용도에 부합하는 비율을 클릭하면 해당 규격으로 에디터가 자동 세팅됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ASPECT_RATIOS.map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  onSelectRatio(option.id);
                  onClose();
                }}
                className="glass-panel p-5 rounded-2xl text-left border border-white/70 hover:border-orange-500 hover:bg-orange-500/10 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {renderIcon(option.iconName)}
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-orange-100 text-orange-700 font-extrabold text-xs">
                      {option.ratioText}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-orange-600">
                    {option.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};