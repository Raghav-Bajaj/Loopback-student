import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataStoreDataSource} from '../datasources';
import {Student, StudentRelations} from '../models';



export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.id,
  StudentRelations
> {
  // findByNumber(number: number, filter: import("@loopback/repository").FilterExcludingWhere<Student> | undefined): Student | PromiseLike<Student> {

  //   th






  //   // console.log("hello");
  //   // try{

  //   //   return Student ;

  //   // }catch{
  //   //   throw new Error('Method not implemented correctly.');
  //   // }


  //   // Student ab = filter?.fields[where][Student.prototype.number]=number ;

  // }

  // findmyNumber(id: number, filter: import("@loopback/repository").FilterExcludingWhere<Student> | undefined): Student | PromiseLike<Student> {

  //  }
  constructor(
    @inject('datasources.data_store') dataSource: DataStoreDataSource,
  ) {
    super(Student, dataSource);
  }
}
