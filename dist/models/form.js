"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
var Form;
(function (Form) {
    var InputType;
    (function (InputType) {
        InputType["TEXT"] = "text";
        InputType["EMAIL"] = "email";
        InputType["PASSWORD"] = "password";
        InputType["URL"] = "url";
        InputType["NUMBER"] = "number";
        InputType["DATE"] = "date";
        InputType["TIME"] = "time";
        InputType["DATE_TIME"] = "datetime";
        InputType["FILE"] = "file";
        InputType["TEXT_AREA"] = "textarea";
        InputType["SELECT"] = "select";
        InputType["MULTI_SELECT"] = "multiselect";
        InputType["GROUPED_SELECT"] = "grouped_select";
        InputType["PRICE"] = "price";
        InputType["SELECT_GROUP"] = "selectgroup";
        InputType["RADIO_GROUP"] = "radiogroup";
        InputType["CHECKBOX"] = "checkbox";
        InputType["CHECKBOX_GROUP"] = "checkboxgroup";
        InputType["BLANK"] = "blank";
        InputType["QUILL"] = "quill";
        InputType["PHONE"] = "phone";
    })(InputType = Form.InputType || (Form.InputType = {}));
})(Form = exports.Form || (exports.Form = {}));
exports.default = Form;
