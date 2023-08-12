import { Cadastro } from "@prisma/client";

export abstract class CadastroRepository {
    abstract post(nome: string, cpf: string): Promise<Cadastro>
    abstract getAll(): Promise<Cadastro[]>
}