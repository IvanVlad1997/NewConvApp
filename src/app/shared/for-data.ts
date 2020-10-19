import {MeasurementUnit} from './measurement-unit';

export interface DataType {
  unitM: MeasurementUnit;
  dialogType: boolean;
  initialValueName: string;
  initialValueFactor: number;
}
