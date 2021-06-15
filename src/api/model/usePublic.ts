export interface IdictData {
  dictCode: number;
  dictLabel: string;
  dictType: string;
}
export interface IGetdict {
  dwsEventType?: IdictData[];
}
