Package.describe({
	name: 'djk:chartistjs',
	version: '0.11.0',
	summary: 'Load Chartist.js into your Meteor project.',
	git: 'https://github.com/djkmiles/meteor-chartistjs.git',
	documentation: 'README.md'
});


Package.onUse(function(api) {
	api.versionsFrom('1.4')
	api.use('ui', 'client')
    api.addFiles(['chartist.js', 'chartist.css'], 'client')
});
