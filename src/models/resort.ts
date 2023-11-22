export class ResortItem {
  constructor(
    public name: string,
    public region: string,
    public resortId: string,
    public openSlopes: Slope[],
    public img: string,
    public dateEpoch: number,
    public dateLocal: Date,
    public openSlopesQuantity: number,
    public slopeQuantity: number
  ) {}
}

export class Slope {
  constructor(
    public name: string,
    public length: number,
    public status: string
  ) {}
}
