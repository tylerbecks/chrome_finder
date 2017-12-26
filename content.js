var bodyTag = 'body';

// var getSearchPattern = function(searchQuery) {
//   var term = searchQuery;
//   term = term.replace(/(\s+)/, '(<[^>]+>)*$1(<[^>]+>)*');
//   return new RegExp('(' + term + ')', 'gi');
// };
//
// var getReplacedHtml = function(searchPattern) {
//   var srcStr = $(bodyTag).html();
//   srcStr = srcStr.replace(searchPattern, '<mark>$1</mark>');
//   return srcStr.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/, '$1</mark>$2<mark>$4');
// };

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === 'search_change') {
      var $context = $(bodyTag);
      $context.unmark();
      $context.mark(searchTerm, {
        accuracy: 'partially',
        diacritics: true,
        element: 'mark',
        separateWordSearch: true
      });
      // var searchPattern = getSearchPattern(request.content);
      // var replacedHtml = getReplacedHtml(searchPattern);
      // $(bodyTag).html(replacedHtml);
    }
  }
);
