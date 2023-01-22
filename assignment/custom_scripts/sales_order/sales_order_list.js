frappe.listview_settings['Sales Order'] = {
	onload: function (listview) {
		listview.page.add_menu_item(__("Search Bulk"), function () {
            new frappe.ui.FileUploader({
                as_dataurl: true,
                allow_multiple: false,
                // restrictions: {
                //     allowed_file_types: ['csv']
                // },
                // upload_notes: "Upload CSV Files only",
                on_success(file) {
                    var filter_name = []
                    var data = frappe.utils.csv_to_array(frappe.utils.get_decoded_string(file.dataurl));
                    $.each(data, (i, row) => {
                        if (i > 0){
                            $.each(row, function (ci, value) {
                                if (ci == 0){
                                    if (value) {
                                        filter_name.push(value);
                                    }
                                }
                            });
                        }
                    });
                    if (filter_name){
                        listview.filter_area.add([["Sales Order", "name", 'in', filter_name]]);
                    }
                }
            });
            
		});
        
	}
};
