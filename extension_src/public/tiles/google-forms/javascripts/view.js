jive.tile.onOpen(function(config, options) {

    $("#config_string").text(config["configString"]);
    var id = config["form_id"];
    var height = config["form_height"];
    var width = window.innerWidth;
    var appendedFrame = '<iframe src="https://docs.google.com/forms/d/' + id + '/viewform?embedded=true" width="100%" height="' + height + '" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>'
    $("body").append(appendedFrame);
    gadgets.window.adjustHeight();
});