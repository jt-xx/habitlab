const {polymer_ext} = require('libs_frontend/polymer_utils');
const {cfy} = require('cfy');

polymer_ext({
  is: 'feedback-button-right',
  feedback_button_clicked: cfy(function*() {
    var screenshot_utils = yield SystemJS.import('libs_common/screenshot_utils');
    var screenshot = yield screenshot_utils.get_screenshot_as_base64();
    var feedback_form = document.createElement('feedback-form')
    document.body.appendChild(feedback_form);
    feedback_form.screenshot = screenshot;
    feedback_form.open();
    
    /*
    SystemJS.import('bugmuncher/bugmuncher').then(function() {
      window.open_bugmuncher()
    })
    */
  })
});
