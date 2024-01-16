import { Controller, Get, Param, Post, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
const Cats = [{id:1, nome:"Garfield"}, {id:2, nome:"Mingau"}]

@Controller('cat')
export class CatController {
    @Get(':id')
    findOne(@Param() params: any): string {
        const found = Cats.find((cat) => cat.id == params.id)
        if(found == undefined){
            return 'Cat not found'
        }else {        
            return `Here is the cat ${found.nome}`
        }
    }

    @Post()
    create(): string {
        return 'A new cat was created';
    }

    @Get('ab*cd')
    useWildcard() {
        return 'This route uses a wildcard';
    }

    @Get()
    findAll(@Req() request: Request): string {
        return 'All cats'
    }
}
