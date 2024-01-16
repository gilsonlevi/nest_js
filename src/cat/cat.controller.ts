import { Body, Controller, Get, Param, Post, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { CatService } from './cat.service';
import { Cat } from './intefaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cat')
export class CatController {
    constructor(private catService: CatService) { }


    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        console.log(createCatDto)
        this.catService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catService.findAll();
    }
}
