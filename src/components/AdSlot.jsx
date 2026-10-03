import { useEffect, useRef } from 'react';

export default function AdSlot({ size = 'leaderboard', adKey = '', className = '' }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!adKey || !iframeRef.current) return;

    let width = size === 'rectangle' ? 300 : 728;
    let height = size === 'rectangle' ? 250 : 90;

    const doc = iframeRef.current.contentWindow.document;
    doc.open();
    doc.write(`
      <html>
        <head>
          <style>body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; overflow: hidden; }</style>
        </head>
        <body>
          <script type="text/javascript">
            atOptions = {
              'key' : '${adKey}',
              'format' : 'iframe',
              'height' : ${height},
              'width' : ${width},
              'params' : {}
            };
          </script>
          <script type="text/javascript" src="//www.highperformanceformat.com/${adKey}/invoke.js"></script>
        </body>
      </html>
    `);
    doc.close();
  }, [adKey, size]);

  let w = size === 'rectangle' ? 300 : 728;
  let h = size === 'rectangle' ? 250 : 90;

  return (
    <div className={`flex justify-center items-center overflow-hidden min-h-[${h}px] ${className}`}>
      <iframe ref={iframeRef} width={w} height={h} frameBorder="0" scrolling="no" title="Advertisement"></iframe>
    </div>
  );
}