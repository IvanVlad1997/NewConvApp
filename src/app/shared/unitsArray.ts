import {MeasurementUnit} from './measurementUnit.model';

export const  UNITS: MeasurementUnit[] = [
    {
      id: 1,
      name: 'Units Measurement',
      factor: 1,
      drop: true,
      nodes: [
        {
          id: 2,
          name: 'Time',
          parentId: 1,
          factor: 1,
          drop: true,
          nodes: [
            {
              id: 3,
              name: 'Minute',
              parentId: 2,
              factor: 60,
              drop: true,
              nodes: []
            },
            {
              id: 4,
              name: 'Seconds',
              parentId: 2,
              factor: 1,
              drop: true,
              nodes: []
            }
          ]
        },
        {
          id: 5,
          name: 'Length',
          parentId: 1,
          factor: 1,
          drop: true,
          nodes: []
        },
        {
          id: 6,
          name: 'Speed',
          parentId: 1,
          factor: 1,
          drop: true,
          nodes: []
        }

      ]
    },

  ];
