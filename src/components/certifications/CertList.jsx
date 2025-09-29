import React, { useState, useEffect } from 'react';
import CertModal from './CertModal';

const slugify = (s = '') => {
  return s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

const IssuerIcon = ({ issuer }) => {
  const slug = slugify(issuer || 'unknown');
  // prefer png first (most logos provided as PNG)
  const exts = ['png', 'svg', 'jpg', 'webp'];
  const [src, setSrc] = useState(null);
  const [failedAll, setFailedAll] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      for (const ext of exts) {
        const url = `/certs/logos/${slug}.${ext}`;
        try {
          const res = await fetch(url, { method: 'HEAD' });
          if (res && res.ok) {
            if (mounted) setSrc(url);
            return;
          }
        } catch (e) {
          // network errors: continue to next
        }
      }
      if (mounted) setFailedAll(true);
    })();

    return () => {
      mounted = false;
    };
  }, [issuer]);

  if (src) {
    return (
      <img
        src={src}
        alt={issuer}
        className="w-10 h-10 rounded object-contain bg-transparent"
        onError={() => setFailedAll(true)}
      />
    );
  }

  // Fallback placeholder (initial in circle)
  return (
    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-sm text-white">
      {issuer?.[0] || '?'}
    </div>
  );
};

const CertList = ({ certs = [] }) => {
  const [active, setActive] = useState(null);

  return (
    <div>
      <ul className="space-y-3">
        {certs.map((c) => (
          <li key={c.id} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <IssuerIcon issuer={c.issuer} />
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-400">{c.issuer}</div>
                <div className="font-medium mt-1">{c.name}</div>
                <div className="text-sm text-gray-400 mt-1">{c.issuer}{c.year ? ` • ${c.year}` : ''}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {c.link && (
                <button onClick={() => setActive(c)} className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">View Badge</button>
              )}
              {c.link && (
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-300">Open</a>
              )}
            </div>
          </li>
        ))}
      </ul>

      <CertModal cert={active} onClose={() => setActive(null)} />
    </div>
  );
};

export default CertList;
