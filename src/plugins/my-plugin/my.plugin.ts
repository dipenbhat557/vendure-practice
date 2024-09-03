import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';
import * as path from 'path';

import { MY_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [{ provide: MY_PLUGIN_OPTIONS, useFactory: () => MyPlugin.options }],
    configuration: config => {
        // Plugin-specific configuration
        // such as custom fields, custom permissions,
        // strategies etc. can be configured here by
        // modifying the `config` object.
        return config;
    },
    compatibility: '^3.0.0',
})
export class MyPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<MyPlugin> {
        this.options = options;
        return MyPlugin;
    }

    static ui: AdminUiExtension = {
        id: 'my-ui',
        extensionPath: path.join(__dirname, 'ui'),
        routes: [{ route: 'my', filePath: 'routes.ts' }],
        providers: ['providers.ts'],
    };
}
