import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './members.entity';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private readonly MemberRepository: Repository<Member>,
  ) {}

  async findAll(): Promise<Member[]> {
    return await this.MemberRepository.find();
  }
  getAllMembers(): string {
    return 'Hello Members!';
  }

  async getMemberById(id: string): Promise<Member> {
      return await this.MemberRepository.findOne(id);
  }

  async updateMember(newMemberObject: Member): Promise<UpdateResult> {
    return await this.MemberRepository.update(newMemberObject.id, newMemberObject);
}
  async deleteMemberById(id: string): Promise<DeleteResult> {
      return await this.MemberRepository.delete(id);
  }

  async createMember(newMemberObject: Member): Promise<Member> {
      return await this.MemberRepository.save(newMemberObject);
  }
}
