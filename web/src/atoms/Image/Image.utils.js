export const shimmer = (w = '100%', h = '100%') => `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  width="${w}" height="${h}" viewBox="0 0 299 289" enable-background="new 0 0 299 289" xml:space="preserve">
    <path fill="url(#skyGradient)" d="M293.468,275.282c0,1.617-1.311,2.928-2.928,2.928H8.46c-1.617,0-2.928-1.311-2.928-2.928V13.718
    c0-1.617,1.311-2.928,2.928-2.928h282.08c1.617,0,2.928,1.311,2.928,2.928V275.282z"/>
    <g>
      <polygon fill="#7A5034" stroke="#7A5034" stroke-width="1.9519" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
      67.032,174.069 96.807,225.639 126.581,277.21 67.032,277.21 12.484,277.21 39.258,225.639   "/>
      <polygon fill="#7A5034" stroke="#7A5034" stroke-width="1.9519" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
      130.469,185.854 160.243,231.532 190.017,277.21 130.469,277.21 70.921,277.21 100.695,231.532   "/>
      <polygon fill="#7A5034" stroke="#7A5034" stroke-width="1.9519" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
      195.858,154.624 225.632,215.917 255.406,277.21 195.858,277.21 136.309,277.21 166.083,215.917  "/>
      <polygon fill="#7A5034" stroke="#7A5034" stroke-width="1.9519" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
      233.92,185.854 259.694,230.532 287.468,277.21 233.92,277.21 174.371,277.21 204.145,231.532  "/>
    </g>
    <defs>
      <linearGradient id="skyGradient" x1="100%" y1="100%">
        <stop offset="0%" stop-color="lightblue" stop-opacity=".5">
          <animate attributeName="stop-color" values="lightblue;blue;red;red;black;red;red;purple;lightblue" dur="5s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stop-color="lightblue" stop-opacity=".5">
          <animate attributeName="stop-color" values="lightblue;orange;purple;purple;black;purple;purple;blue;lightblue" dur="5s" repeatCount="indefinite" />
          <animate attributeName="offset" values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" dur="14s" repeatCount="indefinite" />    
        </stop>
      </linearGradient>
    </defs>
</svg>`;

export const toBase64 = (str) => (typeof window === 'undefined'
  ? Buffer.from(str).toString('base64')
  : window.btoa(str));
