import {Column, Model, PrimaryKey, Table} from 'sequelize-typescript';

@Table
export class Article extends Model {
    @PrimaryKey
    @Column
    id: string;

    @Column
    title: string;

    @Column
    text: string;
}