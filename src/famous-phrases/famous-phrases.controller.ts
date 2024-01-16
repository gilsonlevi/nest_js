import { Controller, Get, Param } from '@nestjs/common';

const phrases = [{id:1, nome:"Will Smith", frase:"loremewkfeekekekek"}]

@Controller('famous-phrases')
export class FamousPhrasesController {
    @Get()
    index() {
        return 'Frases famosas'
    }

    @Get(':id')
    findAll(@Param() params: any ): object{
        const found = phrases.find((phrase) => phrase.id == params.id)
        if(found == undefined) {
            return {}
        }else {
            return found
        }
    }
}
