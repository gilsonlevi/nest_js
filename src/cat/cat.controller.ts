import { Controller, Get } from '@nestjs/common';

@Controller('cat')
export class CatController {
    @Get('all')
    findAll(): string {
        return 'All cats'
    }
}
