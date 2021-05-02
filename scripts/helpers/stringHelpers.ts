export function makeUppercase(str:string) :string {

    return str.toUpperCase();
  }


  export function replaceSpaces(str:string):string {
   
    return str.replace(/\s/g, "_");
  }

  export function limitLength(len:number, str:string):string {
    return str.substr(0, len);
  }