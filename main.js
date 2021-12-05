"use strict";

(function (global) {
  var domString = document.querySelectorAll("[data-eazido-slug]")
  if (domString.length < 1){
    return ;
  }
  if (("eazidoSlug" in domString[0].dataset)){

    var appSlug = domString[0].dataset["eazidoSlug"];
    var themeColor = "#5C6AC4";

    if (("themeColor" in domString[0].dataset)){
      themeColor = domString[0].dataset["themeColor"];
    }

    var styleContent = `:root{--default-color:${themeColor}}html{font-family:sans-serif;font-size:14px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,::after,::before{box-sizing:border-box;margin:0;padding:0}body{margin:0!important;padding:0!important}.main-container{z-index:999999999;height:600px;width:400px;margin:0 20px;background:#fff;box-shadow:0 0 0 2px rgba(92,106,196,.2);position:fixed;right:.2%;bottom:90px;border-radius:5px;display:none;-webkit-animation:fadeIn 1s ease-in;animation:fadeIn 1s ease-in;overflow-x:hidden}.open-container{display:block!important}.widget-header{background:var(--default-color);display:flex;justify-content:flex-end;padding:1rem;align-items:center;display:none;width:100%!important;height:50px}.widget-footer{display:grid;place-content:center;border-top:1px solid rgba(92,106,196,.4);height:40px}.footer-content{font-family:sans-serif;color:var(--default-color)}.close-action-btn{cursor:pointer}.close-action-btn svg{height:30px;fill:#fff;width:30px}.widget-content{height:560px;width:100%}.eazido-widget .eazido-widget-launcher{position:fixed;z-index:2147483003;bottom:20px;right:25px;width:60px;height:60px;cursor:pointer}.eazido-widget-launcher-icon-close,.eazido-widget-launcher-icon-open{display:flex;align-items:center;justify-content:center;border-radius:50%;position:absolute;top:0;left:0;background:var(--default-color);box-shadow:2px 2px 15px 1px var(--default-color);width:60px;height:60px;transition:transform .1s linear,opacity 80ms linear}.eazido-widget-launcher-icon-close svg,.eazido-widget-launcher-icon-open svg{width:45px;height:45px}.eazido-widget-launcher-icon svg path{fill:#fff!important}.eazido-widget-iframe{width:100%;height:100%;border:none}.closeBtn{width:500px;height:100px;z-index:9999999999999;position:absolute}@media (max-width:768px){.eazido-widget-launcher-icon-close{display:none}.main-container{height:100vh;width:100%;margin:0 0;background:#fff;border:none;position:fixed;top:0;right:0;border-radius:0;display:none;-webkit-animation:fadeIn 1s ease-in;animation:fadeIn 1s ease-in;z-index:999999999999999;overflow-x:hidden}.widget-header{display:flex}.widget-footer{position:fixed;background:#fff;width:100%;display:grid;place-content:center}.footer-content{font-family:sans-serif;color:var(--default-color)}.widget-content{height:89vh;width:100%}}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}`

    var style = document.createElement("style");
    style.setAttribute("type", "text/css")
    style.appendChild(document.createTextNode(styleContent));
    document.head.appendChild(style);

    var mainContainer = document.createElement("div");
    mainContainer.setAttribute("class", "main-container");
    document.body.append(mainContainer);

    var widgetHeader = document.createElement("div");
    var widgetContent = document.createElement("div");
    var widgetFooter = document.createElement("div");

    var headerContent = document.createElement("div");
    headerContent.setAttribute("class", "close-action-btn");
    headerContent.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>`;

    headerContent.addEventListener("click", () => {
      mainContainer.classList.toggle("open-container");
      document
        .getElementById("eazido-widget-launcher-open")
        .classList.toggle("eazido-widget-launcher-icon-open");
      document
        .getElementById("eazido-widget-launcher-close")
        .classList.toggle("eazido-widget-launcher-icon-close");
    });

    var footerContent = document.createElement("p");
    footerContent.innerHTML = `Powered by <a href="https://eazido.com" target="_blank" style="text-decoration: none; font-weight: bold; color: #5C6AC4">Eazido</a>`;
    footerContent.setAttribute("class", "footer-content");

    widgetHeader.setAttribute("class", "widget-header");
    widgetContent.setAttribute("class", "widget-content");
    widgetFooter.setAttribute("class", "widget-footer");

    var iFrame = document.createElement("iframe");
    iFrame.setAttribute("id", "eazido-widget-iframe");
    iFrame.setAttribute("class", "eazido-widget-iframe close");
    iFrame.setAttribute("src", `https://${appSlug}.eazido.com/`)

    mainContainer.append(widgetHeader);
    mainContainer.append(widgetContent);
    mainContainer.append(widgetFooter);

    widgetContent.append(iFrame);
    widgetHeader.append(headerContent);
    widgetFooter.append(footerContent);

    var divContent = document.createElement("div");
    divContent.setAttribute("class", "eazido-widget");
    document.body.append(divContent);

    var closeWidget = document.createElement("div");
    closeWidget.setAttribute("class", "closeBtn");

    var widgetLauncher = document.createElement("div");
    widgetLauncher.setAttribute("class", "eazido-widget-launcher");
    widgetLauncher.onclick = function () {
      mainContainer.classList.toggle("open-container");

      document
        .getElementById("eazido-widget-launcher-open")
        .classList.toggle("eazido-widget-launcher-icon-open");
      document
        .getElementById("eazido-widget-launcher-close")
        .classList.toggle("eazido-widget-launcher-icon-close");
    };
    divContent.append(widgetLauncher);

    var widgetLauncherIconOpen = document.createElement("div");
    widgetLauncherIconOpen.setAttribute("id", "eazido-widget-launcher-open");
    widgetLauncherIconOpen.setAttribute(
      "class",
      "eazido-widget-launcher-icon eazido-widget-launcher-icon-open"
    );
    widgetLauncherIconOpen.innerHTML = `
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
              <path d="M15.526,33.729c0.068,0.042,0.084,0.07,0.096,0.135c0.094,0.511-0.497,1.623-0.96,2.229
                  c-0.209,0.274-0.263,0.637-0.142,0.959s0.398,0.561,0.736,0.63c0.278,0.056,0.544,0.081,0.798,0.081
                  c1.558,0,2.649-0.962,3.341-1.571c0.148-0.131,0.339-0.3,0.465-0.39c1.468,0.337,3.729,0.604,5.163,0.604
                  c0.798,0,1.597-0.057,2.384-0.156c1.198,0.388,2.5,0.608,3.865,0.608c0.947,0,2.359-0.161,3.367-0.378
                  c0.053,0.046,0.108,0.098,0.169,0.151c0.479,0.423,1.283,1.132,2.45,1.132c0.19,0,0.389-0.019,0.598-0.061
                  c0.337-0.069,0.614-0.307,0.736-0.629c0.121-0.322,0.067-0.686-0.142-0.959c-0.283-0.373-0.542-0.897-0.575-1.149
                  c2.445-1.558,3.902-4.041,3.902-6.663c0-1.615-0.563-3.122-1.522-4.412c-0.13-6.704-6.908-12.127-15.233-12.127
                  c-8.406,0-15.245,5.527-15.245,12.321C9.778,27.889,11.927,31.494,15.526,33.729z M36.73,33.322
                  c-0.446,0.277-0.731,0.695-0.824,1.208c-0.023,0.126-0.033,0.253-0.031,0.38c-0.31-0.253-0.664-0.477-1.115-0.477
                  c-0.081,0-0.231,0.019-0.311,0.038c-0.847,0.209-2.302,0.386-3.177,0.386c-4.69,0-8.506-2.94-8.506-6.556
                  c0-3.614,3.815-6.555,8.506-6.555s8.506,2.94,8.506,6.555C39.778,30.289,38.667,32.119,36.73,33.322z M25.023,13.763
                  c6.232,0,11.458,3.375,12.862,7.9c-1.807-1.196-4.108-1.916-6.613-1.916c-5.793,0-10.506,3.838-10.506,8.555
                  c0,2.363,1.183,4.506,3.092,6.055c-1.252-0.092-2.744-0.304-3.715-0.544c-0.844-0.21-1.494,0.369-2.071,0.878
                  c-0.239,0.211-0.465,0.403-0.688,0.564c0.198-0.563,0.31-1.174,0.205-1.749c-0.114-0.627-0.463-1.138-1.009-1.477
                  c-3.007-1.867-4.803-4.838-4.803-7.946C11.778,18.393,17.72,13.763,25.023,13.763z"/>
          </svg>`;
    widgetLauncher.append(widgetLauncherIconOpen);
    var widgetLauncherIconClose = document.createElement("div");
    widgetLauncherIconClose.setAttribute("id", "eazido-widget-launcher-close");
    widgetLauncherIconClose.setAttribute("class", "eazido-widget-launcher-icon");
    widgetLauncherIconClose.innerHTML = `<svg enable-background="new 0 0 32 32"  id="Слой_1" version="1.1" viewBox="0 0 32 32"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z" fill="#121313" id="Expand_More"/><g/><g/><g/><g/><g/><g/></svg>`;
    widgetLauncher.append(widgetLauncherIconClose);

  }

})();
