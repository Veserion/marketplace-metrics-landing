import React, { useState, useRef } from 'react';
import { UploadCloud, X } from "lucide-react";

export default function ImageUploadBox({ src, label, hint, className = '', imageClassName = '' }) {
  const [img, setImg] = useState(null);
  const [srcFailed, setSrcFailed] = useState(false);
  const inputRef = useRef();
  const imageSrc = img || (!srcFailed ? src : null);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    setImg(url);
  };

  const onDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden border-2 border-primary/30 bg-white group ${className}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      {imageSrc ? (
        <>
          <img
            src={imageSrc}
            alt={label}
            className={`w-full h-full object-cover ${imageClassName}`}
            onError={() => {
              if (!img && src) setSrcFailed(true);
            }}
          />
          {img && (
            <button
              onClick={() => setImg(null)}
              className="absolute top-2 right-2 bg-white/90 rounded-full p-1 shadow hover:bg-white transition"
            >
              <X className="w-4 h-4 text-foreground" />
            </button>
          )}
        </>
      ) : (
        <div
          className="flex flex-col items-center justify-center gap-3 p-8 min-h-[200px] cursor-pointer hover:bg-secondary/30 transition"
          onClick={() => inputRef.current?.click()}
        >
          <div className="w-12 h-12 rounded-xl gradient-bp flex items-center justify-center shadow-sm">
            <UploadCloud className="w-6 h-6 text-white" />
          </div>
          <div className="text-center">
            <p className="font-semibold text-foreground text-sm">{label}</p>
            {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
            <p className="text-xs text-muted-foreground mt-2">Перетащите или нажмите для загрузки</p>
          </div>
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files[0])}
      />
    </div>
  );
}
