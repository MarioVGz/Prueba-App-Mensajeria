import axios from 'axios';

export interface INotificadorDTO {
  numero?: string;
  correo?: string;
  contenido: string;
}

export class Notificador {
  private static readonly BASE_URL = '/api/notificador';

  /**
   * Crea una nueva notificación
   * @param notificadorDTO Los datos de la notificación a crear
   * @returns Promise con la notificación creada
   */
  public static async create(notificadorDTO: INotificadorDTO): Promise<INotificadorDTO> {
    const response = await axios.post<INotificadorDTO>(this.BASE_URL, notificadorDTO);
    return response.data;
  }
}
