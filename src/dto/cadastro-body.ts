import { IsNotEmpty, Length } from "class-validator";

export class CadastroBody{
    @IsNotEmpty({ 
        message:"campo nome é obrigatorio"
    })
    nome: string;
    @IsNotEmpty({ 
        message:"campo nome é obrigatorio"
    })
    @Length(11,14)
    cpf: string
}