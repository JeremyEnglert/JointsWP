// Import jQuery and bind it.
import $ from 'jquery';
window.$ = $;

// Import WhatInput.
import whatInput from 'what-input';

// Import Foundation and utilities.
import { Foundation } from 'foundation-sites/js/foundation.core';
import { rtl, GetYoDigits, transitionend } from 'foundation-sites/js/foundation.util.core';
import { Box } from 'foundation-sites/js/foundation.util.box';
import { onImagesLoaded } from 'foundation-sites/js/foundation.util.imageLoader';
import { Keyboard } from 'foundation-sites/js/foundation.util.keyboard';
import { MediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery';
import { Motion, Move } from 'foundation-sites/js/foundation.util.motion';
import { Nest } from 'foundation-sites/js/foundation.util.nest';
import { Timer } from 'foundation-sites/js/foundation.util.timer';
import { Touch } from 'foundation-sites/js/foundation.util.touch';
import { Triggers } from 'foundation-sites/js/foundation.util.triggers';

// Uncomment 'import' AND 'Foundation.plugin' for each plugin you do not want to use.
import { Abide } from 'foundation-sites/js/foundation.abide';
Foundation.plugin(Abide, 'Abide');
import { Accordion } from 'foundation-sites/js/foundation.accordion';
Foundation.plugin(Accordion, 'Accordion');
import { AccordionMenu } from 'foundation-sites/js/foundation.accordionMenu';
Foundation.plugin(AccordionMenu, 'AccordionMenu');
import { Drilldown } from 'foundation-sites/js/foundation.drilldown';
Foundation.plugin(Drilldown, 'Drilldown');
import { Dropdown } from 'foundation-sites/js/foundation.dropdown';
Foundation.plugin(Dropdown, 'Dropdown');
import { DropdownMenu } from 'foundation-sites/js/foundation.dropdownMenu';
Foundation.plugin(DropdownMenu, 'DropdownMenu');
import { Equalizer } from 'foundation-sites/js/foundation.equalizer';
Foundation.plugin(Equalizer, 'Equalizer');
import { Interchange } from 'foundation-sites/js/foundation.interchange';
Foundation.plugin(Interchange, 'Interchange');
import { Magellan } from 'foundation-sites/js/foundation.magellan';
Foundation.plugin(Magellan, 'Magellan');
import { OffCanvas } from 'foundation-sites/js/foundation.offcanvas';
Foundation.plugin(OffCanvas, 'OffCanvas');
import { Orbit } from 'foundation-sites/js/foundation.orbit';
Foundation.plugin(Orbit, 'Orbit');
import { ResponsiveAccordionTabs } from 'foundation-sites/js/foundation.responsiveAccordionTabs';
Foundation.plugin(ResponsiveAccordionTabs, 'ResponsiveAccordionTabs');
import { ResponsiveMenu } from 'foundation-sites/js/foundation.responsiveMenu';
Foundation.plugin(ResponsiveMenu, 'ResponsiveMenu');
import { ResponsiveToggle } from 'foundation-sites/js/foundation.responsiveToggle';
Foundation.plugin(ResponsiveToggle, 'ResponsiveToggle');
import { Reveal } from 'foundation-sites/js/foundation.reveal';
Foundation.plugin(Reveal, 'Reveal');
import { Slider } from 'foundation-sites/js/foundation.slider';
Foundation.plugin(Slider, 'Slider');
import { SmoothScroll } from 'foundation-sites/js/foundation.smoothScroll';
Foundation.plugin(SmoothScroll, 'SmoothScroll');
import { Sticky } from 'foundation-sites/js/foundation.sticky';
Foundation.plugin(Sticky, 'Sticky');
import { Tabs } from 'foundation-sites/js/foundation.tabs';
Foundation.plugin(Tabs, 'Tabs');
import { Toggler } from 'foundation-sites/js/foundation.toggler';
Foundation.plugin(Toggler, 'Toggler');
import { Tooltip } from 'foundation-sites/js/foundation.tooltip';
Foundation.plugin(Tooltip, 'Tooltip');

Foundation.addToJquery($);

// Add Foundation Utils to Foundation global namespace for backwards compatibility.
Foundation.rtl = rtl;
Foundation.GetYoDigits = GetYoDigits;
Foundation.transitionend = transitionend;

Foundation.Box = Box;
Foundation.onImagesLoaded = onImagesLoaded;
Foundation.Keyboard = Keyboard;
Foundation.MediaQuery = MediaQuery;
Foundation.Motion = Motion;
Foundation.Move = Move;
Foundation.Nest = Nest;
Foundation.Timer = Timer;

// Touch and Triggers previously were almost purely side effect driven,
// so no // need to add it to Foundation, just init them.
Touch.init($);
Triggers.init($, Foundation);

// Import JavaScript files.
import appInit from './app';
appInit;

// Import external plugins that do not utilize modules (e.g. Flickity).


// Initialize Foundation.
$(document).foundation();
