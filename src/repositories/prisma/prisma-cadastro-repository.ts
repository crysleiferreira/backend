import { PrismaService } from "src/database/prisma.service";
import { CadastroRepository } from "../cadastro-repository";
import { randomUUID } from "node:crypto";
import { Injectable } from "@nestjs/common";
import { Cadastro } from "@prisma/client";


@Injectable()
export class PrismaCadastroRepository implements CadastroRepository{

    constructor(private prisma: PrismaService){}

    async post(nome: string, cpf: string): Promise<Cadastro> {

        return this.prisma.cadastro.create({data: { id: randomUUID(), nome, cpf}});
    }

    async getAll(): Promise<Cadastro[]> {
       
        return this.prisma.cadastro.findMany()
        
    }

}