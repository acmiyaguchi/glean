var N=null,E="",T="t",U="u",searchIndex={};
var R=["glean_core","string","commonmetricdata","test_get_value","Test-only API (exported for FFI purposes).","glean","option","should_record","category","jsonvalue","pingtype","database","snapshot","result","to_string","try_from","borrow_mut","try_into","type_id","to_owned","clone_into","borrow","typeid","glean_core::metrics","dataerror","glean_core::ping","glean_core::storage","with_meta","lifetime","errorkind","default","formatter","backtrace","CommonMetricData","Lifetime","ErrorType","PingType","BooleanMetric","CounterMetric","LabeledMetric","StringMetric","StringListMetric","UuidMetric","MetricType","PingMaker","StorageManager","glean_ffi","externerror","Create a new labeled metric.","Create a new instance of the sub-metric of this labeled…","ffistr"];
searchIndex[R[46]]={"doc":E,"i":[[5,"glean_destroy_labeled_counter_metric",R[46],E,N,[[[R[47]],["u64"]]]],[5,"glean_new_labeled_counter_metric",E,R[48],N,[[[R[50]],["i32"],["u8"]],["u64"]]],[5,"glean_labeled_counter_metric_get",E,R[49],N,[[[R[50]],["u64"]],["u64"]]],[5,"glean_destroy_labeled_boolean_metric",E,E,N,[[[R[47]],["u64"]]]],[5,"glean_new_labeled_boolean_metric",E,R[48],N,[[[R[50]],["i32"],["u8"]],["u64"]]],[5,"glean_labeled_boolean_metric_get",E,R[49],N,[[[R[50]],["u64"]],["u64"]]],[5,"glean_destroy_labeled_string_metric",E,E,N,[[[R[47]],["u64"]]]],[5,"glean_new_labeled_string_metric",E,R[48],N,[[[R[50]],["i32"],["u8"]],["u64"]]],[5,"glean_labeled_string_metric_get",E,R[49],N,[[[R[50]],["u64"]],["u64"]]],[5,"glean_enable_logging",E,"Initialize the logging system based on the target…",N,[[]]],[5,"glean_initialize",E,E,N,[[[R[50]],["u8"]],["u64"]]],[5,"glean_is_initialized",E,E,N,[[["u64"]],["u8"]]],[5,"glean_is_upload_enabled",E,E,N,[[["u64"]],["u8"]]],[5,"glean_set_upload_enabled",E,E,N,[[["u8"],["u64"]]]],[5,"glean_send_ping",E,E,N,[[["u8"],["u64"]],["u8"]]],[5,"glean_send_ping_by_name",E,E,N,[[[R[50]],["u8"],["u64"]],["u8"]]],[5,"glean_new_ping_type",E,E,N,[[[R[50]],["u8"]],["u64"]]],[5,"glean_test_has_ping_type",E,E,N,[[[R[50]],["u64"]],["u8"]]],[5,"glean_register_ping_type",E,E,N,[[["u64"]]]],[5,"glean_new_boolean_metric",E,E,N,[[[R[50]],["i32"],["u8"]],["u64"]]],[5,"glean_new_string_metric",E,E,N,[[[R[50]],["i32"],["u8"]],["u64"]]],[5,"glean_new_counter_metric",E,E,N,[[[R[50]],["i32"],["u8"]],["u64"]]],[5,"glean_counter_should_record",E,E,N,[[["u64"]],["u8"]]],[5,"glean_counter_add",E,E,N,[[["i32"],["u64"]]]],[5,"glean_counter_test_has_value",E,E,N,[[[R[50]],["u64"]],["u8"]]],[5,"glean_counter_test_get_value",E,E,N,[[[R[50]],["u64"]],["i32"]]],[5,"glean_boolean_should_record",E,E,N,[[["u64"]],["u8"]]],[5,"glean_boolean_set",E,E,N,[[["u8"],["u64"]]]],[5,"glean_boolean_test_has_value",E,E,N,[[[R[50]],["u64"]],["u8"]]],[5,"glean_boolean_test_get_value",E,E,N,[[[R[50]],["u64"]],["u8"]]],[5,"glean_string_should_record",E,E,N,[[["u64"]],["u8"]]],[5,"glean_string_set",E,E,N,[[[R[50]],["u64"]]]],[5,"glean_string_test_has_value",E,E,N,[[[R[50]],["u64"]],["u8"]]],[5,"glean_string_test_get_value",E,E,N,[[[R[50]],["u64"]]]],[5,"glean_ping_collect",E,E,N,[[["u64"]]]],[5,"glean_destroy_glean",E,E,N,[[[R[47]],["u64"]]]],[5,"glean_destroy_ping_type",E,E,N,[[[R[47]],["u64"]]]],[5,"glean_destroy_boolean_metric",E,E,N,[[[R[47]],["u64"]]]],[5,"glean_destroy_string_metric",E,E,N,[[[R[47]],["u64"]]]],[5,"glean_destroy_counter_metric",E,E,N,[[[R[47]],["u64"]]]],[5,"glean_str_free",E,"Public destructor for strings managed by the other side of…",N,[[]]]],"p":[]};
searchIndex[R[0]]={"doc":E,"i":[[3,R[33],R[0],E,N,N],[12,"name",E,E,0,N],[12,R[8],E,E,0,N],[12,"send_in_pings",E,E,0,N],[12,R[28],E,E,0,N],[12,"disabled",E,E,0,N],[3,"Error",E,"A specialized [`Error`] type for this crate's operations.",N,N],[3,"Glean",E,E,N,N],[4,R[34],E,E,N,N],[13,"Ping",E,"The metric is reset with each sent ping",1,N],[13,"Application",E,"The metric is reset on application restart",1,N],[13,"User",E,"The metric is reset with each user profile",1,N],[4,R[35],E,E,N,N],[13,"InvalidValue",E,E,2,N],[13,"InvalidLabel",E,E,2,N],[11,"as_str",E,E,1,[[],["str"]]],[11,"new",E,"Create a new metadata object",0,[[[R[1]],["into",[R[1]]]],[R[2]]]],[11,"identifier",E,E,0,[[["self"]],[R[1]]]],[11,R[7],E,E,0,[[["self"]],["bool"]]],[11,"storage_names",E,E,0,[[["self"]]]],[11,"kind",E,"Access the [`ErrorKind`] member.",3,[[["self"]],[R[29]]]],[11,R[14],E,E,2,[[["self"]],["str"]]],[0,"metrics",E,E,N,N],[3,R[37],R[23],E,N,N],[3,R[38],E,E,N,N],[3,R[39],E,"A labeled metric.",N,N],[3,R[36],E,"Stores information about a ping. This is required so that…",N,N],[12,"name",E,"The name of the ping.",4,N],[12,"include_client_id",E,"Whether the ping should include the client_id data",4,N],[3,R[40],E,E,N,N],[3,R[41],E,E,N,N],[3,R[42],E,E,N,N],[4,"Metric",E,E,N,N],[13,"Boolean",E,E,5,N],[13,"Counter",E,E,5,N],[13,"String",E,E,5,N],[13,"StringList",E,E,5,N],[13,"Uuid",E,E,5,N],[11,"new",E,E,6,[[[R[2]]],["self"]]],[11,"set",E,E,6,[[[R[5]],["self"],["bool"]]]],[11,R[3],E,R[4],6,[[[R[5]],["str"],["self"]],[[R[6],["bool"]],["bool"]]]],[11,"new",E,E,7,[[[R[2]]],["self"]]],[11,"add",E,E,7,[[[R[5]],["i32"],["self"]]]],[11,R[3],E,R[4],7,[[[R[5]],["str"],["self"]],[["i32"],[R[6],["i32"]]]]],[11,"new",E,"Create a new labeled metric from the given meta data and…",8,[[["vec",[R[1]]],[R[2]],[R[6],["vec"]]],["labeledmetric"]]],[11,"get",E,"Get a specific metric for a given label.",8,[[[R[5]],["str"],["self"]],[T]]],[11,"new",E,E,4,[[[R[1]],["bool"],["into",[R[1]]]],["self"]]],[11,"send",E,E,4,[[[R[5]],["self"],["bool"]],[[R[13],["bool"]],["bool"]]]],[11,"new",E,E,9,[[[R[2]]],["self"]]],[11,"set",E,E,9,[[[R[5]],[R[1]],["self"],["into",[R[1]]]]]],[11,R[3],E,R[4],9,[[[R[5]],["str"],["self"]],[[R[1]],[R[6],[R[1]]]]]],[11,"new",E,E,10,[[[R[2]]],["self"]]],[11,"add",E,E,10,[[[R[5]],[R[1]],["self"],["into",[R[1]]]]]],[11,"set",E,E,10,[[["vec",[R[1]]],[R[5]],[R[1]],["self"]]]],[11,"new",E,E,11,[[[R[2]]],["self"]]],[11,"set",E,E,11,[[[R[5]],["uuid"],["self"]]]],[11,"generate",E,E,11,[[[R[5]],["self"]],["uuid"]]],[11,"generate_if_missing",E,E,11,[[[R[5]],["self"]]]],[8,R[43],E,E,N,N],[10,R[27],E,E,12,[[[R[2]]],["self"]]],[10,"meta",E,E,12,[[["self"]],[R[2]]]],[11,R[7],E,E,12,[[[R[5]],["self"]],["bool"]]],[11,R[8],E,E,5,[[["self"]],["str"]]],[11,"as_json",E,E,5,[[["self"]],[R[9]]]],[0,"ping",R[0],E,N,N],[3,R[44],R[25],E,N,N],[11,"new",E,E,13,[[],["self"]]],[11,"collect",E,E,13,[[[R[10]],["self"],[R[11]]],[[R[9]],[R[6],[R[9]]]]]],[11,"collect_string",E,E,13,[[[R[10]],["self"],[R[11]]],[[R[1]],[R[6],[R[1]]]]]],[11,"store_ping",E,"Store a ping to disk in the pings directory.",13,[[["str"],["path"],[R[9]],["self"]],[R[13]]]],[0,"storage",R[0],E,N,N],[3,R[45],R[26],E,N,N],[11,R[12],E,E,14,[[["str"],["self"],[R[11]],["bool"]],[[R[1]],[R[6],[R[1]]]]]],[11,"snapshot_as_json",E,E,14,[[["str"],["self"],[R[11]],["bool"]],[[R[9]],[R[6],[R[9]]]]]],[11,"snapshot_metric",E,"Get the current value of a single metric identified by name.",14,[[["str"],["self"],[R[11]]],[[R[6],["metric"]],["metric"]]]],[6,"Result",R[0],"A specialized [`Result`] type for this crate's operations.",N,N],[11,"new",E,"Initialize the global Glean object.",15,[[["str"],["bool"]],[R[13]]]],[11,"is_initialized",E,"Determine whether the global Glean object is fully…",15,[[["self"]],["bool"]]],[11,"set_upload_enabled",E,"Set whether upload is enabled or not.",15,[[["self"],["bool"]]]],[11,"is_upload_enabled",E,"Determine whether upload is enabled.",15,[[["self"]],["bool"]]],[11,"get_application_id",E,E,15,[[["self"]],["str"]]],[11,"get_data_path",E,E,15,[[["self"]],["path"]]],[11,"storage",E,E,15,[[["self"]],[R[11]]]],[11,R[12],E,E,15,[[["str"],["self"],["bool"]],[R[1]]]],[11,"send_ping",E,"Send a ping.",15,[[[R[10]],["self"],["bool"]],[[R[13],["bool"]],["bool"]]]],[11,"send_ping_by_name",E,"Send a ping by name.",15,[[["str"],["self"],["bool"]],[[R[13],["bool"]],["bool"]]]],[11,"get_ping_by_name",E,E,15,[[["str"],["self"]],[[R[10]],[R[6],[R[10]]]]]],[11,"register_ping_type",E,E,15,[[[R[10]],["self"]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,R[19],E,E,0,[[["self"]],[T]]],[11,R[20],E,E,0,[[[T],["self"]]]],[11,R[15],E,E,0,[[[U]],[R[13]]]],[11,R[21],E,E,0,[[["self"]],[T]]],[11,R[18],E,E,0,[[["self"]],[R[22]]]],[11,R[16],E,E,0,[[["self"]],[T]]],[11,R[17],E,E,0,[[],[R[13]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[],[U]]],[11,R[14],E,E,3,[[["self"]],[R[1]]]],[11,R[15],E,E,3,[[[U]],[R[13]]]],[11,R[21],E,E,3,[[["self"]],[T]]],[11,R[18],E,E,3,[[["self"]],[R[22]]]],[11,R[16],E,E,3,[[["self"]],[T]]],[11,R[17],E,E,3,[[],[R[13]]]],[11,"as_fail",E,E,3,[[["self"]],["fail"]]],[11,"from",E,E,15,[[[T]],[T]]],[11,"into",E,E,15,[[],[U]]],[11,R[15],E,E,15,[[[U]],[R[13]]]],[11,R[21],E,E,15,[[["self"]],[T]]],[11,R[18],E,E,15,[[["self"]],[R[22]]]],[11,R[16],E,E,15,[[["self"]],[T]]],[11,R[17],E,E,15,[[],[R[13]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[19],E,E,1,[[["self"]],[T]]],[11,R[20],E,E,1,[[[T],["self"]]]],[11,R[15],E,E,1,[[[U]],[R[13]]]],[11,R[21],E,E,1,[[["self"]],[T]]],[11,R[18],E,E,1,[[["self"]],[R[22]]]],[11,R[16],E,E,1,[[["self"]],[T]]],[11,R[17],E,E,1,[[],[R[13]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[15],E,E,2,[[[U]],[R[13]]]],[11,R[21],E,E,2,[[["self"]],[T]]],[11,R[18],E,E,2,[[["self"]],[R[22]]]],[11,R[16],E,E,2,[[["self"]],[T]]],[11,R[17],E,E,2,[[],[R[13]]]],[11,"from",R[23],E,6,[[[T]],[T]]],[11,"into",E,E,6,[[],[U]]],[11,R[15],E,E,6,[[[U]],[R[13]]]],[11,R[21],E,E,6,[[["self"]],[T]]],[11,R[18],E,E,6,[[["self"]],[R[22]]]],[11,R[16],E,E,6,[[["self"]],[T]]],[11,R[17],E,E,6,[[],[R[13]]]],[11,"from",E,E,7,[[[T]],[T]]],[11,"into",E,E,7,[[],[U]]],[11,R[15],E,E,7,[[[U]],[R[13]]]],[11,R[21],E,E,7,[[["self"]],[T]]],[11,R[18],E,E,7,[[["self"]],[R[22]]]],[11,R[16],E,E,7,[[["self"]],[T]]],[11,R[17],E,E,7,[[],[R[13]]]],[11,"from",E,E,8,[[[T]],[T]]],[11,"into",E,E,8,[[],[U]]],[11,R[15],E,E,8,[[[U]],[R[13]]]],[11,R[21],E,E,8,[[["self"]],[T]]],[11,R[18],E,E,8,[[["self"]],[R[22]]]],[11,R[16],E,E,8,[[["self"]],[T]]],[11,R[17],E,E,8,[[],[R[13]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[],[U]]],[11,R[19],E,E,4,[[["self"]],[T]]],[11,R[20],E,E,4,[[[T],["self"]]]],[11,R[15],E,E,4,[[[U]],[R[13]]]],[11,R[21],E,E,4,[[["self"]],[T]]],[11,R[18],E,E,4,[[["self"]],[R[22]]]],[11,R[16],E,E,4,[[["self"]],[T]]],[11,R[17],E,E,4,[[],[R[13]]]],[11,"from",E,E,9,[[[T]],[T]]],[11,"into",E,E,9,[[],[U]]],[11,R[15],E,E,9,[[[U]],[R[13]]]],[11,R[21],E,E,9,[[["self"]],[T]]],[11,R[18],E,E,9,[[["self"]],[R[22]]]],[11,R[16],E,E,9,[[["self"]],[T]]],[11,R[17],E,E,9,[[],[R[13]]]],[11,"from",E,E,10,[[[T]],[T]]],[11,"into",E,E,10,[[],[U]]],[11,R[15],E,E,10,[[[U]],[R[13]]]],[11,R[21],E,E,10,[[["self"]],[T]]],[11,R[18],E,E,10,[[["self"]],[R[22]]]],[11,R[16],E,E,10,[[["self"]],[T]]],[11,R[17],E,E,10,[[],[R[13]]]],[11,"from",E,E,11,[[[T]],[T]]],[11,"into",E,E,11,[[],[U]]],[11,R[15],E,E,11,[[[U]],[R[13]]]],[11,R[21],E,E,11,[[["self"]],[T]]],[11,R[18],E,E,11,[[["self"]],[R[22]]]],[11,R[16],E,E,11,[[["self"]],[T]]],[11,R[17],E,E,11,[[],[R[13]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,"into",E,E,5,[[],[U]]],[11,R[19],E,E,5,[[["self"]],[T]]],[11,R[20],E,E,5,[[[T],["self"]]]],[11,R[15],E,E,5,[[[U]],[R[13]]]],[11,R[21],E,E,5,[[["self"]],[T]]],[11,R[18],E,E,5,[[["self"]],[R[22]]]],[11,R[16],E,E,5,[[["self"]],[T]]],[11,R[17],E,E,5,[[],[R[13]]]],[11,"to_bytes",E,E,5,[[["self"]],[["vec",["u8"]],[R[24]],[R[13],["vec",R[24]]]]]],[11,"from",R[25],E,13,[[[T]],[T]]],[11,"into",E,E,13,[[],[U]]],[11,R[15],E,E,13,[[[U]],[R[13]]]],[11,R[21],E,E,13,[[["self"]],[T]]],[11,R[18],E,E,13,[[["self"]],[R[22]]]],[11,R[16],E,E,13,[[["self"]],[T]]],[11,R[17],E,E,13,[[],[R[13]]]],[11,"from",R[26],E,14,[[[T]],[T]]],[11,"into",E,E,14,[[],[U]]],[11,R[15],E,E,14,[[[U]],[R[13]]]],[11,R[21],E,E,14,[[["self"]],[T]]],[11,R[18],E,E,14,[[["self"]],[R[22]]]],[11,R[16],E,E,14,[[["self"]],[T]]],[11,R[17],E,E,14,[[],[R[13]]]],[11,R[27],R[23],E,6,[[[R[2]]],["self"]]],[11,"meta",E,E,6,[[["self"]],[R[2]]]],[11,R[27],E,E,7,[[[R[2]]],["self"]]],[11,"meta",E,E,7,[[["self"]],[R[2]]]],[11,R[27],E,E,9,[[[R[2]]],["self"]]],[11,"meta",E,E,9,[[["self"]],[R[2]]]],[11,R[27],E,E,10,[[[R[2]]],["self"]]],[11,"meta",E,E,10,[[["self"]],[R[2]]]],[11,R[27],E,E,11,[[[R[2]]],["self"]]],[11,"meta",E,E,11,[[["self"]],[R[2]]]],[11,"eq",R[0],E,1,[[[R[28]],["self"]],["bool"]]],[11,"clone",E,E,1,[[["self"]],[R[28]]]],[11,"clone",E,E,0,[[["self"]],[R[2]]]],[11,"clone",R[23],E,4,[[["self"]],[R[10]]]],[11,"clone",E,E,5,[[["self"]],["metric"]]],[11,"from",R[0],E,3,[[[R[29]],["context",[R[29]]]],["error"]]],[11,"from",E,E,3,[[["handleerror"]],["error"]]],[11,"from",E,E,3,[[["error"]],["error"]]],[11,"from",E,E,3,[[["storeerror"]],["error"]]],[11,"from",E,E,3,[[["error"]],["error"]]],[11,R[30],E,E,1,[[],["self"]]],[11,R[30],E,E,0,[[],[R[2]]]],[11,R[30],R[25],E,13,[[],["self"]]],[11,"fmt",R[0],E,1,[[[R[31]],["self"]],[R[13]]]],[11,"fmt",E,E,0,[[[R[31]],["self"]],[R[13]]]],[11,"fmt",E,E,3,[[[R[31]],["self"]],[R[13]]]],[11,"fmt",E,E,2,[[[R[31]],["self"]],[R[13]]]],[11,"fmt",R[23],E,6,[[[R[31]],["self"]],[R[13]]]],[11,"fmt",E,E,7,[[[R[31]],["self"]],[R[13]]]],[11,"fmt",E,E,8,[[[R[31]],["self"]],[R[13]]]],[11,"fmt",E,E,4,[[[R[31]],["self"]],[R[13]]]],[11,"fmt",E,E,9,[[[R[31]],["self"]],[R[13]]]],[11,"fmt",E,E,10,[[[R[31]],["self"]],[R[13]]]],[11,"fmt",E,E,11,[[[R[31]],["self"]],[R[13]]]],[11,"fmt",E,E,5,[[[R[31]],["self"]],[R[13]]]],[11,"fmt",R[0],E,15,[[[R[31]],["self"]],[R[13]]]],[11,"fmt",E,E,3,[[[R[31]],["self"]],[R[13]]]],[11,R[15],E,E,1,[[["i32"]],[[R[28]],[R[13],[R[28]]]]]],[11,"serialize",R[23],E,5,[[["__s"],["self"]],[R[13]]]],[11,"deserialize",E,E,5,[[["__d"]],[R[13]]]],[11,"cause",R[0],E,3,[[["self"]],[["fail"],[R[6],["fail"]]]]],[11,R[32],E,E,3,[[["self"]],[[R[32]],[R[6],[R[32]]]]]]],"p":[[3,R[33]],[4,R[34]],[4,R[35]],[3,"Error"],[3,R[36]],[4,"Metric"],[3,R[37]],[3,R[38]],[3,R[39]],[3,R[40]],[3,R[41]],[3,R[42]],[8,R[43]],[3,R[44]],[3,R[45]],[3,"Glean"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);