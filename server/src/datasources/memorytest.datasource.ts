import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './memorytest.datasource.json';

export class MemorytestDataSource extends juggler.DataSource {
  static dataSourceName = 'memorytest';

  constructor(
    @inject('datasources.config.memorytest', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
