import { FindConditions, getRepository, Like, Raw } from "typeorm";
import { Disciplina } from "../../entities/Disciplina";

type filter = {
    nome?: string;
}

export class GetAllDisciplinasService {
    async execute(query?:filter) {
        const repo = getRepository(Disciplina);

        const where: FindConditions<Disciplina> = {};

        if (query?.nome) {
            where.name = Raw((alias) => `${alias} ilike '%${query.nome}%'`);
        }

        const disciplinas = await repo.find({
            relations: ["area", "versoes"],
            where
        });

        return disciplinas;
    }

}