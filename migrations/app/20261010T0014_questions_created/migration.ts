#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/1eedbf5d2198b1ea1529b2b86f10d21a775ed4098fda21ab19dc83b4d1c11e8d/contract';
import endContract from '../../snapshots/1eedbf5d2198b1ea1529b2b86f10d21a775ed4098fda21ab19dc83b4d1c11e8d/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/cce957251eed87392cf78928101ab3223f60ac2ddb413ad9fef214fa361e1e96/contract';
import startContract from '../../snapshots/cce957251eed87392cf78928101ab3223f60ac2ddb413ad9fef214fa361e1e96/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, fn, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'questions',
        columns: [
          col('content', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('created_at', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updated_at', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('user_id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
