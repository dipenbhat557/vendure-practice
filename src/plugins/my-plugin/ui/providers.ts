import { addActionBarItem } from '@vendure/admin-ui/core';

export default [
    addActionBarItem({
        id: 'generate-csv-button',
        label: 'Generate CSV',
        locationId: 'order-list',
    }),
];