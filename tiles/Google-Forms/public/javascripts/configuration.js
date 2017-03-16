(function() {
    jive.tile.onOpen(function(config, options ) {
        gadgets.window.adjustHeight();

        // make sure config has default value
        if (config === null) config = { };
        if (!config["data"]) {
            config["data"] = { };
        }
        if (!config["data"]["form_id"]) {
            config["data"]["form_id"] = "";
        }

        // populate the dialog with existing config value
        $("#form_id").val( config["data"]["form_id"]);
        config["data"]["form_height"] ? $('#form_height').val(config["data"]["form_height"]) : $('form_height').val("500");   

        // update config object after clicking submit
        $("#btn_submit").click( function() {
            config["data"]["form_id"] = $("#form_id").val();
            config["data"]["form_height"] = $("#form_height").val();
            jive.tile.close(config, {} );
        });
    });

})();