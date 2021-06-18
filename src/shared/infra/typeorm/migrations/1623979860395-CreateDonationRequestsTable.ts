import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDonationRequestsTable1623979860395
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "donationRequests",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "bloodType",
            type: "varchar",
          },
          {
            name: "totalAmount",
            type: "decimal",
          },
          {
            name: "reachedAmount",
            type: "decimal",
            default: 0,
          },
          {
            name: "inProgress",
            type: "boolean",
            default: true,
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "phonedecimal",
            type: "varchar",
          },
          {
            name: "addressState",
            type: "varchar",
          },
          {
            name: "addressCity",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKDonationRequestsUser",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("donationRequests");
  }
}
