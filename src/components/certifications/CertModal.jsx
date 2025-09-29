import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CertModal({ cert, onClose }) {
  if (!cert) return null;

  const canEmbed = cert.link && (cert.link.includes('credly.com') || cert.link.includes('oracle.com'));
  const [embedFailed, setEmbedFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    setEmbedFailed(false);
    setLoaded(false);
    if (canEmbed) {
      // if iframe doesn't load within 2s, treat as failed (many providers block embedding)
      timerRef.current = setTimeout(() => setEmbedFailed(true), 2000);
    }
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [cert?.link]);

  const handleIframeLoad = () => {
    setLoaded(true);
    clearTimeout(timerRef.current);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <motion.div
        className="relative z-10 bg-gray-900 text-white rounded-lg shadow-xl max-w-4xl w-full mx-4 p-4"
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold">{cert.name}</h3>
            <div className="text-sm text-gray-400">{cert.issuer} {cert.year ? `• ${cert.year}` : ''}</div>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-gray-300">✕</button>
        </div>

        {canEmbed && !embedFailed ? (
          <div className="w-full h-80 bg-black rounded overflow-hidden relative">
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-gray-300">Loading preview…</div>
              </div>
            )}
            <iframe title={cert.name} src={cert.link} className="w-full h-full" onLoad={handleIframeLoad} />
          </div>
        ) : (
          <div className="w-full h-80 flex items-center justify-center bg-gray-800 rounded">
            <div className="text-center text-gray-300">
              <div className="mb-2">Preview not available inline.</div>
              {cert.link ? (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded text-white">
                  Open Badge
                </a>
              ) : (
                <div className="text-sm text-gray-400">No external link available.</div>
              )}
            </div>
          </div>
        )}

        <div className="mt-4 text-sm text-gray-300">{cert.code ? `Credential ID: ${cert.code}` : ''}</div>
      </motion.div>
    </div>
  );
}
