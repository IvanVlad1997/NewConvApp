export interface MeasurementUnit {
    name: string;
    id: number;
    nodes: MeasurementUnit[];
    parentId?: number;
    factor: number;
    drop: boolean;
}

