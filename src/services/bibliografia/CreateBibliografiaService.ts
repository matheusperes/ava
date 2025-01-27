import { getRepository, In } from "typeorm";
import { validate } from "uuid";
import { Bibliografia } from "../../entities/Bibliografia";
import { DisciplinaVersao } from "../../entities/DisciplinaVersao";
import { Obra } from "../../entities/Obra";

type BibliografiaRequest = {
    versao_disciplina_id: string;
    obra_id: string;
    tipo: boolean;
}

export class CreateBibliografiaService {
    async execute ({versao_disciplina_id, obra_id, tipo}: BibliografiaRequest) {
        if (!validate(versao_disciplina_id) && !validate(obra_id)){
            return new Error("ID's inválidos");
        }
        const repo = getRepository(Bibliografia);
        const repoDisciplinaVersao = getRepository(DisciplinaVersao);
        const repoObra = getRepository(Obra);

        const disciplinaVersao = await repoDisciplinaVersao.findOne(versao_disciplina_id);
        const obra = await repoObra.findOne(obra_id);

        if(!disciplinaVersao) {
            return new Error("Versão de disciplina não existe!");
        }
        
        if(!obra) {
            return new Error("Obra não existe!");
        }

        const bibliografia = repo.create({versao_disciplina_id, obra_id, tipo});

        await repo.save(bibliografia);

        return {
            ...bibliografia, disciplinaVersao, obra
        };
    }
}