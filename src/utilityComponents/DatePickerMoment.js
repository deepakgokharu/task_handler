import { DatePicker } from "antd";
import momentGenerateConfig from "rc-picker/lib/generate/moment";

const DatePickerMoment = DatePicker.generatePicker(momentGenerateConfig);

export default DatePickerMoment;
