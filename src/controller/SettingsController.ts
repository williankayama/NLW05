import { getCustomRepository } from 'typeorm';
import { Request, Response } from "express";
import { SettingsRepository } from "../repositories/SettingsRepository"


class SettingsController {

    // Tipos de parâmetros

    // Routes Params => Parametros de rota
    // localhost:3333/settings/1
    // Query Params => Filtros e buscas
    // localhost:3333/settings/1?search=algumacoisa
    // Body Params => Inserções/Alterações

    async create(request: Request, response: Response) {

        const { chat, username } = request.body;

        const settingsRepository = getCustomRepository(SettingsRepository);

        const settings = settingsRepository.create({
            chat,
            username
        });

        await settingsRepository.save(settings);

        return response.json(settings);
    }
}

export { SettingsController }