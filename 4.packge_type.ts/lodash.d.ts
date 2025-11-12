declare module "lodash" {
  interface LODASH {
    lowerCase: (param: string) => string;
  }
  const _: LODASH;
  export default _;
}
