import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageSliceProps {
  src: string;
  alt: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const ImageSlice: React.FC<ImageSliceProps> = ({ src, alt, isFirst, isLast }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full bg-slate-100 flex flex-col items-center justify-center text-slate-400 p-12 text-center border-b border-white min-h-[300px]">
        <ImageOff className="w-12 h-12 mb-3 text-slate-300" />
        <p className="font-bold text-slate-600 mb-2">画像が見つかりません</p>
        <div className="bg-slate-200 px-3 py-2 rounded text-xs font-mono text-slate-600 break-all mb-4 max-w-full">
          {src}
        </div>
        <div className="text-xs text-slate-500 text-left space-y-1">
          <p>以下の点を確認してください：</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>フォルダ名が <code>images</code> であるか</li>
            <li>ファイル名が <code>1.jpg</code> (小文字) であるか</li>
            <li><code>public</code> フォルダがある場合は、その中に <code>images</code> フォルダを移動してください</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full select-none">
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto block align-bottom ${
          isFirst ? 'rounded-t-none' : ''
        } ${isLast ? 'rounded-b-none' : ''}`}
        loading={isFirst ? "eager" : "lazy"}
        draggable={false}
        onError={() => setError(true)}
      />
    </div>
  );
};

export default ImageSlice;