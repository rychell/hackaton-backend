import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1623979388371 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "isDonator",
            type: "boolean",
          },
          {
            name: "bloodType",
            type: "varchar",
          },
          {
            name: "AddressState",
            type: "varchar",
          },
          {
            name: "AddressNumber",
            type: "varchar",
          },
          {
            name: "phoneNumber",
            type: "varchar",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
