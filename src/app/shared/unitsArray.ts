import {MeasurementUnit} from './measurementUnit.model';

export const  UNITS: MeasurementUnit[] = [
    {
      id: 1,
      name: 'Units Measurement',
      factor: 1,
      nodes: [
        {
          id: 2,
          name: 'Time',
          parentId: 1,
          factor: 1,
          nodes: [
            {
              id: 3,
              name: 'Minute',
              parentId: 2,
              factor: 60,
              nodes: []
            },
            {
              id: 4,
              name: 'Seconds',
              parentId: 2,
              factor: 1,
              nodes: []
            }
          ]
        },
        {
          id: 5,
          name: 'Length',
          parentId: 1,
          factor: 1,
          nodes: []
        },
        {
          id: 6,
          name: 'Speed',
          parentId: 1,
          factor: 1,
          nodes: []
        }

      ]
    },

  ];
