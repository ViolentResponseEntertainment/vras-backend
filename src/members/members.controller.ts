import { Controller, Get, Put, Body, Post, Param, Delete } from '@nestjs/common';
import { MembersService } from './members.service';
import { Member } from './members.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('members')
export class MembersController {
    constructor(private readonly membersService: MembersService) {}

  @Get()
  getAllMembers(): string {
    return this.membersService.getAllMembers();
  }

  @Get(':id')
  getMemberById(@Param('id') id: string): Promise<Member> {
      return this.membersService.getMemberById(id);
  }

  @Delete(':id')
  deleteMemberById(@Param('id') id: string): Promise<DeleteResult> {
      return this.membersService.deleteMemberById(id);
  }

  @Post()
  createMember(@Body() body: Member): Promise<Member> {
      return this.membersService.createMember(body);
  }

  @Put()
  updateMember(@Body() body: Member): Promise<UpdateResult> {
      return this.membersService.updateMember(body);
  }
}
