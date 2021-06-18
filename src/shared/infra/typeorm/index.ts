import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}
(async () => {
  const connectionOption = await getConnectionOptions();

  const newOptions = connectionOption as IOptions;
  // newOptions.host = "database";
  const connection = await createConnection({
    ...connectionOption,
  });

  const migrations = await connection.runMigrations();
  console.info(`Migrations run: ${migrations.length}`);
})();
