type variables = {
  Tmap: any;
  [propName: string]: any;
};

const globles: variables = {
  req: import.meta.env.VITE_BASE_API,
  Tmap: null
};

for (const key in globles) {
  (window as any)[key] = globles[key];
}
