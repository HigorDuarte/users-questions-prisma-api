#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/1eedbf5d2198b1ea1529b2b86f10d21a775ed4098fda21ab19dc83b4d1c11e8d/contract';
import startContract from '../../snapshots/1eedbf5d2198b1ea1529b2b86f10d21a775ed4098fda21ab19dc83b4d1c11e8d/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/d4d0f15ed1105a7bf2d069fbe85e3054859a83e8f939944b25d9289e06931369/contract';
import endContract from '../../snapshots/d4d0f15ed1105a7bf2d069fbe85e3054859a83e8f939944b25d9289e06931369/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createIndex({
        schema: 'public',
        table: 'questions',
        index: 'questions_user_id_idx_6c952402',
        columns: ['user_id'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'questions',
        foreignKey: {
          name: 'questions_user_id_fkey',
          columns: ['user_id'],
          references: { schema: 'public', table: 'users', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
