import mssql, { Request } from "mssql";
import { sqlConfig, Role } from "../config/config";

export default class Connection {
  private pools: Record<string, Promise<mssql.ConnectionPool>>;

  constructor() {
    this.pools = this.createPools();
  }

  private createPools(): Record<string, Promise<mssql.ConnectionPool>> {
    const roles = Object.keys(sqlConfig);
    const pools: Record<string, Promise<mssql.ConnectionPool>> = {};

    roles.forEach((role : string) => {
      pools[role] = this.getConnection(role as Role);
    });

    return pools;
  }

  private async getConnection(role: Role): Promise<mssql.ConnectionPool> {
    const pool = (await sqlConfig[role]).connect() as Promise<mssql.ConnectionPool>;
    return pool;
  }

  createRequest(request: Request, data: Record<string, string>) {
    const keys = Object.keys(data);
    keys.forEach((keyName) => {
      const keyValue = data[keyName];
      request.input(keyName, keyValue);
    });

    return request;
  }

  async exec(role: string, procedureName: string, data: Record<string, string> = {}) {
    let pool = await this.pools[role];
    let request = (await pool.request()) as Request;

    request = this.createRequest(request, data);

    const result = await request.execute(procedureName);
    return result;
  }

  async query(role: string, query: string) {
    const results = await (await this.pools[role]).request().query(query);
    return results;
  }
}
