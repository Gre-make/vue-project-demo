import { get,post } from "./http";
// export const getData = (params) => get("后端接口名",params);
// export const getData1 = (data) => post("后端接口名",data);
//此处如果有参数传入给后端就需要写上参数 params/data 否则可以为空
export const getData = () => get("dp/custorm/saveLogFor");
export const getData1 = () => post("dp/custorm/saveLogFor");
