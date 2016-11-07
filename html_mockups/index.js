$(function(){

	// Nothing to do on other pages
	if( mw.config.get('wgTitle') != 'Main Page' ) {
		return false;
	}

	var $contentContainer = $('.radiant-main-content-area');
	var $containerQuick = $('.radiant-quick-nav');
	var $headings = $contentContainer.find('h2');
	$.each($headings, function(i,v) {
		var title = $(v).find('span.mw-headline').text();
		var hid = $(v).find('span.mw-headline').attr('id');
		var $item = $('<li><a href="#'+hid+'">'+title+'</a></li>');
		$containerQuick.append($item);
	});

});