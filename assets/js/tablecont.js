/**
 * Article Navigation
 * Provides smooth scrolling to content sections
 * Updates content selection in the table when a new item scrolls into view
 * Updates article header viewable status upon scroll
 *
 * params:
 *   {Window} vWin
 *   {Document} vDoc
 *   {string} table: selector for ToC wrapper
 *   {string} content: selector for contents wrapper
 */
(function (vWin, vDoc, table, contents) {
  'use strict';

  if (!vWin || !vDoc.querySelector(table)) {
    return; // not a browser or not found
  }

  var hash;
  var observer;
  var observerAction;
  var pageHeader = vDoc.querySelector('header');
  var articleHeader = vDoc.querySelector('.article-header');
  var toc = vDoc.querySelector(table);
  var tocItems = [];
  var docItems = toc ? [].slice.call(vDoc.querySelectorAll(contents + ' > h2')) : [];
  var scrollState = {
    high: 0, pause: false,
    delta: pageHeader.getBoundingClientRect().height, // does not adjust with resize
    pageHead: articleHeader.getBoundingClientRect().height // does not adjust with resize
  };

  // TODO: repair content (this will NOT fix the Checkmarx report)
  hash = [].slice.call(vDoc.querySelectorAll('a[target]')).forEach(function (item) {
    if (!item.hasAttribute('rel')) {
      item.setAttribute('rel', 'noopener');
    }
  });

  /**
   * isSeen
   * Checks if an item is in the viewable area of the browser
   * Turns off the rendering of off-screen items for improved mobile performance
   * @param {HTMLElement} item: DOM reference to check
   * @param {number, string} approach: distance in pixels from the edge of the viewable area
   * @param {string, HTMLElement} parent: selector or DOM reference to the immediate scroll area if not window
   */
  function isSeen(item, approach, parent) {
    var par;
    var el = item.getBoundingClientRect();
    approach = approach ? (parseInt(approach.toString(), 10) || 0) : 0; // pixel distance to view
    if (parent) {
      par = ((typeof (parent) === 'string') ? vDoc.querySelector(parent) : parent).getBoundingClientRect();
      if (( // cannot see parent container
        0 > par.bottom ||
        vWin.innerHeight < par.top ||
        0 > par.right ||
        vWin.innerWidth < par.left
      )) {
        return false;
      }
    }
    return !(
      0 > el.bottom + approach ||
      vWin.innerHeight < el.top - approach ||
      0 > el.right + approach ||
      vWin.innerWidth < el.left - approach
    );
  }

  /**
   * scrollToTarget (can be a public function)
   * use browser smooth scrolling where supported
   * @param event
   */
  function scrollToTarget(event) {
    var url = event.target.getAttribute('href');
    if (url.indexOf('#') !== 0) {
      return; // not an in-doc reference
    }

    event.preventDefault();
    var el = vDoc.getElementById(url.replace('#', ''));
    var top = vWin.pageYOffset + el.getBoundingClientRect().top;

    // style ToC selection
    if (!('IntersectionObserver' in vWin) || 'MSInputMethodContext' in vWin) {
      tocItems.forEach(function (tocItem) {
        tocItem.classList.remove('selected');
      });
      event.target.classList.add('selected');
    }

    // scroll to content
    scrollState.pause = true;
    toc.classList.remove('show');
    if ('MSInputMethodContext' in vWin) { // is Edge / IE11
      vWin.scrollTo(0, top);
    } else if (el.scrollIntoView) {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    } else {
      vWin.scrollTo({top: top, behavior: 'smooth'});
    }

    /**
     * default behavior is disabled
     * move focus to content for accessibility
     * delay necessary for smooth scroll to complete
     * keeps header hidden with scroll
     */
    setTimeout(function () {
      scrollState.pause = false;
      el.focus();
    }, 600); // must be greater than the browser scrollTo timing, not too long to affect accessibility
  }

  /**
   * scrollBar (can be a public function)
   * header scroll indicator of progress down the length of the page
   */
  var scroller = vWin; // what to watch
  var rail = vDoc.createElement('div');
  var bar = vDoc.createElement('div');
  rail.classList.add('scroll-bar');

  rail.appendChild(bar);
  articleHeader.appendChild(rail); // where to place the bar
  // IE does not support Object.assign which could shorten this code
  rail.style.position = 'absolute';
  rail.style.left = '0';
  rail.style.bottom = '0';
  rail.style.width = '100%';
  rail.style['background-color'] = '#eee';
  bar.style.width = '0';
  bar.style.height = '6px';
  bar.style['min-width'] = '6%';
  bar.style['background-color'] = '#13db3c';
  bar.style.transition = 'width 0.3s linear';

  // page scroll watcher, monitors actions for scrollBar and show header
  scroller.addEventListener('scroll', function () {
    var scroll = (scroller === vWin) ? vDoc.body : scroller; // using adjustments to support window or DOM element scroll
    var top = Math.abs((scroll.scrollTop || scroll).getBoundingClientRect().top);
    bar.style.width = parseInt(
      Math.abs(top / ((scroller.scrollHeight || scroller.innerHeight) - scroll.clientHeight) * 100
      ).toFixed(2), 10) + 'vw';
    articleHeader.classList[(top > 90) ? 'add' : 'remove']('show');
  });
  vWin.addEventListener('resize', function () {
    scrollState.delta = pageHeader.getBoundingClientRect().height;
    scrollState.pageHead = articleHeader.getBoundingClientRect().height;
  });

  /**
   * Table of Contents
   * Configures behavior of ToC
   * Monitors scroll position in page to highlight navigation section coming into view
   */
  if (docItems.length < 3) { // set up ToC only if present with 3 or more items
    if (toc) {
      toc.style.display = 'none';
    }
  } else {
    var html = '';
    docItems.forEach(function(item, index) {
      var i = index + 1;
      html += '<li><a id="toc' + i + '" href="#article' + i + '">' + item.innerText + '</a></li>';
      item.setAttribute('id', 'article' + i);
      item.setAttribute('data-toc', i);
      item.setAttribute('tabindex', '-1');
    });
    toc.querySelector('ul').innerHTML = html;
    tocItems = [].slice.call(toc.querySelectorAll('ul a'));
    toc.style.display = 'block';

    // reroute ToC click for smooth scroll feature
    tocItems.forEach(function (item) {
      item.addEventListener('click', scrollToTarget);
    });

    // mobile ToC list toggle
    toc.querySelector('p').addEventListener('click', function () {
      toc.classList.toggle('show');
    });

    /**
     * IntersectionObserver
     * enhanced behavior for newer browsers
     * update ToC status when new item scrolls into view
     */
    if ('IntersectionObserver' in vWin && !('MSInputMethodContext' in vWin)) {
      observerAction = function (items) {
        docItems.forEach(function (docItem) { // don't render off screen content for improved mobile performance
          docItem.classList[isSeen(docItem, '', '') ? 'remove' : 'add']('invisible');
        });
        items.forEach(function (item) {
          if (item.intersectionRatio > 0.5) {
            tocItems.forEach(function (tocItem) {
              tocItem.classList.remove('selected');
            });
            vDoc.getElementById('toc' + item.target.dataset.toc).classList.add('selected');
          }
        });
      };

      observer = new IntersectionObserver(observerAction, {
        root: vDoc,
        rootMargin: '0px',
        threshold: [0, 0.5]
      });

      docItems.forEach(function (item) {
        observer.observe(item);
      });
    } else { // alternate behavior when IntersectionObserver is not supported
      hash = vWin.location.hash.replace('#', '');
      hash = (hash.length > 0) ? vDoc.getElementById(hash) : null;
      tocItems.forEach(function (tocItem) {
        tocItem.classList.remove('selected');
      });
      if (hash && hash.dataset.toc) {
        vDoc.getElementById('toc' + hash.dataset.toc).classList.add('selected');
      } else {
        toc.querySelector('li a').classList.add('selected');
      }
    }
  }
})(window, window.document, '#table-of-contents', 'main');
