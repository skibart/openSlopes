export class ResortItem {
  constructor(
    public name: string,
    public region: string,
    public resortId: string,
    public openSlopes: Slope[],
    public image: string,
    public dateEpoch: number,
    public dateLocal: string
  ) {}
}

export class Slope {
  constructor(
    public name: string,
    public length: number,
    public status: string
  ) {}
}
