import {
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Column,
  DataType,
  Index,
} from "sequelize-typescript";
import { Optional } from "sequelize";

export interface UserAttributes {
  id: number;
  googleUid: string;
  accountId: string;
  password: string;
  name: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

@Table({
  timestamps: true,
})
export default class User extends Model<
  UserAttributes,
  UserCreationAttributes
> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id!: number;

  @Index("google-uid-index")
  @AllowNull(false)
  @Column(DataType.STRING)
  googleUid!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  accountId!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;
}
