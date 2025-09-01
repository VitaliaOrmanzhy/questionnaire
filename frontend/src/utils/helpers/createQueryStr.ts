interface IParams {
  [key: string]: string | number | null;
}

const createQueryStr = (params: Partial<IParams>) => {
  return Object.entries(params).reduce((acc, el, idx, arr) => {
    return acc + `${el[0]}=${el[1]}` + (idx - 1 !== arr.length ? "&" : "");
  }, "");
};

export default createQueryStr;
