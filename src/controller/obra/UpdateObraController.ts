import { Request, Response } from "express";
import { UpdateObraService } from "../../services/obra/UpdateObraService";

export class UpdateObraController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const {
            item_tipo,
            obra_nome,
            capitulo_nome,
            serie_nome,
            organizador_editor_nome,
            funcao,
            cidade,
            editora,
            ano,
            mes,
            dia,
            edicao,
            resumo,
            periodico_nome,
            periodico_abreviacao,
            numero,
            paginas,
            idioma,
            doi,
            isbn,
            issn,
            acesso_em,
            contido_em
        } = request.body;

        const service = new UpdateObraService();

        const result = await service.execute({
            id,
            item_tipo,
            obra_nome,
            capitulo_nome,
            serie_nome,
            organizador_editor_nome,
            funcao,
            cidade,
            editora,
            ano,
            mes,
            dia,
            edicao,
            resumo,
            periodico_nome,
            periodico_abreviacao,
            numero,
            paginas,
            idioma,
            doi,
            isbn,
            issn,
            acesso_em,
            contido_em
        });

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }
        
        return response.json(result);
    }
}