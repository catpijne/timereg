/******************************************************************************
* Copyright 2000 by Mike Hall                                                 *
* Please see http://www.brainjar.com for terms of use.                        *
*                                                                             *
* Code for the site menu.                                                     *
******************************************************************************/

// Hide/UnHide select drop-downs
//
function HideAllSelects()
{ for ( i = 0 ; i < document.forms.length ; i ++ )
  { for ( j = 0 ; j < document.forms[i].length ; j ++ )
    { if (document.forms[i][j].nodeName == 'SELECT')
      { document.forms[i][j].style.visibility = 'hidden' ; }
    }
  }
}
function UnHideAllSelects()
{ for ( i = 0 ; i < document.forms.length ; i ++ )
  { for ( j = 0 ; j < document.forms[i].length ; j ++ )
    { if (document.forms[i][j].nodeName == 'SELECT')
      { document.forms[i][j].style.visibility = '' ; }
    }
  }
}
//

// Determine browser and version. Script works for IE 5.5+ and NS 6.0+

function Browser() {

  var ua, s, i;

  this.isIE    = false;
  this.isNS    = false;
  this.version = null;

  ua = navigator.userAgent;

  s = "MSIE";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isIE = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }

  s = "Netscape6/";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isNS = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }
}

function browser_is_IE6() {
	var browserversion = navigator.appVersion;
	if (browserversion.indexOf('MSIE 6') == -1)
	{
	return false;
	}
	else
	{
	return true;
	}
}


var browser = new Browser();
var browser_is_IE6 = browser_is_IE6();

// Global variable for tracking the currently active button.

var activeButton = null;

// Capture mouse clicks on the page so any active button can be deactivated.

  if (document.addEventListener) {
    document.addEventListener("mousedown", pageMousedown, true);
  } else {
    document.onmousedown = pageMousedown;
  }

function pageMousedown(event) {

  var className;

  // If the object clicked on is not part of a menu, close any active
  // menu.

  if (window.event == null) {
    className = event.target.className;
  } else {
    className = window.event.srcElement.className;
  }
  
  if (className != "menuButton"  && className != "menuItem"    &&
      className != "menuItemSep" && className != "menuItemHdr" &&
      activeButton)
    resetButton(activeButton);
}

function buttonClick(button, menuName) {

  // Blur focus from the link to remove that annoying outline.

  button.blur();

  // Associate the named menu to this button if not already done.

  if (!button.menu)
    button.menu = document.getElementById(menuName);

  // Reset the currently active button, if any.

  if (activeButton && activeButton != button)
    resetButton(activeButton);

  // Toggle the button's state.

  if (button.isDepressed)
    resetButton(button);
  else
    depressButton(button);

  return false;
}

function buttonMouseover(button, menuName) {

  // If any other button menu is active, deactivate it and activate this one.
  // Note: if this button has no menu, leave the active menu alone.

  if (activeButton && activeButton != button) {
    resetButton(activeButton);
    if (menuName)
      buttonClick(button, menuName);
  }
}

function depressButton(button) {

  var w, dw, x, y;

  // Change the button's style class to make it look like it's depressed.

  button.className = "menuButtonActive";

  // For IE, set an explicit width on the first menu item. This will
  // cause link hovers to work on all the menu's items even when the
  // cursor is not over the link's text.

  if (browser.isIE && !button.menu.firstChild.style.width) {
    w = button.menu.firstChild.offsetWidth;
    button.menu.firstChild.style.width = w + "px";
    dw = button.menu.firstChild.offsetWidth - w;
    w -= dw;
    button.menu.firstChild.style.width = w + "px";
  }

  // Position the associated drop down menu under the button and
  // show it. Note that the position must be adjusted according to
  // browser, styling and positioning.

  x = getPageOffsetLeft(button);
  y = getPageOffsetTop(button) + button.offsetHeight;
  if (browser.isNS && browser.version < 6.1) {
    x--;
    y--;
  }
  button.menu.style.left = x + "px";
  button.menu.style.top  = y + "px";
  button.menu.style.visibility = "visible";

  // Set button state and let the world know which button is
  // active.

  button.isDepressed = true;
  activeButton = button;

  if (browser_is_IE6 == true)
  HideAllSelects();

}

function resetButton(button) {

  // Restore the button's style class.

  button.className = "menuButton";

  // Hide the button's menu.

  if (button.menu)
    button.menu.style.visibility = "hidden";

  // Set button state and clear active menu global.

  button.isDepressed = false;
  activeButton = null;

if (browser_is_IE6 == true)
  UnHideAllSelects();

}

function getPageOffsetLeft(el) {

  // Return the true x coordinate of an element relative to the page.

  return el.offsetLeft + (el.offsetParent ? getPageOffsetLeft(el.offsetParent) : 0);
}

function getPageOffsetTop(el) {

  // Return the true y coordinate of an element relative to the page.

  return el.offsetTop + (el.offsetParent ? getPageOffsetTop(el.offsetParent) : 0);
}
