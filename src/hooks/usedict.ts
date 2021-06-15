import { getdictBytype } from "@/api/public";

// 字典
export function getDict(...arg: string[]): Promise<ObjectBase> {
  return new Promise((resolve, reject) => {
    const searchString = arg.join(",");
    getdictBytype({
      dictType: searchString,
    }).then(({ code, data }) => {
      if (code === 200) {
        const obj = Object.entries(data).reduce((sum: ObjectBase, [key, value]) => {
          const dicList: Map<string, string> = new Map();
          (value as any[]).forEach((dict: any) => {
            dicList.set(dict.dictValue, dict.dictLabel);
          });
          sum[key] = dicList;
          return sum;
        }, {});
        resolve(obj);
      } else {
        reject(new Error("暂无数据或服务器报错"));
      }
    });
  });
}
