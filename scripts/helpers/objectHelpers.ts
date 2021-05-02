import { makeUppercase, replaceSpaces, limitLength } from "./stringHelpers";

 export interface product{
    id:number;
    code:string;
    title:string;
}
export function createProduct({id, code, title}:product):product {
	return {
		id: id,
		code: makeUppercase(code),
		title: limitLength(12, replaceSpaces(title)),
	};
}
