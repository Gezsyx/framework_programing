import { Module } from '@nestjs/common';
import { CustomersAddressesController } from './customers_addresses.controller.js';

@Module({
  controllers: [CustomersAddressesController]
})
export class CustomersAddressesModule {}
