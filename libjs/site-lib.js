// site-lib.js

function switchto(page, animation = 'none') {
  let pagenu = 
    typeof(page) == 'number' ? 
      page : 
      $('#page-container .page').toArray().findIndex(function(domnode) {return $(domnode).attr('data-page-ID') == page});
  let dom_pagecontent = $('#page-container .page')[pagenu];
  console.log('#page-container .page: ', $('#page-container .page'));
  console.log('pagenu: ', pagenu);
  if (typeof(dom_pagecontent) == 'null' || typeof(dom_pagecontent) == 'undefined') {
    console.log('No such page: ', page, ': ', dom_pagecontent);
  }
  switch(animation) {
    case 'none': {
      $('#app .bottom-marker').remove();
      let jq_pagecontent = $(dom_pagecontent);
      $('#app').append(jq_pagecontent);
      $('#app').append($('<div class="bottom-marker"></div>'));
      break;
    }
  }
  return dom_pagecontent;
}

function quitpage(animation = 'none') {
  let pages = $('#app .page');
  if (!pages.length) {
    console.error('quitpage: App is empty!');
    return undefined;
  } else {
    switch(animation) {
      case 'none': {
        pages[pages.length - 1].remove();
        break;
      }
      default: {
        console.error('quitpage: illegal animation "' + animation + '"')
      }
    }
    return 0;
  }
}