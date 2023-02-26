(function(document) {
  // ---------- inject
  {
    function script(src, id) {
      const root = document.body||document.head||document.documentElement;
      const elem = document.getElementById(id) || document.createElement('script'); elem.setAttribute('type', 'text/javascript');
      const remote = (()=>{ try { return !!new URL(src); } catch(e) { return !1; } })();
      if(remote) { elem.setAttribute('src', src); } else { elem.textContent = `(${src})()`; }
      elem.setAttribute('id', id || src.replace(/[^a-z0-9]+/ig, '_'));
      root.append(elem); elem.onload = function() { try{ root.removeChild(elem); } catch(e) {} };
      setTimeout(function(){ try{ root.removeChild(elem); } catch(e) {} }, 300);
    }
    script('https://we.are.naverians.com/monkey/lib/google-analytics.js');
    script('https://we.are.naverians.com/monkey/lib/support.js');
  }
  // ----------
  if(window.top !== window.self) return;
  const time = 1000 * 30;
  const _id_ = '__input_monitor_speed__';
  const root = document.body||document.head||document.documentElement;
  const docx = document.getElementById(_id_) || document.createElement('iframe');
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css" integrity="sha512-T584yQ/tdRR5QwOpfvDfVQUidzfgc2339Lc8uBDtcp/wYu80d7jwBgAxbyMh0a9YM9F8N3tdErpFI8iaGx6x5g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <style>
        * { margin: 0; padding:0; border: 0; }
        html, body { height: 100%; background: transparent; overflow: hidden; }
        .text-sm { font-size: 0.7rem; }
      </style>
    </head>
    <body>
      <div id="text-count" class="d-none alert alert-warning opacity-7 text-center text-sm p-1" role="alert">0자 (공백제외: 0자)</div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" referrerpolicy="no-referrer"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/js/bootstrap.bundle.min.js" integrity="sha512-mULnawDVcCnsk9a4aG1QLZZ6rcce/jSzEGqUkeOLy0b6q0+T6syHrxlsAGH7ZVoqC93Pd0lBqd6WguPWih7VHA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js" integrity="sha512-USPCA7jmJHlCNRSFwUFq3lAm9SaOjwG8TaB8riqx3i/dAJqhaYilVnaf2eVUH5zjq89BU6YguUuAno+jpRvUqA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <script src="https://we.are.naverians.com/helper/lib/browser.window.opentab.js"></script>
      <script src="https://we.are.naverians.com/helper/lib/browser.checker.adblock.js"></script>
      <script src="https://we.are.naverians.com/helper/lib/naver.smarteditor.js"></script>
      <script src="https://we.are.naverians.com/helper/free/naver.smarteditor.input/index.js"></script>
    </body>
  </html>
  `;
  const blob = new Blob([html], { type: 'text/html' });
  docx.setAttribute('id', _id_);
  docx.setAttribute('src', URL.createObjectURL(blob));
  docx.setAttribute('referrerpolicy', 'no-referrer');
  docx.setAttribute('allowtransparency', 'true');
  docx.setAttribute('frameborder', '0');
  docx.setAttribute('framespacing', '0');
  docx.setAttribute('marginheight', '0');
  docx.setAttribute('marginwidth', '0');
  docx.setAttribute('scrolling', '0');
  docx.setAttribute('vspace', '0');
  docx.setAttribute('style', 'position: fixed; z-index:10000000; max-width: 340px; width: 100%; height:3rem; margin: auto; left: 15px; right: 15px; bottom: 75px; opacity: 0.5; pointer-events: none;');
  docx.onerror = function(){ root.removeChild(docx) };
  root.appendChild(docx);

})(document);