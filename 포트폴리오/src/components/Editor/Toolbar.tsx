import React from 'react';
import { CanvasElement } from '../../types';
import { AVAILABLE_FONTS } from '../../constants/aspectRatios';
import { Type, Image as ImageIcon, Sparkles, AlignLeft, AlignCenter, AlignRight, Bold, Italic } from 'lucide-react';

interface ToolbarProps {
  selectedElement: CanvasElement | null;
  onUpdateElement: (updated: Partial<CanvasElement>) => void;
  onOpenImageModal: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  selectedElement,
  onUpdateElement,
  onOpenImageModal
}) => {
  if (!selectedElement) {
    return (
      <div className="glass-panel px-6 py-3 rounded-2xl flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>💡 캔버스 위의 요소(텍스트, 이미지, 카드)를 클릭하여 폰트 및 스타일을 조절하세요.</span>
      </div>
    );
  }

  return (
    <div className="glass-panel-orange px-5 py-3 rounded-2xl flex flex-wrap items-center justify-between gap-4 border border-orange-200">
      
      {/* Font Family Selection */}
      <div className="flex items-center gap-2">
        <Type className="w-4 h-4 text-orange-600" />
        <span className="text-xs font-bold text-slate-700">폰트:</span>
        <select
          value={selectedElement.fontFamily}
          onChange={(e) => onUpdateElement({ fontFamily: e.target.value })}
          className="glass-input px-3 py-1.5 rounded-xl text-xs font-bold text-slate-800 cursor-pointer"
        >
          {AVAILABLE_FONTS.map(font => (
            <option key={font.id} value={font.id}>{font.name}</option>
          ))}
        </select>
      </div>

      {/* Font Size Selection */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-slate-700">크기:</span>
        <input
          type="number"
          min={10}
          max={96}
          value={selectedElement.fontSize}
          onChange={(e) => onUpdateElement({ fontSize: Number(e.target.value) })}
          className="w-16 glass-input px-2 py-1 rounded-xl text-xs font-bold text-center text-slate-800"
        />
        <span className="text-xs text-slate-500">px</span>
      </div>

      {/* Color Picker */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-slate-700">색상:</span>
        <input
          type="color"
          value={selectedElement.color}
          onChange={(e) => onUpdateElement({ color: e.target.value })}
          className="w-7 h-7 rounded-lg cursor-pointer border-0 bg-transparent"
        />
      </div>

      {/* Image Change Button */}
      {(selectedElement.type === 'image' || selectedElement.type === 'project') && (
        <button
          onClick={onOpenImageModal}
          className="px-3 py-1.5 rounded-xl bg-orange-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md hover:bg-orange-600 transition-colors"
        >
          <ImageIcon className="w-4 h-4" />
          <span>사진 변경</span>
        </button>
      )}

      {/* Glass Effect Toggle */}
      <button
        onClick={() => onUpdateElement({ glassEffect: !selectedElement.glassEffect })}
        className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 border transition-all ${
          selectedElement.glassEffect
            ? 'bg-orange-600 text-white border-orange-700 shadow-sm'
            : 'bg-white/80 text-slate-700 border-orange-200 hover:bg-orange-50'
        }`}
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>글래스 효과 {selectedElement.glassEffect ? 'ON' : 'OFF'}</span>
      </button>
    </div>
  );
};