const LogginJS = require('./lib/index');
const additionalSeverities = require('./plugins/additional-severities');
const additionalNotifiers = require('./plugins/browser/additional-notifiers');
const additionalFormatters = require('./plugins/additional-formatters');

LogginJS.use(additionalSeverities);
LogginJS.use(additionalNotifiers);
LogginJS.use(additionalFormatters);

global.LogginJS = LogginJS;
module.exports = LogginJS;
