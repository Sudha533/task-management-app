import { Injectable } from '@nestjs/common';
import { Name } from './name.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
constructor(
  @InjectRepository(Name)
  private nameRepository : Repository<Name>,
){}
async addName(firstName:string,lastName:string){
// take the name and save it to the name table of the database
await this.nameRepository.save({
  first_name:firstName,
  last_name:lastName});
// Returning the name from database instead the value we sending
return await this.getNames();
}
async getNames(){
    return await this.nameRepository.find();
    
  }
}
