var walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: function(node) {
      return node.nodeValue.match(/ebola/i) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  }, false);

while(node = walk.nextNode()) {
  node.nodeValue = node.nodeValue.replace(/ebola/ig, function($match) {
      switch ($match) {
        case 'ebola':
          return 'zombie';
        case 'Ebola':
          return 'zombie';
        case 'EBOLA':
          return 'ZOMBIE';
      }
  });
}
