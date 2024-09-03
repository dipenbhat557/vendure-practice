import { addActionBarItem, DataService, NotificationService, ActionBarContext } from '@vendure/admin-ui/core';
import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import { saveAs } from 'file-saver';

@Injectable()
export class GenerateCsvService {
    constructor(
        private dataService: DataService,
        private notificationService: NotificationService
    ) {}

    generateCsv() {
        console.log("called generate csv")
        const GET_ORDERS = gql`
            query GetOrders($options: OrderListOptions) {
                orders(options: $options) {
                    items {
                        id
                        code
                        state
                        total
                        customer {
                            firstName
                            lastName
                        }
                        createdAt
                        updatedAt
                    }
                }
            }
        `;

        this.dataService.query(GET_ORDERS).mapSingle((result:any) => result.orders).subscribe({
            next: (orders) => {
                const csvData = this.convertToCsv(orders.items);
                this.downloadCsv(csvData);
            },
            error: () => this.notificationService.error('Failed to generate CSV', { duration: 3000 })
        });
        
    }

    private convertToCsv(orderItems: any[]): string {
        const header = 'ID, Code, State, Total, First Name, Last Name, Created At, Updated At';
        const rows = orderItems.map(order => {
            return [
                order.id,
                order.code,
                order.state,
                order.total,
                order.customer?.firstName || '',
                order.customer?.lastName || '',
                order.createdAt,
                order.updatedAt
            ].join(',');
        });
        return [header, ...rows].join('\n');
    }

    private downloadCsv(csvData: string) {
        const blob = new Blob([csvData], { type: 'text/csv' });
        saveAs(blob, 'orders.csv');
    }
}

export default [
    addActionBarItem({
        id: 'generate-csv-button',
        label: 'Generate CSV',
        locationId: 'order-list',
        // requiresPermission: 'OrderList' as any,
        onClick: (event: MouseEvent, context: ActionBarContext) => {
            const injector = context.injector;
            const dataService = injector.get(DataService);
            const notificationService = injector.get(NotificationService);
            const generateCsvService = new GenerateCsvService(dataService, notificationService);
            generateCsvService.generateCsv();
        },
    }),
];
