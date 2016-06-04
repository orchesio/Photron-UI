
import { REQUEST_NODES } from '../constants/ActionType'


export const nodes = (state, action) => {
    switch (action.type) {
        case 'REQUEST_NODES':

            // hardcode date for now, should call API
            return [
              {
                name: "aaa",
                ip: '1.1.1.1',
                cpu: 8,
                capacity: ""
              },
                {name: "bb",
                ip: '1.1.1.1',
                cpu: 8,
                capacity: ""
              },
              {
                name: "cc",
                ip: '1.1.1.1',
                cpu: 8,
                capacity: ""
              }];
        default: return state || [];
    }
}