import { Request, Response } from "express";
import { CreateCompetenciaPpcDisciplinaVersaoService } from "../../services/ppc_disciplina_versao/CreateCompetenciaPpcDisciplinaVersaoService";

export class CreateCompetenciaPpcDisciplinaVersaoController {
    async handle (request: Request, response: Response) {
        const { competencia_id, ppcDisciplinaVersao_id } = request.body;

        const service = new CreateCompetenciaPpcDisciplinaVersaoService;

        const result = await service.execute({
            competencia_id,
            ppcDisciplinaVersao_id
        });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}