"use strict"

import { initInputMode } from './inputMode';
import { initDropdowns } from './dropdownMenu';
import { initEffects } from './effects';
import { formUtils } from './formUtils';
import { initUtils } from './initUtils';
// import { initLoadAnimation } from './initLoader'
import { initLoader } from './initLoader';
// ===========================================================================================
// -----------------------------
// ГОЛОВНИЙ ЗАПУСК
// -----------------------------
function initApp() {
   // initLoadAnimation()
   initLoader()
   initInputMode()
   // initUtils()
   // initDropdowns()
   initEffects()
   // movingElements()
   // formUtils()
}

if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', initApp);
} else {
   initApp();
}
















